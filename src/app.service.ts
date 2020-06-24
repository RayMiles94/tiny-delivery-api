import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  public getNice(): any {
    return {
      message : "hello nice "
    }
  }

}
