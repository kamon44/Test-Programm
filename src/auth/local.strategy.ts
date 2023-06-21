import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService : AuthService) {
    super();
}
async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
    // async validate(username: string, pass: string): Promise<any>{
    //     const user = await this.authService.validateUser(username, pass);

    //     if(!user){
    //         throw new UnauthorizedException();
    //     }
    //     return user;
    // }
}