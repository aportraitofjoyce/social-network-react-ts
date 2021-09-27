import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '6f228861-1f0c-43fb-a420-fcf28121de49'},
})