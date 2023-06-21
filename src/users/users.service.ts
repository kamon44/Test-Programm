import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/database/accesscontrol.interfac';
import { CreateUser } from 'src/dto/create';
import { UserLogin } from './usersSchema';


@Injectable()
export class UsersService {

  constructor(
  @InjectModel(UserLogin.name) private readonly userModel:Model<any>,
  ){}
    

    // async create(createUsersDto: CreateUsersDto): Promise<Users> {
    //     const createdVideo = new this.userModel(createUsersDto);
    //     return await createdVideo.save();
    //   }
    //   async findAll() {
    //     return await this.userModel.find({}).sort({score: 'desc'}).exec();
    //     }


async postUser(body: CreateUser): Promise<any> {

var dataSave = null ;
  if (body) {

    var data: User = {

      id: body.id,
      username:body.username,
      password:body.password
    }
    dataSave = await this.userModel.create(data);
  }

  throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  
}
async getUserAll(): Promise<UserLogin[]> {
  return this.userModel.find().exec();
  //return this.catModel.find({firstname:/tiph/}).exec();
}

    async findOne(username: string): Promise<any>{
        // return this.userModel.find(user => user.username === username)
    }
}
