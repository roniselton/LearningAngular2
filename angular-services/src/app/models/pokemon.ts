export type Pokemon = {
  sprites: {
    front_default:string;
  };
  types:{
    slot:number,
    type:{name:string , url:string}
  }[];
  name:string;
  id :number;
}
