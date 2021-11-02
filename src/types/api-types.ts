export type ServerResponse<Data = {}, RC = ResultCodes> = {
    resultCode: RC
    messages: string[]
    data: Data
}

export enum ResultCodes {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    Captcha = 10
}