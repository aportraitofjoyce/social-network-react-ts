import {axiosInstance} from './axios-instance'

export const securityAPI = {
    getCaptchaURL: () => axiosInstance.get('security/get-captcha-url')
}