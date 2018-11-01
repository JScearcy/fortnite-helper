import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as hbs from 'hbs';
import * as hbsutils from 'hbs-utils';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const hbs_utils = hbsutils(hbs);
  const app = await NestFactory.create(AppModule);

  hbs_utils.registerPartials(__dirname + '/views/partials');
  hbs_utils.registerWatchedPartials(__dirname + '/views/partials');
  hbs.registerHelper('json', (context) => {
    return JSON.stringify(context);
  });

  app.useStaticAssets(join(__dirname, 'public'));
  app.setBaseViewsDir(join(__dirname, 'views'));
  app.setViewEngine('hbs');

  await app.listen(PORT);
}
bootstrap();
