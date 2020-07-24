import React from 'react'
import clsx from 'clsx'

import styles from './styles.module.css'

interface Props {
  containerClass?: string
  selectClass?: string
  arrowClass?: string
  options: { name: string; value: string | number }[]
  handleSelect: (value: string) => string | any
}

export const Dropdown: React.FunctionComponent<Props> = ({
  options,
  handleSelect,
  containerClass,
  selectClass,
  arrowClass
}) => {
  return (
    <div className={clsx(styles.selectContainer, containerClass)}>
      <select
        className={clsx(styles.select, selectClass)}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleSelect(event.target.value)
        }
      >
        {options.map(({ name, value }, index) => (
          <option className={clsx(styles.option)} key={index} value={value}>
            {name}
          </option>
        ))}
      </select>
      <span className={clsx(styles.arrow, arrowClass)} tabIndex={0} />
    </div>
  )
}
