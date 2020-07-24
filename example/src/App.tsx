import React from 'react'

import { Dropdown } from 'react-css-dropdown'
import 'react-css-dropdown/dist/index.css'

const App = () => {
  const props = {
    options: [
      { name: 'Option 1', value: '1234' },
      { name: 'Option 2', value: '5678' },
      { name: 'Option 2', value: '91011' }
    ],
    handleSelect: (value: string) => console.log(value)
  }
  return <Dropdown {...props} />
}

export default App
