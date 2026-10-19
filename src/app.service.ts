import { Injectable } from '@nestjs/common';
// will you appear ?
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
