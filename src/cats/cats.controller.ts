import { PositiveIntPipe } from './../common/pipes/positiveInt.pipe';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  HttpException,
  UseFilters,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // cats/
  @Get()
  getAllCat() {
    throw new HttpException('api is broken', 401);
    return 'all cat';
  }

  // cats/:id
  @Get(':id')
  // id에 -2.2를 입력해도 ParseIntPipe에서 먼저 -2로 변환하고 PositiveIntPipe로 간다.
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    // 이렇게 인자로 명확하게 id라는 키값을 알려주게 되면 value값이 바로 나오게된다.
    // pipe를 통해서 id가 들어왔을때 number로 타입변환을 해줄수 있다.
    // 만약 abc로 전달이 된 경우 validation error도 실행시켜준다.
    console.log('hello controller');
    return { cats: 'one cat' };
  }

  @Post()
  createCat() {
    return 'create Cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
