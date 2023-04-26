import { input } from "./components/Game/Game"
import engine from "./engine"
export default class chess extends engine{
 
 constructor(){
    super() 
    {

    }
    this.container=[['♜','♞','♝','♛','♚','♝','♞','♜'],['♟','♟','♟','♟','♟','♟','♟','♟'],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['♟','♟','♟','♟','♟','♟','♟','♟'],['♜','♞','♝','♛','♚','♝','♞','♜']]
    this.colors=[['#eee','#aaa',"#eee","#aaa","#eee","#aaa","#eee","#aaa"],["#aaa","#eee","#aaa","#eee","#aaa","#eee","#aaa",'#eee'],["#eee","#aaa","#eee","#aaa","#eee","#aaa","#eee","#aaa"],["#aaa","#eee","#aaa","#eee","#aaa","#eee","#aaa","#eee"],["#eee","#aaa","#eee","#aaa","#eee","#aaa","#eee","#aaa"],["#aaa","#eee","#aaa","#eee","#aaa","#eee","#aaa","#eee"],["#eee","#aaa","#eee","#aaa","#eee","#aaa","#eee","#aaa"],["#aaa","#eee","#aaa","#eee","#aaa","#eee","#aaa","#eee"]]
    this.size=8
    this.Iscircle=false
    this.turn=true
    this.inp=input()
    this.drawer()

 }
 
 controler(){
     this.inp=input()
     console.log(this.container)
     let x=this.inp[0]-1;
     let y=this.inp[1]-1;
     let xx=this.inp[2]-1;
     let yy=this.inp[3]-1
     
  } 

}
