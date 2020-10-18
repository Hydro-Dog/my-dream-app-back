import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { configService } from './config/config.service';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        UserModule,
        CompanyModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
