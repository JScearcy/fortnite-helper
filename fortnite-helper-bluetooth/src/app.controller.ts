import { Get, Controller, Body, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { serial } from './serial-connection';

const address = '98d332113529';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Post('/update')
  update(@Body() body, @Res() res): void {
    serial.write(Buffer.from(body.state, 'utf-8'), (err) => {
      if (err) console.log(err);
      res.send('Ok');
    });
  }
}
