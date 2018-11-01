import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs/internal/Observable';
import { FortniteData } from 'models/fortnite.model';

@Injectable()
export class AppService {
  apiKey = process.env.APIKEY;

  constructor(private readonly httpService: HttpService) { }

  getUserData(platform: string, epicUsername: string): Observable<AxiosResponse<FortniteData>> {
    const options = {
      headers: { 'TRN-Api-Key': this.apiKey },
    };
    return this.httpService.get(`https://api.fortnitetracker.com/v1/profile/${platform}/${epicUsername}`, options);
  }

  setBluetooth(state: string) {
    return this.httpService.post('http://localhost:3001/update', { state });
  }
}
