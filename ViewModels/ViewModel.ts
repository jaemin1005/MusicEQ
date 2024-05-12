import { IViewModel } from "./IViewModel";

export class ViewModel implements IViewModel{
    titleName: string;
    
    constructor(titleName : string)
    {
      this.titleName = titleName;
    }
}