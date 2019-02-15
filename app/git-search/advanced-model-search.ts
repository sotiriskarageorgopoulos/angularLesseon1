export class AdvancedModelSearch{
 constructor(
    public q:string,
    public language? : string, //the ? means that variables are optional and can be omitted from constructor
    public user? : string,
    public size? : number,
    public stars? : number,
    public topic? :string
    ){}

}