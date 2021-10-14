export class BaseResponse {
    static OK = 200;
    static SC401 = 401;
    static SC402 = 402;
    static SC407 = 407;
    static SC408 = 408;
    static SC411 = 411;
    static SC417 = 417;
    static SC419 = 419;
    static SC420 = 420;
    static SC421 = 421;
    static SC424 = 424;
    static SC425 = 425;
    static SC500 = 500;
    static SC432 = 432;
    static SC406 = 406;
    static SC409 = 409;
    status: number;
    message?: string;

    constructor(status: number, message?: string) {
        this.status = status;
        this.message = message;
    }

    ok(): boolean {
        return this.status === BaseResponse.OK;
    }
}



