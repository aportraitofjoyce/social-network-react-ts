export type ResponseType<Data = {}, RC = ResultCodesTypes> = {
    resultCode: RC
    messages: string[]
    data: Data
}

export enum ResultCodesTypes {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptchaType {
    Captcha = 10
}