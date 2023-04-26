import { input } from "./components/Game/Game"
import engine from "./engine"
export default class chess extends engine{
    
   checkValid_queen(x1,y1, x2 , y2){
      var dx = [-1  , -1 , 1 , 1 , -1  , 1 , 0 , 0];
      var dy = [-1  , 1 , -1 , 1 , 0  ,  0, -1 , 1];
      let t = true;
      for(let i = 0 ; i < 4 ; i++){
         let px = x1 , py = y1;
         let t2 = true;
         for(let j = 1 ; j < 8 ; j++){
            this.px += dx[i];
            this.py += dy[i];
            if(px < 0 || px > 7 || py <0 || py > 7){
               break;
            }
            if(px == x2 && py == y2 && (this.container[px][py] == '' || this.container[x2][y2] != '♚' && this.container[x2][y2] != '♔' && this.colors[x1][y1] != this.color[x2][y2]) && t2 ){
               this.color[x2][y2] = this.color[x2][y2];
               this.color[x1][y1] = '';
               this.container[x2][y2] = this.container[x1][y1];
               this.container[x1][y1] = '';
               this.t = false;
            }
            if(this.container[px][py] != '' && px != x2 && py != y2){
               this.t2 = false;
            }
         }
      }

      if(t){
         alert("invalid move !!")
      }
      if(t!=1){
         if(this.turn) 
         {
            this.turn=false
         }
         else {
            this.turn=true
         }
      }
   }

   checkValid_bishop(x1 , y1 , x2 , y2){
      var dx = [-1  , -1 , 1 , 1];
      var dy = [-1  , 1 , -1 , 1];
      let t = true;
      for(let i = 0 ; i < 4 ; i++){
         let px = x1 , py = y1;
         let t2 = true;
         for(let j = 1 ; j < 8 ; j++){
            px += dx[i];
            py += dy[i];
            if(px < 0 || px > 7 || py <0 || py > 7){
               break;
            }
            if(px == x2 && py == y2 && (this.container[px][py] == '' || this.container[x2][y2] != '♚' && this.container[x2][y2] != '♔' && this.colors[x1][y1] != this.color[x2][y2]) && t2 ){
               this.color[x2][y2] = this.color[x2][y2];
               this.color[x1][y1] = '';
               this.container[x2][y2] = this.container[x1][y1];
               this.container[x1][y1] = '';
               t = false;
            }
            if(this.container[px][py] != '' && px != x2 && py != y2){
               t2 = false;
            }
         }
      }

      if(t){
         alert("invalid move !!")
      }
      if(t!=1){
         if(this.turn) 
         {
            this.turn=false
         }
         else {
            this.turn=true
         }
      }
   }

   checkValid_knight(x1, y1 , x2, y2 ){
      var dx = [2,2,-2,-2,1,1,-1,-1];
      var dy = [1,-1,-1,1,2,-2,2,-2];
      let t = true;
      for(let i = 0 ; i < 4 ; i++){
         let px = x1 , py = y1;
         px += dx[i];
         py += dy[i];
         if(px < 0 || px > 7 || py <0 || py > 7){
            break;
         }
         if(px == x2 && py == y2 && (this.container[px][py] == '' || this.container[x2][y2] != '♚' && this.container[x2][y2] != '♔' && this.colors[x1][y1] != this.color[x2][y2]) ){
            this.color[x2][y2] = this.color[x2][y2];
            this.color[x1][y1] = '';
            this.container[x2][y2] = this.container[x1][y1];
            this.container[x1][y1] = '';
            t = false;
         }
      }

      if(t){
         alert("invalid move !!")
      }
      if(t!=1){
         if(this.turn) 
         {
            this.turn=false
         }
         else {
            this.turn=true
         }
      }
   }

   checkValid_rock(x1 , y1 , x2, y2 ){
      var dx = [-1  , 1 , 0 , 0];
      var dy = [0  ,  0, -1 , 1];
      let t = true;
      for(let i = 0 ; i < 4 ; i++){
         let px = x1 , py = y1;
         let t2 = true;
         for(let j = 1 ; j < 8 ; j++){
            px += dx[i];
            py += dy[i];
            if(px < 0 || px > 7 || py <0 || py > 7){
               break;
            }
            if(px == x2 && py == y2 && (this.container[px][py] == '' || this.container[x2][y2] != '♚' && this.container[x2][y2] != '♔' && this.colors[x1][y1] != this.color[x2][y2]) && t2 ){
               this.color[x2][y2] = this.color[x2][y2];
               this.color[x1][y1] = '';
               this.container[x2][y2] = this.container[x1][y1];
               this.container[x1][y1] = '';
               t = false;
            }
            if(this.container[px][py] != '' && px != x2 && py != y2){
               t2 = false;
            }
         }
      }

      if(t){
         alert("invalid move !!")
      }
      if(t!=1){
         if(this.turn) 
         {
            this.turn=false
         }
         else {
            this.turn=true
         }
      }

   }

