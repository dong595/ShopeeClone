import { type RegisterOptions } from 'react-hook-form'
type Rules = { [Key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
export const rules: Rules = {
  email: {
    required: 'Không được để trống email',
    minLength: {
      value: 5,
      message: 'Độ dài từ 5 - 160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5 - 160 kí tự'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    }
  },
  password: {
    required: 'Không được để trống password',
    minLength: {
      value: 6,
      message: 'Độ dài từ 6 - 160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 - 160 kí tự'
    }
  },
  confirm_password: {
    required: 'Không được để trống confirm password',
    minLength: {
      value: 6,
      message: 'Độ dài từ 6 - 160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 - 160 kí tự'
    }
  }
}
