import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  hiCatsServiceProduct() {
    return 'hello cat!';
  }
}
