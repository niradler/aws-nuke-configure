const yaml = require("js-yaml");
const program = require("commander");
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const resources = fs
  .readFileSync(path.join(__dirname, "resources.txt"), "utf8")
  .split("\n")
  .map((r) => r.replace(/\n|\r/gi, ""));

let config = {
  regions: [],
  "account-blocklist": [],
  accounts: {},
  presets: {},
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
    res = await inquirer.prompt([
      {
        name: "answer",
        type: "confirm",
        message: `Create nuke-config.yml? (or reuse ${configPath})`,
      },
    ]);
    if (res.answer) {
      if (fs.existsSync(configPath)) {
        res = await inquirer.prompt([
          {
            name: "answer",
            type: "confirm",
            message: `Override existing file: (${fileName})`,
          },
        ]);
      }
      if (res.answer) {
        fs.writeFileSync(fileName, yaml.dump(config));
      } else {
        process.exit(0);
      }
    } else {
      config = yaml.load(fs.readFileSync(configPath, "utf8"));
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
          type: "input",
          message: "region:",
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
        },
        {
          name: "resource",
          type: "input",
          message: "resource:",
        },
        {
          name: "type",
          type: "input",
          message: "type:",
        },
        {
          name: "value",
          type: "input",
          message: "value:",
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
        config["presets"][answers.name]["filters"][answers.resource].push({
          type: answers.type,
          value: answers.value,
        });
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
        },
        {
          name: "all",
          type: "confirm",
          message: "Apply to all resources?",
          when: (answers) => answers.usePreset === false,
        },
        {
          name: "resource",
          type: "input",
          message: "resource:",
          when: (answers) =>
            answers.usePreset === false && answers.all === false,
        },
        {
          name: "type",
          type: "input",
          message: "type:",
          when: (answers) => answers.usePreset === false,
        },
        {
          name: "value",
          type: "input",
          message: "value:",
          when: (answers) => answers.usePreset === false,
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
              config.accounts[answers.account]["filters"][resource].push({
                type: answers.type,
                value: answers.value,
              });
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
            config.accounts[answers.account]["filters"][answers.resource].push({
              type: answers.type,
              value: answers.value,
            });
          }
        }
      });
    }

    Object.keys(config).forEach((key) => {
      const isArray = Array.isArray(config[key]);
      if (isArray && config[key].length === 0) {
        delete config[key];
      } else if (!isArray && Object.keys(config[key]).length === 0) {
        delete config[key];
      }
    });
    fs.writeFileSync(fileName, yaml.dump(config));
  } catch (e) {
    console.log(e);
  }
};

program.option("--fileName <name>", "File Name", "nuke-config.yml").parse();

const options = program.opts();
guided(options.fileName);
