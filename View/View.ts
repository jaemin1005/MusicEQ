import { DataContext } from "Module/DataContext";
import { IView } from "View/IVew";
import { IViewModel } from "ViewModels/IViewModel";
import { ViewModel } from "ViewModels/ViewModel";

export class View<T extends ViewModel> implements IView{
  datacontext: IViewModel;
  
  constructor([...T])
  {
    for(const viewModel of T){
      DataContext(this, viewModel);
    }
  }
}