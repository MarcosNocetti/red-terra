export class HttpException extends Error {
  statusCode: number;
  message: string;
  success: boolean;

  constructor(status: number, message: string, success: boolean) {
    super(message);
    this.statusCode = status;
    this.message = message;
    this.success = success;
  }
}
