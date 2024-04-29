import { AudioAnalyer } from "Model/AudioAnalyzer";
import { ViewModel } from "./ViewModel";
import { buffer } from "stream/consumers";

export class AudioViewModel extends ViewModel{
  
  private audioAnalyzer : AudioAnalyer;
  
  constructor(titleName)
  {
    super(titleName);
    this.audioAnalyzer = new AudioAnalyer();
  }

  public SetAudio(audioFile){
    this.audioAnalyzer.audioContext.decodeAudioData(audioFile).then( buffer => {
      this.audioAnalyzer.audioBuffer = buffer;
      this.audioAnalyzer.samplerate = buffer.sampleRate;
    });
  }

}