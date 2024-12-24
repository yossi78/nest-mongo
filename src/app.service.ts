import { Injectable } from '@nestjs/common';

//xxxx

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
