import { Formula } from "./formula";

export interface Product{
  ID:number;
  Brand:string;
  ColorCode:string;
  UsedQuantity:number;
  ExpDate:Date;
  TubeQuantity:number;
  Formulas:Formula[];
}