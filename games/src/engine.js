import { updatepra } from "./App"
import { input } from "./components/Game/Game"
export default class engine{
 container
 colors
 Iscircle
 size
 turn
 inp
 par
 drawer(){
    this.par=[]
    this.par.push(this.size);
    this.par.push(this.Iscircle);
    this.par.push(this.colors);
    this.par.push(this.container);
 }
 changeturn(t){
  return !t
 }
 controler(){
    
  } 

}
