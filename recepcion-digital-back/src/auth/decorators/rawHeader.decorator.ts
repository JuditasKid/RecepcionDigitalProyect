import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const RawHeaders = createParamDecorator( (data, context: ExecutionContext)=>{
    const request = context.switchToHttp().getRequest();
    const { rawHeaders} = request;
    console.log(rawHeaders);
    return rawHeaders;
});