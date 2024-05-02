class Music{

  private id;
  private name;
  private singer;
  private data;

  constructor(id, name, singer, data = null){
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