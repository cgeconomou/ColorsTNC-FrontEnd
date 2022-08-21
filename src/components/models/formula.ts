import { Product } from "./product";

export interface Formula{
  ColorFormulaID:number;
  FormulaName:string;
  CreationDate:Date | undefined;
  Duration:string;
  Cost:number;
  ServiceType:string;
  Products:Product[];
}

