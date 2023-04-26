import { input } from "./components/Game/Game"
import engine from "./engine"
export default class Queen extends engine{


    check_do(x,y,bol) {
        if (bol == 0) {
            if (x < 0 || x > 7 || y < 0 || y > 7) {
                alert("cant put");
                return false;
            }
            for (let i =- 9; i < 9; i++) {
                let nx=x+i;
                let ny=y+i;
                if (nx < 0 || nx > 7 || ny < 0 || ny > 7) continue;
                if (this.container[nx][ny] == '♛') {
                    alert("cant put 2");
                    return false;
                }
            }

            for (let i = x - 9; i < x + 9; i++) {
                if (i < 0 || i > 7) continue;
                if (this.container[i][y] == '♛') {
                    alert("cant put 3");
                    return false;
                }
            }
            for (let i = y - 9; i < y + 9; i++) {
                if (i < 0 || i > 7) continue;
                if (this.container[x][i] == '♛') {
                    alert("cant put 4   ");
                    return false;
                }
            }
            this.container[x][y] = '♛';
        } else {
            if (x < 0 || x > 7 || y < 0 || y > 7) {
                alert("cant erase");
                return false;
            }
            this.container[x][y] = '';
        }
    }

    constructor(){
        super()
        {

        }
        this.container=[['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','','']]
        this.colors=[['#aaa','white','#aaa','white','#aaa','white','#aaa','white'],['white','#aaa','white','#aaa','white','#aaa','white','#aaa'],['#aaa','white','#aaa','white','#aaa','white','#aaa','white'],['white','#aaa','white','#aaa','white','#aaa','white','#aaa'],['#aaa','white','#aaa','white','#aaa','white','#aaa','white'],['white','#aaa','white','#aaa','white','#aaa','white','#aaa'],['#aaa','white','#aaa','white','#aaa','white','#aaa','white'],['white','#aaa','white','#aaa','white','#aaa','white','#aaa']]
        this.size=8
        this.Iscircle=false
        this.turn=true
        this.inp=input()
        this.drawer()

    }
    controler(){
        this.inp=input()
        console.log(this.container)
        let x1=this.inp[0]-1;
        let y1=this.inp[1]-1;
        let bol=this.inp[4];
        console.log(bol);
        this.check_do(x1,y1,bol);
            this.drawer()
    }
}