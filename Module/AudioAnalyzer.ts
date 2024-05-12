export class AudioAnalyzer{
  public audioContext : AudioContext;
  //public audioBuffer : AudioBuffer;
  public samplerate : number;
  public peak : number[];

  constructor()
  {
    if(!globalThis.AudioContext)
    {
      const errMsg : string = "Not available AutioContext";
      throw new AudioAnalyerError(errMsg);
    }

    this.audioContext = new AudioContext();
    //this.audioBuffer = new AudioBuffer()
    this.samplerate = 0;
    this.peak = [];
  }

  public init(){
    this.audioContext = new AudioContext();
    //this.audioBuffer = 0
    this.samplerate = 0;
    this.peak = [];
  }
}

class AudioAnalyerError extends Error{}

