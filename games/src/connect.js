import { input } from "./components/Game/Game"
import engine from "./engine"
export default class Connect extends engine{
 constructor(){
   super()
   {
   }
    this.container=[['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],]
    this.colors=[['white','white','white','white','white','white','white','white'],['white','white','white','white','white','white','white','white'],['white','white','white','white','white','white','white','white'],['white','white','white','white','white','white','white','white'],['white','white','white','white','white','white','white','white'],['white','white','white','white','white','white','white','white'],['white','white','white','white','white','white','white','white'],['white','white','white','white','white','white','white','white']]
    this.size=8
    this.Iscircle=true
    this.turn=true
    this.inp=input()
    this.drawer()

 }
 controler(){
    this.inp=input()
    console.log(this.inp)
    let X=this.inp[0]-1;
    let y=this.inp[1]-1;
    if(!(X>-1&&X<8&&y>-1&&y<8))
    alert("Not possible ");
    else if(this.colors[X][y]=='blue'||this.colors[X][y]=='red')
   alert("Not possible ");
   else if(X!=7&&this.colors[X+1][y]!='blue'&&this.colors[X+1][y]!='red')
   alert("Not possible ");
  else{
    if(this.turn)
    {
        this.colors[X][y]='blue'
    }
    else {
        this.colors[X][y]='red'
    }
    this.turn=this.changeturn(this.turn)
    this.drawer()
  } 

}
}