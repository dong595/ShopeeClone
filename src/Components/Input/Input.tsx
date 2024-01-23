/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'
interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
}
export default function Input({
  type,
  errorMessage,
  placeholder,
  className,
  name,
  register,
  rules,
  autoComplete
}: Props) {
  return (
    <div className={className}>
      <input
        {...register(name, rules)}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className='py-3 pl-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-color'
      />
      <div className='mt-1 text-red-600 text-sm .min-h-[1.25rem]'>{errorMessage}</div>
    </div>
  )
}
