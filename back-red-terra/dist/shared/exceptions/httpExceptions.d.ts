export declare class HttpException extends Error {
    statusCode: number;
    message: string;
    success: boolean;
    constructor(status: number, message: string, success: boolean);
}
