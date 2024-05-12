
import { View } from "./View";
import { ViewModel } from "../ViewModels/ViewModel";
import { AudioViewModel } from "../ViewModels/AudioViewModel";



class MainView<T extends ViewModel> extends View<T>{}
const mainView = new MainView(new AudioViewModel("audio"));
console.log("hi");