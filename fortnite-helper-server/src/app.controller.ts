import { Get, Controller, Render, Res, Param } from '@nestjs/common';
import { AppService } from 'app.service';
import { AxiosResponse } from 'axios';
import { FortniteData } from 'models/fortnite.model';
import { historicalData } from './memory-cache';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':platform/:username')
  root(@Param() params, @Res() res) {
    return this.appService.getUserData(params.platform, params.username).subscribe((userDataResponse: AxiosResponse<FortniteData>) => {
      const fortniteData = userDataResponse.data;
      historicalData.push(fortniteData.recentMatches[fortniteData.recentMatches.length - 2].trnRating);
      if (historicalData[historicalData.length - 1] !== fortniteData.recentMatches[fortniteData.recentMatches.length - 1].trnRating ) {
        historicalData.push(fortniteData.recentMatches[fortniteData.recentMatches.length - 1].trnRating);
        if (historicalData[historicalData.length - 2] > historicalData[historicalData.length - 1]) {
          this.appService.setBluetooth('0'); // .subscribe(_ => {}, () => {});
        } else if (historicalData[historicalData.length - 2] < historicalData[historicalData.length - 1]) {
          this.appService.setBluetooth('1'); // .subscribe(_ => {}, () => {});
        } else {
          this.appService.setBluetooth('3'); // .subscribe(_ => {}, () => {});
        }
      }
      console.log(historicalData);
      res.render('index', fortniteData);
    });
  }
}