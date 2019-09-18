import { Input } from '@material-ui/core';
import React     from 'react';

export interface MaskedInputProps {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const MaskedInput: React.FC<MaskedInputProps> = ({ value, onChange }) => (
  <Input value={value}
         onChange={onChange && ((event) => onChange(event))}
  />
);

export default MaskedInput;
