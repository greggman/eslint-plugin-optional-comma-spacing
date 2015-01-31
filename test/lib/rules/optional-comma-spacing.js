"use strict";

var linter = require("eslint").linter;
var ESLintTester = require("eslint-tester");
var eslintTester = new ESLintTester(linter);

eslintTester.addRuleTest("lib/rules/optional-comma-spacing", {
    valid: [
        {
            code: "var a = [a,b];",
            args: [2],
        },
        {
            code: "var a = [a, b];",
            args: [2],
        },
        {
            code: "var a = [a ,b];",
            args: [2],
        },
        {
            code: "var a = [a, b];",
            args: [2, {after: true}],
        },
        {
            code: "var a = [a , b];",
            args: [2, {after: true}],
        },
        {
            code: "var a = [a ,b];",
            args: [2, {before: true}],
        },
        {
            code: "var a = [a , b];",
            args: [2, {before: true}],
        },
    ],

    invalid: [
        {
            code: "var a = [a,b];",
            args: [2, { after: true }],
            errors: [ { message: "A space is required after ','." }]
        },
        {
            code: "var a = [a, b];",
            args: [2, { after: false }],
            errors: [ { message: "There should be no space after ','." }]
        },
        {
            code: "var a = [a,b];",
            args: [2, { before: true }],
            errors: [ { message: "A space is required before ','." }]
        },
        {
            code: "var a = [a ,b];",
            args: [2, { before: false }],
            errors: [ { message: "There should be no space before ','." }]
        },
    ]
});
