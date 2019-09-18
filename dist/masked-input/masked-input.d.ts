import React from 'react';
export interface MaskedInputProps {
    value: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}
export declare const MaskedInput: React.FC<MaskedInputProps>;
