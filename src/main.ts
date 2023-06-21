import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Test Open Api')
    .setDescription('The Open API description')
    .setVersion('1.0')
    .addTag('Customer')
    .addServer('http://')
    .addServer('https://')
    // .setSchemes('https', 'http')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3002);
}
bootstrap();
