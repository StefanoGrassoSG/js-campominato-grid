
const myCont = document.querySelector('.container')
const  diffList = document.getElementById('diff').value;
const strButton = document.getElementById('start');

strButton.addEventListener('click', function(){

    if (document.getElementById('diff').value == "easy") {
        for (i = 1; i <= 49; i++) {
            const newCell = document.createElement('div');
            newCell.classList.add('square', 'square-10');
            myCont.append(newCell);
            newCell.innerHTML = i;
            newCell.addEventListener('click', function(){
                this.classList.toggle('active')
                console.log(this.innerHTML)
            })
        }
    }


    if (document.getElementById('diff').value == "easy") {
        for (i = 1; i <= 100; i++) {
            const newCell = document.createElement('div');
            newCell.classList.add('square', 'square-10');
            myCont.append(newCell);
            newCell.innerHTML = i;
            newCell.addEventListener('click', function(){
                this.classList.toggle('active')
                console.log(this.innerHTML)
            })
        }
    }

    else if (document.getElementById('diff').value == "normal") {
        for (i = 1; i <= 81; i++) {
            const newCell = document.createElement('div');
            newCell.classList.add('square', 'square-9');
            myCont.append(newCell);
            newCell.innerHTML = i;
            newCell.addEventListener('click', function(){
                this.classList.toggle('active')
                console.log(this.innerHTML)
            })
        }
    }
})





/************
   FUNCTIONS
*************/

