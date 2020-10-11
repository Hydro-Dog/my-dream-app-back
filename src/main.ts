/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configService } from './config/config.service';

async function bootstrap() {
    const app = await NestFactory.create(
        AppModule,
        new FastifyAdapter(),
    );

    const options = new DocumentBuilder()
        .setTitle('My Awesome API')
        .setDescription('My Awesome API Desctiption')
        .setVersion('1.0.0')
        .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('docs', app, document);

    // if (!configService.isProduction()) {
    //     const document = SwaggerModule.createDocument(app, new DocumentBuilder()
    //         .setTitle('My API')
    //         .setDescription('My API Description')
    //         .build());

    //     SwaggerModule.setup('docs', app, document);
    // }

    await app.listen(3000);
}
bootstrap();
