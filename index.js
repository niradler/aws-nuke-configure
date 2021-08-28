#!/usr/bin/env node

const yaml = require("js-yaml");
const program = require("commander");
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const regions = require("./regions");

inquirer.registerPrompt(
  "autocomplete",
  require("inquirer-autocomplete-prompt")
);

const resources = fs
  .readFileSync(path.join(__dirname, "resources.txt"), "utf8")
  .split("\n")
  .map((r) => r.replace(/\n|\r/gi, ""));

let config = {
  regions: [],
  "account-blocklist": [],
  presets: {},
  accounts: {},
};

const inputMany = async (
  repeatQuestions,
  conditionQuestions = [
    {
      name: "answer",
      type: "confirm",
      message: "Add more?",
    },
  ]
) => {
  let _picks = [];
  let _stop = true;
  while (_stop) {
    let res = await inquirer.prompt(repeatQuestions);
    _picks.push(res);
    res = await inquirer.prompt(conditionQuestions);
    if (!res.answer) {
      _stop = false;
    }
  }

  return _picks;
};

const guided = async (fileName = "nuke-config.yml") => {
  let res, picks;
  try {
    const configPath = path.join(process.cwd(), fileName);
    if (fs.existsSync(configPath)) {
      res = await inquirer.prompt([
        {
          name: "answer",
          type: "confirm",
          message: `Load ${configPath}?`,
        },
      ]);
      if (res.answer) {
        config = yaml.load(fs.readFileSync(configPath, "utf8"));
      } else {
        console.log(`Please delete ${configPath} to start from scratch.`);
        process.exit(0);
      }
    } else {
      res = await inquirer.prompt([
        {
          name: "answer",
          type: "confirm",
          message: `Create nuke-config.yml file at ${configPath}?`,
        },
      ]);
      if (res.answer) {
        fs.writeFileSync(configPath, yaml.dump(config));
      } else {
        process.exit(0);
      }
    }

    res = await inquirer.prompt([
      {
        name: "answer",
        type: "confirm",
        message: "Add regions?",
      },
    ]);
    if (res.answer) {
      picks = await inputMany([
        {
          name: "answer",
          type: "list",
          message: "region:",
          choices: Object.keys(regions),
        },
      ]);
      picks.forEach((r) => config.regions.push(r.answer));
    } else {
      if (!Array.isArray(config.regions)) {
        config.regions = [];
      }
      if (config.regions.length === 0) {
        config.regions.push("global");
      }
    }

    res = await inquirer.prompt([
      {
        name: "answer",
        type: "confirm",
        message: "Add account block list?",
      },
    ]);
    if (res.answer) {
      picks = await inputMany([
        {
          name: "answer",
          type: "input",
          message: "Add account number:",
          validate: (input) => (input && input.length > 0 ? true : false),
        },
      ]);
      if (!Array.isArray(config["account-blocklist"])) {
        config["account-blocklist"] = [];
      }
      picks.forEach((r) => config["account-blocklist"].push(r.answer));
    }

    res = await inquirer.prompt([
      {
        name: "answer",
        type: "confirm",
        message: "Add presets?",
      },
    ]);
    if (res.answer) {
      picks = await inputMany([
        {
          name: "name",
          type: "input",
          message: "name:",
          validate: (input) => (input && input.length > 0 ? true : false),
        },
        {
          name: "resource",
          message: "resource:",
          type: "autocomplete",
          pageSize: 10,
          source: async (answers, input) => {
            if (!input) return resources;
            return resources.filter((o) =>
              o.toLowerCase().includes(input.toLowerCase())
            );
          },
        },
        {
          name: "property",
          type: "input",
          message: "property: (can be blank)",
        },
        {
          name: "type",
          type: "list",
          message: "filter type:",
          choices: ["exact", "contains", "glob", "regex", "dateOlderThan"],
        },
        {
          name: "value",
          type: "input",
          message: "value:",
          validate: (input) => (input && input.length > 0 ? true : false),
        },
      ]);
      picks.forEach((answers) => {
        const preset = Object.keys(config["presets"]).find(
          (key) => key === answers.name
        );
        if (!preset) {
          config["presets"][answers.name] = {};
          config["presets"][answers.name]["filters"] = {};
          config["presets"][answers.name]["filters"][answers.resource] = [];
        }
        if (
          !Array.isArray(
            config["presets"][answers.name]["filters"][answers.resource]
          )
        ) {
          config["presets"][answers.name]["filters"][answers.resource] = [];
        }
        let filterObject = {};
        if (answers.property) filterObject.property = answers.property;
        if (answers.type) filterObject.type = answers.type;
        if (answers.value) filterObject.value = answers.value;
        config["presets"][answers.name]["filters"][answers.resource].push(
          filterObject
        );
      });
    }

    res = await inquirer.prompt([
      {
        name: "answer",
        type: "confirm",
        message: "Add accounts?",
      },
    ]);
    if (res.answer) {
      picks = await inputMany([
        {
          name: "account",
          type: "input",
          message: "Add account number:",
          validate: (input) => (input && input.length > 0 ? true : false),
        },
        {
          name: "usePreset",
          type: "confirm",
          message: "Do you want to use preset?",
        },
        {
          name: "name",
          type: "input",
          message: "name:",
          when: (answers) => answers.usePreset === true,
          validate: (input) => (input && input.length > 0 ? true : false),
        },
        {
          name: "all",
          type: "confirm",
          message: "Apply to all resources?",
          when: (answers) => answers.usePreset === false,
        },
        {
          name: "resource",
          message: "resource:",
          type: "autocomplete",
          pageSize: 10,
          when: (answers) =>
            answers.usePreset === false && answers.all === false,
          source: async (answers, input) => {
            if (!input) return resources;
            return resources.filter((o) =>
              o.toLowerCase().includes(input.toLowerCase())
            );
          },
        },
        {
          name: "property",
          type: "input",
          message: "property: (can be blank)",
          when: (answers) => answers.usePreset === false,
        },
        {
          name: "type",
          type: "list",
          message: "filter type:",
          choices: ["exact", "contains", "glob", "regex", "dateOlderThan"],
          when: (answers) => answers.usePreset === false,
        },
        {
          name: "value",
          type: "input",
          message: "value:",
          when: (answers) => answers.usePreset === false,
          validate: (input) => (input && input.length > 0 ? true : false),
        },
      ]);
      picks.forEach((answers) => {
        const account = Object.keys(config.accounts).find(
          (key) => key === answers.account
        );
        if (!account) {
          config.accounts[answers.account] = {};
        }
        if (answers.usePreset) {
          if (!Array.isArray(config.accounts[answers.account]["presets"])) {
            config.accounts[answers.account]["presets"] = [];
          }
          config.accounts[answers.account]["presets"].push(answers.name);
        } else {
          if (!config.accounts[answers.account]["filters"]) {
            config.accounts[answers.account]["filters"] = {};
          }
          if (answers.all) {
            resources.forEach((resource) => {
              if (
                !Array.isArray(
                  config.accounts[answers.account]["filters"][resource]
                )
              ) {
                config.accounts[answers.account]["filters"][resource] = [];
              }
              let filterObject = {};
              if (answers.property) filterObject.property = answers.property;
              if (answers.type) filterObject.type = answers.type;
              if (answers.value) filterObject.value = answers.value;
              config.accounts[answers.account]["filters"][resource].push(
                filterObject
              );
            });
          } else {
            if (
              !Array.isArray(
                config.accounts[answers.account]["filters"][answers.resource]
              )
            ) {
              config.accounts[answers.account]["filters"][answers.resource] =
                [];
            }
            let filterObject = {};
            if (answers.property) filterObject.property = answers.property;
            if (answers.type) filterObject.type = answers.type;
            if (answers.value) filterObject.value = answers.value;
            config.accounts[answers.account]["filters"][answers.resource].push(
              filterObject
            );
          }
        }
      });
    }

    Object.keys(config).forEach((key) => {
      try {
        const isArray = Array.isArray(config[key]);
        const isObject = typeof config[key] === "object";
        if (isArray && config[key].length === 0) {
          delete config[key];
        } else if (
          !isArray &&
          isObject &&
          Object.keys(config[key]).length === 0
        ) {
          delete config[key];
        }
        if (isArray && config[key]) {
          config[key] = [...new Set(config[key])];
        }
      } catch (error) {
        console.error("Format Error", key, error);
      }
    });
    fs.writeFileSync(configPath, yaml.dump(config));
  } catch (e) {
    console.log(e);
  }
};

program.option("--fileName <name>", "File Name", "nuke-config.yml").parse();

const options = program.opts();
guided(options.fileName);
