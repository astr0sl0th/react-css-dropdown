import React from 'react'
import clsx from 'clsx'

import styles from './styles.module.css'

interface Props {
  containerClass?: string
  selectClass?: string
  arrowClass?: string
  defaultSelection?: { name?: string; isActive?: boolean }
  options: { name: string; value: string | number; disabled?: boolean }[]
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => any
}

export const Dropdown: React.FunctionComponent<Props> = ({
  options,
  defaultSelection = { name: 'Choose selection', isActive: true },
  handleSelect,
  containerClass,
  selectClass,
  arrowClass
}) => {
  return (
    <div className={clsx(styles.selectContainer, containerClass)}>
      <select
        className={clsx(styles.select, selectClass)}
        defaultValue={defaultSelection.name}
        onChange={handleSelect}
      >
        {defaultSelection.isActive && (
          <option disabled value={defaultSelection.name}>
            {defaultSelection.name}
          </option>
        )}
        {options.map(({ name, value, disabled = false }, index) => (
          <option key={index} value={value} disabled={disabled}>
            {name}
          </option>
        ))}
      </select>
      <span className={clsx(styles.arrow, arrowClass)} tabIndex={0} />
    </div>
  )
}
