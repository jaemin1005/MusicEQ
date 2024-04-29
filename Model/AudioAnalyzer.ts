export class AudioAnalyer{
  public audioContext : AudioContext;
  public audioBuffer;
  public samplerate : number;
  public peak;

  constructor()
  {
    if(!window.AudioContext)
    {
      const errMsg : string = "Not available AutioContext";
      throw new AudioAnalyerError(errMsg);
    }

    this.audioContext = new AudioContext();
    this.audioBuffer = null;
    this.samplerate = 0;
    this.peak = [];
  }

  public init(){
    this.audioContext = new AudioContext();
    this.audioBuffer = null;
    this.samplerate = 0;
    this.peak = [];
  }
}


class AudioAnalyerError extends Error
{

}
