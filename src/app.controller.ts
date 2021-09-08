import { Controller, Get, Req, Body, Param } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  // AppController는 소비자 appService 제품이라고 생각해보자. 아래쪽에 제품을 소비자 입장에서 this.appService.getHello 같은 형식으로 사용하고 있다. 제품에 대한 공급자를 app.module.ts의 provider에 입력을 한다.
  constructor(private readonly appService: AppService) {}

  // * localhost:5000/cats/hello
  @Get('hello:/id/:name')
  getHello(
    @Req() req: Request,
    @Body() Body,
    @Param() param: { id: string; name: string }, // 이런식으로 하나하나 타이핑하는 것보다 dto라는 것을 사용해서 dto안에서 body에 대한 validation을 평가를 할수 있다. body에 필수적으로 request가 와야할것들을 확인하고 악의적인 요청들을 dto에서 거를수가 있다.
  ): string {
    console.log(req);
    console.log(param);
    return this.appService.getHello(Body, param);
    // req자체를 service에 넘겨서 req.param 또는 req.body로 받아도 되지만 좀더 확실하게 하고 좀더 책임을 완전히 분리하기 위해서 직접 Body 또는 param을 넘겨서 사용하는것을 권장한다.
  }
}
