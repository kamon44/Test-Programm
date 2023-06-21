import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';


@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://admin:258000@cluster0.l4nxhqv.mongodb.net/?retryWrites=true&w=majority'), UsersModule , AuthModule],
  controllers: [AppController , UsersController],
  providers: [AppService ],
})
export class AppModule {}
