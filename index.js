"use strict";

module.exports = {
    rules: {
        "require-trailing-comma": require("./lib/rules/optional-comma-spacing"),
    },
    rulesConfig: {
        "require-trailing-comma": 0,
    }
};
