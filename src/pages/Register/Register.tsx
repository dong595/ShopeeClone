import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { rules } from 'src/utils/rules'
interface FormData {
  email: string
  password: string
  confirm_password: string
}
export default function Register() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()
  const onSubmit = handleSubmit(
    (data) => console.log(data),
    (data) => {
      const password = getValues('password')
      console.log(password)
    }
  )
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng ký</div>
              <div className='mt-8'>
                <input
                  {...register('email', rules.email)}
                  type='email'
                  placeholder='Email'
                  className='py-3 pl-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-color'
                />
                <div className='mt-1 text-red-600 text-sm .min-h-[1.25rem]'>{errors.email?.message}</div>
              </div>
              <div className='mt-3'>
                <input
                  {...register('password', rules.password)}
                  type='password'
                  placeholder='Password'
                  autoComplete='on'
                  className='py-3 pl-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-color'
                />
                <div className='mt-1 text-red-600 text-sm .min-h-[1.25rem]'>{errors.password?.message}</div>
              </div>
              <div className='mt-3'>
                <input
                  {...register('confirm_password', {
                    ...rules.confirm_password,
                    validate: (value) => value === getValues('password') || 'Mật khẩu không khớp'
                  })}
                  type='password'
                  autoComplete='on'
                  placeholder='Confirm Password'
                  className='py-3 pl-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-color'
                />
                <div className='mt-1 text-red-600 text-sm .min-h-[1.25rem]'>{errors.confirm_password?.message}</div>
              </div>
              <div className='mt-3'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
              <div className='flex items-center justify-center mt-8'>
                <span className='text-slate-400 mr-1'>Bạn đã có tài khoản?</span>
                <Link to='/login' className='text-red-400'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
