import React from 'react'

import { Dropdown } from 'react-css-dropdown'
import 'react-css-dropdown/dist/index.css'

const App = () => {
  const props = {
    options: [
      { name: 'Option 1', value: '1' },
      { name: 'Option 2', value: '2' },
      { name: 'Option 3', value: '3' },
      { name: 'Option 4', value: '4', disabled: true }
    ],
    handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => {
      console.log(event)
    }
  }
  return <Dropdown {...props} />
}

export default App
