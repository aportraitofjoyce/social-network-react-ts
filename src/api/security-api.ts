import {axiosInstance} from './axios-instance'

export const securityAPI = {
    getCaptchaURL: () => axiosInstance
        .get<{ url: string }>('security/get-captcha-url')
        .then(response => response.data.url)
}