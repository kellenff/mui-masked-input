# mui-masked-input

This package provides masked `input` components for `material-ui`. The project is written in Typescript with provided type definitions, and targets es5 in its output.

## Usage

### `MaskedInput`

```typescript jsx
import React, {useState} from 'react';
import {MaskedInput} from 'mui-masked-input';

export const MyForm: React.FC = () => {
  const [name, setName] = useState('');

  return (
    <MaskedInput value={name}
                 mask="Ms. "
                 onValueChange={(name) => setName(name)}
    />  
  );
};
```

This component will provide an `Input` component from `material-ui` which will start with the value `"Ms. "`. If an `"A"` is typed into the input, the `name` state will be `"A"`, and the `Input`'s `value` will be `"Ms. A"`.

## Code of Conduct
This project uses the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct, version `1.4.1`. See [code-of-conduct.md](code-of-conduct.md) for the full text.

## Versioning

This package mostly adheres to [Semantic Versioning](https://semver.org/). With the exception that `0.x.y` versions will increment the minor version on breaking changes to the public documented API, and patch versions will include new functionality. This is similar to [Rust's API evolution guidelines](https://github.com/rust-lang/rfcs/blob/master/text/1105-api-evolution.md).

## Contribution

This work is dual-licensed under MIT and Apache-2.0 open source licenses. To contribute, please submit a pull request to the GitHub repo. Please read and adhere to the [Code of Conduct](code-of-conduct.md) before contributing, thank you.
