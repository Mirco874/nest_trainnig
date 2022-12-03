import { Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class OperationService{
  sumar(numero1:number,numero2:number):number{
    return Number(numero1)+Number(numero2);
  }

  restar(numero1:number,numero2:number):number{
    return Number(numero1)-Number(numero2);
  }

  multiplicar(numero1:number,numero2:number):number{
    return numero1*numero2;
  }

  dividir(numero1:number,numero2:number):number{
    if(Number(numero2)===0){
      return null;
    }
    else{
      return numero1/numero2;
    }
  }
}








