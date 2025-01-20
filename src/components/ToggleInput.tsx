import { useState } from 'react'

interface ToggleInputProps {
  name: string
  title: string
}

const ToggleInput = ({ name, title }: ToggleInputProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label
        htmlFor={name}
        className='  text-sm font-semibold mx-1'>
        {title}
      </label>
      <div className='relative mx-1 mt-1' >
        <input
          name={name}
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <div
          className={`box block cursor-pointer h-8 w-14 bg-gray-200 rounded-full border shadow-sm ${isChecked ? 'bg-primary' : 'bg-dark'
            }`}
          onClick={handleCheckboxChange}
        >
          <div
            className={`absolute left-1 top-1 border cursor-pointer flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${isChecked ? 'translate-x-full' : ''
              }`}
          />
        </div>
      </div>

    </>
  )
}

export default ToggleInput
