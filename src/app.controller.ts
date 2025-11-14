import { Controller, Get, Headers, Redirect, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect("https://docs.nestjs.com", 301)
  getHello(@Req() req: Request) {
    console.log(req.headers)
  }
}
