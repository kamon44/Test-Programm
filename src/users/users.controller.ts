import { Body, Controller,Post,Get } from '@nestjs/common';
import { UseContainerOptions } from 'class-validator';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from './users.service';
import { CreateUser } from 'src/dto/create';

@Controller('users')
export class UsersController {
    constructor(
        private readonly UsersService:UsersService,
        private readonly AuthService:AuthService
        ){}

        @Post('Createuser')
  async saveData(@Body() body: CreateUser): Promise<any> {
    return await this.UsersService.postUser(body);
  }

  @Get('Alluser')
  async getdata(): Promise<any[]> {
    return this.UsersService.getUserAll();
  }

}
