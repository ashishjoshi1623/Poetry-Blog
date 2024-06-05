import React from 'react'
import { useId } from 'react'

function Select({
    className = "",
    options,
    label,
    ...props
},ref) {
    const id = useId(); // \provides unique IDs
  return (
    <>
        <div className='w-full'>
            {label && <label htmlFor={id} className=''>

            <select id={id}
            {...props}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {options?.map((option) => {
                    <option
                    key={option}
                    value={option}
                    >{option}</option>
                })}

            </select>

            </label>}
        </div>
    </>
  )
}

export default React.forwardRef(Select)