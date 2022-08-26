import { Product } from "./product";

export interface Formula{
  ColorFormulaID:number;
  FormulaName:string;
  CreationDate:Date | undefined;
  Cost:number;
  Duration:string;
  ServiceType:string;
  FormulasPhotosid:number;
  Products:Product[];
}

