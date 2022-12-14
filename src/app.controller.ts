import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// http://localhost:3000
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): string[] {
    return this.appService.getUser();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
