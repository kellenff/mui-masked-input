import { Input }   from '@material-ui/core';
import React       from 'react';
import { shallow } from 'enzyme';
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
      const event = {
        currentTarget: {
          value: 'food',
        },
      };

      const wrapper = shallow(<MaskedInput value="foo" onChange={onChange} />);

      const innerInput = wrapper.find(Input);
      innerInput.simulate('change', event);

      expect(onChange).toHaveBeenCalledWith(event);
    });
  });
});
