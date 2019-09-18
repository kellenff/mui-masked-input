import { Input } from '@material-ui/core';
import React     from 'react';

export interface MaskedInputProps {
  value: string;
  mask?: string;
  onValueChange?: (value: string) => void;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const MaskedInput: React.FC<MaskedInputProps> = ({ value, mask, onValueChange, onChange }) => {
  const maskedInput = (mask || '') + value;
  const maskSearch  = mask && new RegExp(`^${ mask }`);

  return (
    <Input value={ maskedInput }
           onChange={ (event) => {
             if (onValueChange !== undefined) {
               if (value === '' && event.currentTarget.value.length <= (mask || '').length) {
                 onValueChange(value);
               }

               const strippedValue = maskSearch
                 ? event.currentTarget.value.replace(maskSearch, '')
                 : event.currentTarget.value;
               onValueChange(strippedValue);
             }

             if (onChange !== undefined) {
               onChange(event);
             }
           } }
    />
  );
};

export default MaskedInput;
