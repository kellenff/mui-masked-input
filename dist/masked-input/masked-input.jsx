"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var react_1 = __importDefault(require("react"));
exports.MaskedInput = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return (<core_1.Input value={value} onChange={onChange && (function (event) { return onChange(event); })}/>);
};
