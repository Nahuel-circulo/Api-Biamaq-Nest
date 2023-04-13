import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //habilitar cors
  app.enableCors();

  //prefijo /api en la ruta
  app.setGlobalPrefix('api');

  
  await app.listen(3001);
}
bootstrap();
