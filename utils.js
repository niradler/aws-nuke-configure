const inquirer = require("inquirer");

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

const cleanup = (config) => {
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
};

const initializeArray = (value) => {
  if (!Array.isArray(value)) {
    value = [];
  }

  return value;
};

const initializeObject = (value) => {
  if (value === undefined || !typeof value === "object") {
    value = {};
  }

  return value;
};

module.exports = {
  initializeArray,
  initializeObject,
  inputMany,
  cleanup,
};
