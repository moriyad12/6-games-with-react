import { input } from "./components/Game/Game"
import engine from "./engine"

export default class sudko extends engine{
    N
    K
    mat
    SRN
    SRND
 constructor(){
    super() 
    {

    }
    this.N=9
    this.K=51
    this.SRNd = Math.sqrt(this.N);
    this.SRN = Math.floor(this.SRNd);
    this.mat = Array.from({
        length:this.N
    }, () => Array.from({
        length: this.N
    }, () => ''));
    this.fillValues();
	console.log(this.mat)
    this.container=this.mat
    this.colors=[['#eee','#aaa',"#eee","#cba","#cce","#cba","#eee","#aaa","#eee"],["#aaa","#eee","#aaa","#cce","#cba","#cce","#aaa",'#eee',"#aaa"],["#eee","#aaa","#eee","#cba","#cce","#cba","#eee","#aaa","#eee"],["#cba","#cce","#cba","#eee","#aaa","#eee","#cba","#cce","#cba"],["#cce","#cba","#cce","#aaa","#eee","#aaa","#cce","#cba","#cce"],["#cba","#cce","#cba","#eee","#aaa","#eee","#cba","#cce","#cba"],['#eee','#aaa',"#eee","#cba","#cce","#cba","#eee","#aaa","#eee"],["#aaa","#eee","#aaa","#cce","#cba","#cce","#aaa",'#eee',"#aaa"],["#eee","#aaa","#eee","#cba","#cce","#cba","#eee","#aaa","#eee"]]
    this.size=9
    this.Iscircle=false
    this.turn=true
    this.inp=input()
    this.drawer()

 }


	// Sudoku Generator
	fillValues() {
		// Fill the diagonal of SRN x SRN matrices
		this.fillDiagonal();

		// Fill remaining blocks
		this.fillRemaining(0, this.SRN);

		// Remove Randomly K digits to make game
		this.removeKDigits();
	}

	// Fill the diagonal SRN number of SRN x SRN matrices
	fillDiagonal() {
		for (let i = 0; i < this.N; i += this.SRN) {
			// for diagonal box, start coordinates->i==j
			this.fillBox(i, i);
		}
	}

	// Returns false if given 3 x 3 block contains num.
	unUsedInBox(rowStart, colStart, num) {
		for (let i = 0; i < this.SRN; i++) {
			for (let j = 0; j < this.SRN; j++) {
				if (this.mat[rowStart + i][colStart + j] === num.toString()) {
					return false;
				}
			}
		}
		return true;
	}

	// Fill a 3 x 3 matrix.
	fillBox(row, col) {
		let num = 0;
		for (let i = 0; i < this.SRN; i++) {
			for (let j = 0; j < this.SRN; j++) {
				while (true) {
					num = this.randomGenerator(this.N);
					if (this.unUsedInBox(row, col, num)) {
						break;
					}
				}
				this.mat[row + i][col + j] = num.toString();
			}
		}
	}

	// Random generator
	randomGenerator(num) {
		return Math.floor(Math.random() * num + 1);
	}

	// Check if safe to put in cell
	checkIfSafe(i, j, num) {
		return (
			this.unUsedInRow(i, num) &&
			this.unUsedInCol(j, num) &&
			this.unUsedInBox(i - (i % this.SRN), j - (j % this.SRN), num)
		);
	}

	// check in the row for existence
	unUsedInRow(i, num) {
		for (let j = 0; j < this.N; j++) {
			if (this.mat[i][j] === num.toString()) {
				return false;
			}
		}
		return true;
	}

	// check in the row for existence
	unUsedInCol(j, num) {
		for (let i = 0; i < this.N; i++) {
			if (this.mat[i][j] === num.toString()) {
				return false;
			}
		}
		return true;
	}

	// A recursive function to fill remaining
	// matrix
	fillRemaining(i, j) {
		// Check if we have reached the end of the matrix
		if (i === this.N - 1 && j === this.N) {
			return true;
		}

		// Move to the next row if we have reached the end of the current row
		if (j === this.N) {
			i += 1;
			j = 0;
		}


		// Skip cells that are already filled
		if (this.mat[i][j] !== '') {
			return this.fillRemaining(i, j + 1);
		}

		// Try filling the current cell with a valid value
		for (let num = 1; num <= this.N; num++) {
			if (this.checkIfSafe(i, j, num)) {
				this.mat[i][j] = num.toString();
				if (this.fillRemaining(i, j + 1)) {
					return true;
				}
				this.mat[i][j] = '';
			}
		}

		// No valid value was found, so backtrack
		return false;
	}

	// Remove the K no. of digits to
	// complete game
	removeKDigits() {
		let count = this.K;

		while (count !== 0) {
			// extract coordinates i and j
			let i = Math.floor(Math.random() * this.N);
			let j = Math.floor(Math.random() * this.N);
			if (this.mat[i][j] !== '') {
				count--;
				this.mat[i][j] = '';
			}
		}

		return;
	}
 ckeck(x,y,z)
 {
    for(let i=0;i<9;i++)
      if(this.container[i][y]==z.toString())
         return false
    for(let i=0;i<9;i++)
      if(this.container[x][i]==z.toString())
         return false
    let yy=y-y%3     
    if(x%3==0)
    {
     for(let i=0;i<3;i++)
        if(this.container[x+1][yy+i]==z.toString())
           return false;
    for(let i=0;i<3;i++)
        if(this.container[x+2][yy+i]==z.toString())
           return false;
    }
    else if(x%3==1)
    {
        for(let i=0;i<3;i++)
        if(this.container[x-1][yy+i]==z.toString())
           return false;
    for(let i=0;i<3;i++)
        if(this.container[x+1][yy+i]==z.toString())
           return false;   
    }
    else {
        for(let i=0;i<3;i++)
        if(this.container[x-1][yy+i]==z.toString())
           return false;
    for(let i=0;i<3;i++)
        if(this.container[x-2][yy+i]==z.toString())
           return false;
    }
    return true;
       
 }
 controler(){
     this.inp=input()
     console.log(this.container)
     let X=this.inp[0]-1;
     let y=this.inp[1]-1;
     let z=this.inp[4];
     if(!(X>-1&&X<9&&y>-1&&y<9&&z>-1&&z<10))
     alert("Not possible ");
	 else if(z==0)
	    this.container[X][y]=''
   else if(this.container[X][y]!='')
    alert("Not possible ");
    else if(!this.ckeck(X,y,z))
    alert("Not possible ");
  else{
    this.container[X][y]=z.toString()
    this.drawer()
  } 

}
}