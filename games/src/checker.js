import { input } from "./components/Game/Game"
import engine from "./engine"
export default class checker extends engine{
     array=[];
     can=true;
    check_valid1(x,y) {
        if (x < 0 || x > 7 || y < 0 || y > 7) return false;
        if (this.turn) {
            return (this.container[x][y] == '♟');
        } else {
            return (this.container[x][y] == '♝');
        }
    }
    get_valid(x,y) {
        let arr = [];
        let up = -1;
        if (!this.turn) up *= -1;
        const dx = [1, 1];
        const dy = [-1, 1];
        for (let i = 0; i < dx.length; i++) {
            let nx = x + up;
            let ny = y + dy[i];
            let fx = x + (up) * 2;
            let fy = y + dy[i] * 2;
            console.log(nx, ny, fx, fy);
            if (nx < 0 || nx > 7 || ny < 0 || ny > 7) continue;
            if (this.container[nx][ny] != '') {
                if (this.container[x][y] != this.container[nx][ny]) {
                    if (!(fx < 0 || fx > 7 || fy < 0 || fy > 7)) {
                        if (this.container[fx][fy] == '') {
                            arr.push({x: fx, y: fy});
                        }
                    }
                }
                continue
            }
            if(this.can)
            arr.push({x: nx, y: ny});
        }
        return arr;
    }
    check_valid2(xx,yy) {
        let sz=this.array.length;
        for (let i = 0; i < sz; i++) {
            if (xx == this.array[i].x && yy == this.array[i].y) return true;
        }
        return false;
    }
    do_it(x1,y1,x2,y2) {
        if (Math.abs(x1 - x2) == 1) this.turn=this.changeturn(this.turn)
        else {
            let md1 = (x2 - x1) / 2 + x1;
            let md2 = (y2 - y1) / 2 + y1;
            this.container[md1][md2] = '';
            this.can = false;
            let zzz=this.get_valid(x2, y2).length;
            console.log("one",x2,y2,zzz);
            if (zzz == 0) {
                console.log("two")
                this.turn=this.changeturn(this.turn)
                this.can = true;
            }
        }
        this.container[x2][y2] = this.container[x1][y1];
        this.container[x1][y1] = '';
    }




    constructor(){
        super()
        {

        }
        this.container=[['','♝','','♝','','♝','','♝'],['♝','','♝','','♝','','♝',''],['','♝','','♝','','♝','','♝'],['','','','','','','',''],['','','','','','','',''],['♟','','♟','','♟','','♟',''],['','♟','','♟','','♟','','♟'],['♟','','♟','','♟','','♟','']]
        this.colors=[['#aaa','white','#aaa','white','#aaa','white','#aaa','white'],['white','#aaa','white','#aaa','white','#aaa','white','#aaa'],['#aaa','white','#aaa','white','#aaa','white','#aaa','white'],['white','#aaa','white','#aaa','white','#aaa','white','#aaa'],['#aaa','white','#aaa','white','#aaa','white','#aaa','white'],['white','#aaa','white','#aaa','white','#aaa','white','#aaa'],['#aaa','white','#aaa','white','#aaa','white','#aaa','white'],['white','#aaa','white','#aaa','white','#aaa','white','#aaa']]
        this.size=8
        this.Iscircle=false
        this.turn=true
        this.inp=input()
        this.drawer()

    }
    controler() {
        this.inp = input()
        console.log(this.container)
        let x1 = this.inp[0] - 1;
        let y1 = this.inp[1] - 1;
        let x2 = this.inp[2] - 1;
        let y2 = this.inp[3] - 1;
        if (!this.check_valid1(x1, y1)) {
            alert("Not valid  First  ");
            return;
        }
        this.array= this.get_valid(x1, y1);
        console.log(this.array);
        if (!this.check_valid2(x2, y2)) {
            alert("Not valid  second  ");
            return;
        }
        this.do_it(x1, y1, x2, y2);
        this.drawer()
    }
}