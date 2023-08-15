import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHealth() {
    return {
      statusCode: 200,
      message: 'OK',
    };
  }
}
