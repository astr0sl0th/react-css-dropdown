# react-css-dropdown

> A customizable react dropdown component that only uses CSS.

[![NPM](https://img.shields.io/npm/v/react-css-dropdown.svg)](https://www.npmjs.com/package/react-css-dropdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-css-dropdown
yarn add react-css-dropdown
```

## Usage

```tsx
import React, { Component } from 'react'

import Dropdown from 'react-css-dropdown'
import 'react-css-dropdown/dist/index.css'

class Example extends Component {
  constructor() {
    super()
    this.state = {
      options: [
        { name: 'Option 1', value: '1234' },
        { name: 'Option 2', value: '5678' },
        { name: 'Option 2', value: '91011' }
      ],
      handleSelect: (value: string) => console.log(value)
    }
  }
  render() {
    return <Dropdown {...this.state.props} />
  }
}
```

## Pitfalls

As `react-css-dropdown` still uses native the HTML `<select>` element you are still at the perel of browser styled `<option>` elements but that said at least you don't have to go to the trouble of creating a dropdown from scratch and the complexity that goes along with it.

## License

MIT © [Joe Hill](https://github.com/astr0sl0th)
