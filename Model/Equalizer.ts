class Equalizer{  
  //* 해당 곡 id
  private id : string

  //* 각 주파수대역 총 15개 :) 
  public frequencies : Array<Frequency>

  constructor(id : string, ...frequencies : Array<Frequency>){
    this.id = id;
    this.frequencies = new Array(15);
    this.frequencies.push(...frequencies);
  }
}