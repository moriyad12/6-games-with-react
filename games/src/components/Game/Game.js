import React, {useState, useEffect,Component} from 'react'
import './Game.css';
import tic from '../../tic';
import Connect from '../../connect';
import sudko from '../../sudko';
import checker from '../../checker';
import Queen from '../../Queen';
import chess from '../../chess';
let r1,r2,c1,c2,v
var clicknumber=0
export function input(){
     
    let inp =[]
    inp.push(r1)
    inp.push(c1)
    inp.push(r2)
    inp.push(c2)
    inp.push(v)
    console.log(inp)
    return inp
}
var myInstance 
export function create(txt){
  console.log(txt)
 if(txt=="Tic-Tac-Toe")
   myInstance=new tic();
  else if(txt=="Connect-4")
  myInstance=new Connect();
  else if(txt=="Sudoku")
  myInstance=new sudko();
  else if(txt=="Checkers")
  myInstance=new checker();
  else if(txt=="8-Queens")
  myInstance=new Queen();
  else
  myInstance=new chess();

}
 const Game = () => {
  var [val, setval] = useState(0);
  var [dimension, setDimension] = useState(0);
  const [board, setBoard] = useState([]);
  const handleClick = () => {
    v=val
    myInstance.controler()
  };
  const takeInput = (i,j) => {
    if(clicknumber==0)
    {
      r1=i+1
      c1=j+1
      clicknumber=1
    }
    else{
      r2=i+1
      c2=j+1
      clicknumber=0
      handleClick()
    }
  };
  
  var size
  var container
  var colors
  var Iscircle
  var color = {
    width:"65px",
    height:"65px",
    backgroundColor:'Red',
    textAlign:"center",
    fontSize:"40px",
    color:'black',
    borderRadius: "0%"
  }
  var space = {
    width:"65px",
    height:"65px",
    backgroundColor:' rgb(38, 66, 73)',
    textAlign:"center",
    fontSize:"40px",
    borderRadius: "0%"
  }
  const b= {
    backgroundcolor: 'black',
    color: 'red',
    padding: '10px 20px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '16px'
  }
  const boardBox = {
    width:65*dimension,
    display:'flex',
    flexWrap:'wrap',
    marginTop:"20px",
    boxShadow:`0px 10px 10px rgba(0,0,0,0.1)`
  }

  const makeBoard = ()=>{
    let arr = [];
    let c='a';
    let asci=c.charCodeAt(0)
    if(Iscircle)
       color.borderRadius="50%"
    setDimension(size+1);
    let tempp = [];
    tempp.push(<div style={space}></div>);
    for (let j=0;j<size;j++){
      tempp.push(<div style={space}>{String.fromCharCode(asci+j)}</div>);
  }
  arr.push(tempp);
    for (let i=0;i<size;i++){
      let temp = [];
      temp.push(<div style={space}>{i+1}</div>);
      for (let j=0;j<size;j++){
          let c=JSON.parse(JSON.stringify(color));
          c.backgroundColor=String(colors[i][j]);
          temp.push(<button  style={c} onClick={() => takeInput(i,j)}>{container[i][j]}</button>);
      }
      arr.push(temp);
    }

    setBoard(arr);
  }

  useEffect(()=>{
     size=myInstance.par[0];
   container=myInstance.par[3];
   colors=myInstance.par[2];
   Iscircle=myInstance.par[1];
    makeBoard();
  })

  return (
    <div className='board'>
      <div className="in">
      <input type="number" placeholder='value' onChange={(e)=>setval(e.target.value)} />
      </div>
      <section style={boardBox}>
        {board}
      </section>

    </div>
  )
}
export default Game