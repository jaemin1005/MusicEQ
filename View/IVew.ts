import { IViewModel } from "ViewModels/IViewModel";

export interface IView{
  datacontext : IViewModel | IViewModel[];
}