   checkValid_king(x1 , y1 , x2, y2){
      var dx = [1,1,1,0,0,-1,-1,-1];
      var dy = [1,-1,0,-1,1,0,1,-1];
      let t = true;
      for(let i = 0 ; i < 4 ; i++){
         let px = x1 , py = y1;
         px += dx[i];
         py += dy[i];
         if(px < 0 || px > 7 || py <0 || py > 7){
            break;
         }
         if(px == x2 && py == y2 && (this.container[px][py] == '' || this.container[x2][y2] != '♚' && this.container[x2][y2] != '♔' && this.color[x1][y1] != this.color[x2][y2]) ){
            this.color[x2][y2] = this.color[x2][y2];
            this.color[x1][y1] = '';
            this.container[x2][this.y2] = this.container[x1][y1];
            this.container[x1][y1] = '';
            t = false;
         }
      }

      if(t){
         alert("invalid move !!")
      }
      if(t!=1){
         if(this.turn) 
         {
            this.turn=false
         }
         else {
            this.turn=true
         }
      }
   }


   checkValid_pawn(x1 , y1, x2 , y2 ){
      var t = 1;
      if(this.color[x1][y1] == 'b' && x1 == 1){
         if(y1 == y2 && (x1 + 1 == x2 || x1+2 == x2)){
            if(this.container[x2][y2] == ''){
               t = 0;
            }   
         }
      }else if(this.color[x1][y1] == 'b'){
         if(x1+1 == x2 && y1+1 == y2 && this.color[x2][y2] == 'w' && this.container[x2][y2] != '♕'){
            if(x2 == 7){
               t =2;
            }else{
               t = 0;
            }
            
         }else if(x1+1 == x2 && y1-1 == y2 && this.color[x2][y2] == 'w' && this.container[x2][y2] != '♕'){
            if(x2 == 7){
               t =2;
            }else{
               t = 0;
            }
         }else if(x1+1 == x2 && y1 == y2 ){
            if(this.container[x2][y2] == ''){
               if(x2 == 7){
                  t =2;
               }else{
                  t = 0;
               }
            }   
         } 
      }else if(this.color[x1][y1] == 'w' && x1 == 6){
         console.log("zz")
         if(y1 == y2 && (x1 - 1 == x2 || x1-2 == x2)){
            if(this.container[x2][y2] == ''){
               t = 0;
            }   
         }
      }else if(this.color[x1][y1] == 'w'){
         if(x1-1 == x2 && y1+1 == y2 && this.color[x2][y2] == 'b'&& this.container[x2][y2] != '♛'){
            if(x2 == 0){
               t =2;
            }else{
               t = 0;
            }
            
         }else if(x1-1 == x2 && y1-1 == y2 && this.color[x2][y2] == 'b'&& this.container[x2][y2] != '♛'){
            if(x2 == 0){
               t =2;
            }else{
               t = 0;
            }
         }else if(x1-1 == x2 && y1 == y2 ){
            if(this.container[x2][y2] == ''){
               if(x2 == 0){
                  t =2;
               }else{
                  t = 0;
               }
            }   
         } 
      }


      if(t == 1){
         alert("invalid move !!")
      }else if(t == 0){
         this.color[x2][y2] = this.color[x1][y1];
         this.color[x1][y1] = ''
         this.container[x2][y2] = this.container[x1][y1];
         this.container[x1][y1] = ''
      }else{
         if(this.color[x1][y1] ='w'){
            this.color[x2][y2] = this.color[x1][y1];
            this.color[x1][y1] = ''
            this.container[x2][y2] = '♕';
            this.container[x1][y1] = ''
         }else{
            this.color[x2][y2] = this.color[x1][y1];
            this.color[x1][y1] = ''
            this.container[x2][y2] = '♛';
            this.container[x1][y1] = ''
         }
      }
      if(t!=1){
         if(this.turn) 
         {
            this.turn=false
         }
         else {
            this.turn=true
         }
      }
   }

 constructor(){
    super() 
    {

    }
    this.container=[['♜','♞','♝','♛','♚','♝','♞','♜'],['♟','♟','♟','♟','♟','♟','♟','♟'],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['♙','♙','♙','♙','♙','♙','♙','♙'],['♖','♘','♗','♕','♔','♗','♘','♖']]
    this.color = [['b','b','b','b','b','b','b','b'] , ['b','b','b','b','b','b','b','b' ]  , ['','','','','','','',''],['','','','','','','',''], ['','','','','','','',''],['','','','','','','',''], ['w','w','w','w','w','w','w','w' ], ['w','w','w','w','w','w','w','w' ]]
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
     if(this.container[x][y] == ''){
      alert("invalid move !!");}
      else if(this.turn==true&&this.color[x][y]!='b')
      alert("invalid move !!");
      else if(this.turn==false&&this.color[x][y]!='w')
      alert("invalid move !!");
     else if(this.container[x][y] == '♝' || this.container[x][y]== '♗'){
         this.checkValid_bishop(x , y , xx , yy);
     }
     else if(this.container[x][y] == '♞' || this.container[x][y]== '♘'){
         this.checkValid_knight(x , y , xx , yy);
      }else if(this.container[x][y] == '♚' || this.container[x][y]== '♔'){
       this.checkValid_king(x , y , xx , yy);
      }else if(this.container[x][y] == '♜' || this.container[x][y]== '♖'){
         this.checkValid_rock(x , y , xx , yy);
      }else if(this.container[x][y] == '♟' || this.container[x][y]== '♙'){
         this.checkValid_pawn(x , y , xx , yy);
      }else{
         this.checkValid_queen(x, y , xx , yy);
      }


  } 

}
