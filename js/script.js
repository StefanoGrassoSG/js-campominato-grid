
const myCont = document.querySelector('.container')
const strButton = document.getElementById('start');

strButton.addEventListener('click', function(){

    if (document.getElementById('diff').value == "easy") {
        create();
    }

    else if (document.getElementById('diff').value == "normal") {
        createNormal();
    }


    else if (document.getElementById('diff').value == "hard") {
        createHard();
    }

    
})

/************
   FUNCTIONS
*************/

function create() {
    for (i = 1; i <= 49; i++) {
        const newCell = document.createElement('div');
        newCell.classList.add('square', 'square-7');
        myCont.append(newCell);
        newCell.innerHTML = i;
        newCell.addEventListener('click', function(){
            this.classList.toggle('active')
            console.log(this.innerHTML)
        })
    }
}

function createNormal() {
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

function createHard() {
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