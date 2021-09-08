import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer는 소비자이다. LoggerMiddleware는 의존성 주입이 가능한 provider이다.
    consumer.apply(LoggerMiddleware).forRoutes('*'); // cats 라우터에 바인딩을 해주는것이다. * 를 사용하면 전체 엔드포인트에대해 logger가 실행된다.
  }
}
