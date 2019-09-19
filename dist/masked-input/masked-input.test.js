"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var enzyme_1 = require("enzyme");
var react_1 = __importDefault(require("react"));
var masked_input_1 = __importDefault(require("./masked-input"));
describe('<MaskedInput/>', function () {
    describe('no mask', function () {
        it('should pass the value to the material-ui Input component', function () {
            var wrapper = enzyme_1.shallow(react_1.default.createElement(masked_input_1.default, { value: "foo" }));
            var innerInput = wrapper.find(core_1.Input);
            expect(innerInput.prop('value')).toEqual('foo');
        });
        it('should trigger onChange on change event', function () {
            var onChange = jest.fn();
            var event = {
                currentTarget: {
                    value: 'food',
                },
            };
            var wrapper = enzyme_1.shallow(react_1.default.createElement(masked_input_1.default, { value: "foo", onChange: onChange }));
            var innerInput = wrapper.find(core_1.Input);
            innerInput.simulate('change', event);
            expect(onChange).toHaveBeenCalledWith(event);
        });
    });
    describe('string mask', function () {
        it('should pass a masked input value to the child component', function () {
            var mask = 'Hello, ';
            var value = 'World!';
            var wrapper = enzyme_1.shallow(react_1.default.createElement(masked_input_1.default, { value: value, mask: mask }));
            var innerInput = wrapper.find(core_1.Input);
            expect(innerInput.prop('value')).toEqual(mask + value);
        });
        it('should pass the unmasked value with onValueChange', function () {
            var mask = 'Hello, ';
            var value = 'World!';
            var onValueChange = jest.fn();
            var event = {
                currentTarget: {
                    value: mask + value + "!",
                },
            };
            var wrapper = enzyme_1.shallow(react_1.default.createElement(masked_input_1.default, { value: value, mask: mask, onValueChange: onValueChange }));
            var innerInput = wrapper.find(core_1.Input);
            innerInput.simulate('change', event);
            expect(onValueChange).toHaveBeenCalledWith('World!!');
        });
        it('should not change the value passed to onValueChange if value is empty and a field is backspaced', function () {
            var mask = 'Hello, ';
            var onValueChange = jest.fn();
            var event = {
                currentTarget: {
                    value: 'Hello,',
                },
            };
            var wrapper = enzyme_1.shallow(react_1.default.createElement(masked_input_1.default, { value: "", mask: mask, onValueChange: onValueChange }));
            var innerInput = wrapper.find(core_1.Input);
            innerInput.simulate('change', event);
            expect(onValueChange).toHaveBeenCalledWith('');
        });
    });
    it('should pass a className to Input', function () {
        var className = 'foo';
        var wrapper = enzyme_1.shallow(react_1.default.createElement(masked_input_1.default, { value: "", className: className }));
        var innerInput = wrapper.find(core_1.Input);
        expect(innerInput.prop('className')).toEqual(className);
    });
});
