import { input } from "./components/Game/Game"
import engine from "./engine"
export default class Queen extends engine {


    check_do(x, y) {

        if (this.container[x][y] == '♛') {
            this.container[x][y] = '';
            return;
        }


        for (let i = -12; i < 12; i++) {
            let nx = x + i;
            let ny = y + i;
            if (nx < 0 || nx > 7 || ny < 0 || ny > 7) continue;
            if (this.container[nx][ny] == '♛') {
                alert("cant put -45");
                return false;
            }
        }
        for (let i = -12; i < 12; i++) {
            let nx = x - i;
            let ny = y + i;
            if (nx < 0 || nx > 7 || ny < 0 || ny > 7) continue;
            if (this.container[nx][ny] == '♛') {
                alert("cant put 45");
                return false;
            }
        }


        for (let i = x - 10; i < x + 10; i++) {
            if (i < 0 || i > 7) continue;
            if (this.container[i][y] == '♛') {
                alert("cant put col ");
                return false;
            }
        }
        for (let i = y - 10; i < y + 10; i++) {
            if (i < 0 || i > 7) continue;
            if (this.container[x][i] == '♛') {
                alert("cant put  row  ");
                return false;
            }
        }
        this.container[x][y] = '♛';

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
        this.check_do(x1,y1);
            this.drawer()
    }
}