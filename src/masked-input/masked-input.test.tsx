import { Input }   from '@material-ui/core';
import { shallow } from 'enzyme';
import React       from 'react';
import MaskedInput from './masked-input';

describe('<MaskedInput/>', () => {
  describe('no mask', () => {
    it('should pass the value to the material-ui Input component', () => {
      const wrapper = shallow(<MaskedInput value="foo" />);

      const innerInput = wrapper.find(Input);

      expect(innerInput.prop('value')).toEqual('foo');
    });

    it('should trigger onChange on change event', () => {
      const onChange = jest.fn();
      const event    = {
        currentTarget: {
          value: 'food',
        },
      };

      const wrapper = shallow(<MaskedInput value="foo" onChange={ onChange } />);

      const innerInput = wrapper.find(Input);
      innerInput.simulate('change', event);

      expect(onChange).toHaveBeenCalledWith(event);
    });
  });

  describe('string mask', () => {
    it('should pass a masked input value to the child component', () => {
      const mask  = 'Hello, ';
      const value = 'World!';

      const wrapper = shallow(<MaskedInput value={ value } mask={ mask } />);

      const innerInput = wrapper.find(Input);

      expect(innerInput.prop('value')).toEqual(mask + value);
    });

    it('should pass the unmasked value with onValueChange', () => {
      const mask          = 'Hello, ';
      const value         = 'World!';
      const onValueChange = jest.fn();
      const event         = {
        currentTarget: {
          value: `${ mask + value }!`,
        },
      };

      const wrapper = shallow(<MaskedInput value={ value } mask={ mask } onValueChange={ onValueChange } />);

      const innerInput = wrapper.find(Input);
      innerInput.simulate('change', event);

      expect(onValueChange).toHaveBeenCalledWith('World!!');
    });

    it('should not change the value passed to onValueChange if value is empty and a field is backspaced', () => {
      const mask          = 'Hello, ';
      const onValueChange = jest.fn();
      const event         = {
        currentTarget: {
          value: 'Hello,',
        },
      };

      const wrapper = shallow(<MaskedInput value="" mask={ mask } onValueChange={ onValueChange } />);

      const innerInput = wrapper.find(Input);
      innerInput.simulate('change', event);

      expect(onValueChange).toHaveBeenCalledWith('');
    });
  });

  it('should pass a className to Input', () => {
    const className = 'foo';

    const wrapper = shallow(<MaskedInput value="" className={ className } />);

    const innerInput = wrapper.find(Input);

    expect(innerInput.prop('className')).toEqual(className);
  });
});
