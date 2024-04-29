import { ViewModel } from "ViewModels/ViewModel";
import { View } from "./View";
import { AudioViewModel } from "ViewModels/AudioViewModel"; 

class IndexView<T extends ViewModel> extends View<T>{
    
  private waveForm : HTMLElement
  private waveFormPathGroup
  private audioUploader : HTMLElement

  constructor([...T]){
    super(T);
    this.waveForm = document.getElementById("waveform")!;
    this.waveFormPathGroup = document.getElementById("wavefrom-path-group")!;
    this.audioUploader = document.getElementById("audio-uploader")!;
  }

  Observe()
  {
    MutationObserver
  }

  SetEvent()
  {
    if(this.datacontext as )
    this.audioUploader.onchange = 
  }
}