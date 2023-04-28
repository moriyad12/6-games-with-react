import { input } from "./components/Game/Game"
import engine from "./engine"
export default class tic extends engine{
 
 constructor(){
    super() 
    {

    }
    this.container=[['','',''],['','',''],['','','']]
    this.colors=[['white','#aaa','white'],['#aaa','white','#aaa'],['white','#aaa','white']]
    this.size=3
    this.Iscircle=false
    this.turn=true
    this.inp=input()
    this.drawer()

 }
 controler(){
    this.inp=input()
    console.log(this.container)
    let X=this.inp[0]-1;
    let y=this.inp[1]-1;
    if(!(X>-1&&X<3&&y>-1&&y<3))
    alert("Not possible ");
 else if(this.container[X][y]=='X'||this.container[X][y]=='O')
   alert("Not possible ");
  else{
    if(this.turn)
    {
        this.container[X][y]='X'
    }
    else {
        this.container[X][y]='O'
    }
    this.turn=this.changeturn(this.turn)
    this.drawer()
  } 

}
}