export type ResponseType<T = {}> = {
    resultCode: ResultCodeTypes
    messages: string[]
    data: T
}

export enum ResultCodeTypes {
    Success = 0,
    Error = 1,
    Captcha = 10
}