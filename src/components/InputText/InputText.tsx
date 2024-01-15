'use client'

interface IInputTextProp {
  disabled?: boolean
  fullWidth?: boolean
  value: string
  helperText?: any
  placeholder?: string
  type: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  disabled,
  fullWidth,
  value,
  helperText,
  placeholder,
  type,
  onChange
}: IInputTextProp) => {
  
  return (
    <>
      <input
        className={`bg-transparent resize-none p-4 text-sm rounded-md outline-hover ${fullWidth ? 'w-full' : ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}

      />
      {helperText && <p className="text-red-500 text-xs">{helperText}</p>}
    </>
  )
}
