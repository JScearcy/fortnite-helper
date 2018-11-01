import { HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs/internal/Observable';
import { FortniteData } from 'models/fortnite.model';
export declare class AppService {
    private readonly httpService;
    apiKey: string;
    constructor(httpService: HttpService);
    getUserData(epicUsername: string): Observable<AxiosResponse<FortniteData>>;
}
