import { IViewModel } from "../ViewModels/IViewModel";
import { IView } from "./IVew";

export abstract class View<T extends IViewModel> implements IView<T>{ 

  ContextMap: Map<string, T> = new Map<string, T>
  
  constructor(...arr : T[])
  {
    for(let context of arr){
      this.ContextMap.set(context.constructor.name , context);
    }
  }

  GetContext(name : string) : T | undefined{
    return this.ContextMap.get(name);
  }
}