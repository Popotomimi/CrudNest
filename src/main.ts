import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove chaves que não estão no DTO
      forbidNonWhitelisted: true, // Retorna erro se tiver chaves não permitidas
      transform: false, // Transforma os dados para o tipo especificado no DTO
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
