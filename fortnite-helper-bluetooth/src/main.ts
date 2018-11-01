import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.BLUETOOTHPORT || 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
