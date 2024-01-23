/* eslint-disable @typescript-eslint/no-explicit-any */
import { type RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'
type Rules = { [Key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
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
    required: {
      value: true,
      message: 'Nhập lại password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 - 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6 - 160 ký tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Nhập lại password không khớp'
        : undefined
  }
})
export const schema = yup
  .object({
    email: yup
      .string()
      .required('Không được để trống Email')
      .email('Email không đúng định dạng')
      .min(5, 'Độ dài từ 5 - 160 kí tự ')
      .max(160, 'Độ dài từ 5 - 160 kí tự'),
    password: yup
      .string()
      .required('Không được để trống mật khẩu')
      .min(6, 'Độ dài từ 6 - 160 kí tự')
      .max(160, 'Độ dài từ 6 -160 kí tự'),
    confirm_password: yup
      .string()
      .required('Không được để trống nhập lại mật khẩu')
      .min(6, 'Độ dài từ 6 - 160 kí tự')
      .max(160, 'Độ dài từ 6 -160 kí tự')
      .oneOf([yup.ref('password')], 'Nhập lại password không khớp')
  })
  .required()
const loginSchema = schema.omit(['confirm_password'])
yup.InferType<typeof loginSchema>
export type Schema = yup.InferType<typeof schema>
