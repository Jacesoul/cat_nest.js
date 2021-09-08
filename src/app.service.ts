import { Injectable } from '@nestjs/common';

// AppService처럼 공급자로 취급이 된것들은 의존성주입이 가능하다.
@Injectable()
export class AppService {
  getHello(): string {
    // code
    return 'Hello World!';
  }
}
