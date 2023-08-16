import { createParamDecorator, ExecutionContext, InternalServerErrorException } from "@nestjs/common";
import { User } from "../entities/user.entity";

export const GetUser = createParamDecorator( (data, context: ExecutionContext)=>{
    const request = context.switchToHttp().getRequest();
    // console.log(request);
    const user: User = request.user;
    if(!user){
        throw new InternalServerErrorException('Error al obtener usuario');
    }

    return user;
});