import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm()
  const onSubmit = handleSubmit(
    (data) => console.log(data),
    (data) => {
      const password = getValues('password')
    }
  )
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='py-3 pl-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-color'
                />
                <div className='mt-1 text-red-600 text-sm .min-h-[1rem]'>Email không hợp lệ</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  autoComplete='on'
                  name='password'
                  placeholder='Password'
                  className='py-3 pl-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-color'
                />
                <div className='mt-1 text-red-600 text-sm .min-h-[1rem]'>Mật khẩu không hợp lệ</div>
              </div>
              <div className='mt-3'>
                <button
                  type='submit'
                  className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'
                >
                  Đăng nhập
                </button>
              </div>
              <div className='flex items-center justify-center mt-8'>
                <span className='text-slate-400 mr-1'>Bạn chưa có tài khoản?</span>
                <Link to='/register' className='text-red-400'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
