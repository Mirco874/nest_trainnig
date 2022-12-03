import { Controller, Get, Post,Query,HttpCode,BadRequestException } from '@nestjs/common';
import { AppService, OperationService } from './app.service';

@Controller("/api/v1/")
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly operationService:OperationService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("operacion/sumar")
  @HttpCode(201)
  obtenerSuma(@Query('numero1') numero1:number,@Query('numero2') numero2:number ): number{
    return this.operationService.sumar(numero1,numero2);
  }
  
  @Post("operacion/restar")
  @HttpCode(201)
  obtenerResta(@Query("numero1") numero1:number,@Query("numero2") numero2:number){
    return this.operationService.restar(numero1,numero2);
  }

  @Post("operacion/multiplicar")
  @HttpCode(201)
  obtenerMultiplicacion(@Query("numero1") numero1:number,@Query("numero2") numero2:number){
    return this.operationService.multiplicar(numero1,numero2);
  }

  @Post("operacion/dividir")
  obtenerDivision(@Query("numero1") numero1:number,@Query("numero2") numero2:number){
    const result=this.operationService.dividir(numero1,numero2);
    if(result===null){
      throw new BadRequestException("bad request",{cause:new Error(),description:"cannot be divided by 0"});
    }
    else{
      return result;
    }
  }

}
