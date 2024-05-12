import { AudioAnalyzer } from "../Module/AudioAnalyzer";
import { ViewModel } from "./ViewModel";

export class AudioViewModel extends ViewModel{
  
  private audioAnalyzer : AudioAnalyzer | null;
  
  constructor(titleName : string)
  {
    super(titleName);
    try{
      this.audioAnalyzer = new AudioAnalyzer();
    }catch(err){
      this.audioAnalyzer = null;
    }
  }

  public SetAudio(audioFile : ArrayBuffer){
    // this.audioAnalyzer.init();
    // const fileReader = new FileReader();
    // this.audioAnalyzer.audioContext.decodeAudioData(audioFile).then( buffer => {
    //   this.audioAnalyzer.audioBuffer = buffer;
    //   this.audioAnalyzer.samplerate = buffer.sampleRate;
    // });
  }
}