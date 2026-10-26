import { Injectable } from '@nestjs/common';
// will you 
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
