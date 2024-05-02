class Equalizer{  
  private id : string
  public frequencies : Array<number>

  constructor(id, ...frequencies){
    this.id = id;
    this.frequencies = new Array(15);
    this.frequencies.push(...frequencies);
  }
}