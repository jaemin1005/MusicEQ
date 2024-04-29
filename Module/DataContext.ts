import { IView } from "View/IVew";
import { ViewModel } from "ViewModels/ViewModel";

export const DataContext = function<T extends IView ,K extends ViewModel>(view : T, [...viewModel] : K[]){

  view.datacontext = viewModel
;}