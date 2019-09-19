"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react/jsx-props-no-spreading */
var core_1 = require("@material-ui/core");
// eslint-disable-next-line import/no-unresolved
var react_1 = __importDefault(require("react"));
/**
 * @callback onValueChange
 * @param {string} value The stripped value from the Input's `onChange` callback
 * @return {void}
 */
/**
 * @callback onChange
 * @param {event} event The direct event passed back from the `Input`'s `onChange` callback
 * @return {void}
 */
/**
 * A basic masked input component which wraps `material-ui`'s `Input` component
 * @param {string} value The value of the input element
 * @param {string=} mask The text mask to be placed in front of the input's value
 * @param {onValueChange} onValueChange Callback which fires from the child `Input`'s `onChange` callback
 * @param {onChange} onChange Direct pass-through of the `Input`'s `onChange` callback.
 * WARNING: reading the value from this can lead to unexpected behavior if a user backspaces on an empty value
 * @param inputProps Other properties passed to the Input component
 * @constructor
 */
var MaskedInput = function (_a) {
    var value = _a.value, mask = _a.mask, onValueChange = _a.onValueChange, onChange = _a.onChange, inputProps = __rest(_a, ["value", "mask", "onValueChange", "onChange"]);
    var maskedInput = (mask || '') + value;
    var maskSearch = mask && new RegExp("^" + mask + "?");
    var handleValueChange = function (eventValue) {
        if (value === '' && eventValue.length <= (mask || '').length) {
            onValueChange(value);
        }
        var strippedValue = maskSearch
            ? eventValue.replace(maskSearch, '')
            : eventValue;
        onValueChange(strippedValue);
    };
    var onInputChange = function (event) {
        if (onValueChange !== undefined) {
            handleValueChange(event.currentTarget.value);
        }
        if (onChange !== undefined) {
            onChange(event);
        }
    };
    return (react_1.default.createElement(core_1.Input, __assign({ value: maskedInput, onChange: function (event) { return onInputChange(event); } }, inputProps)));
};
exports.default = MaskedInput;
