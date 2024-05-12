class Music{

  /**
   * * 접근권한자, 수정 못하게 private
   * * id : Database, PrimaryKey
   * * name : 곡명
   * * singer : 부른 사람이나, 팀
   * * data : 노래 데이터 
   */
  private id : number; 
  private name : string;
  private singer : string;
  private data : AudioBuffer;

  constructor(id : number, name : string, singer: string, data : AudioBuffer){
    this.id = id;
    this.name = name;
    this.singer = singer;
    this.data = data;
  }

  get Data()
  {
    return this.data;
  }

  get Name()
  {
    return this.name;
  }

  get Singer()
  {
    return this.singer;  
  }
}