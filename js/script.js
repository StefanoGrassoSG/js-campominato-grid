
const myCont = document.querySelector('.container')

for (i = 1; i <= 100; i++) {
    const newCell = document.createElement('div');
    newCell.classList.add('square');
    myCont.append(newCell);
    newCell.innerHTML = i;
    newCell.addEventListener('click', function(){
        this.classList.toggle('active')
        console.log(this.innerHTML)
    })
    

}



/************
   FUNCTIONS
*************/

