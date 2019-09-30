import * as React from 'react'
import './Select.scss'


type TProps = {
  data: Array<{ value: string, name: string }>,
  clearable: boolean,
  name: string,
  label: string,
}

export function Select({
  clearable = false,
  data,
  name,
  label,
}: TProps) {
  const [selected, setSelected] = React.useState(clearable ? '' : data[0])

  return (
    <div>
      <label className="select-label" htmlFor={name} >{label}</label>
      &nbsp;
      <select
        className="select"
        name={name}
        onChange={(e) => {
          setSelected(e.target.options[e.target.selectedIndex].value)
        }}
        value={selected}
      >
        {clearable && <option className="select-option" key="empty" value="" />}
        {
          data.map(item => (
            <option
              className="select-option"
              key={item.value}
              value={item.value}
            >
              {item.name}
            </option>
          ))
        }
      </select>
    </div>
  )
}
