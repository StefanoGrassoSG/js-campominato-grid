const startButton = document.getElementById('start')
const container = document.querySelector('.container-game')

startButton.addEventListener('click', function(){
    
    if(document.getElementById('diff').value == 'easy') {
            easy();
        }
    
    
    else if (document.getElementById('diff').value == 'normal') {
        normal();
    }
   
    else if (document.getElementById('diff').value == 'hard') {
        hard();
    }
    

})

//FUNCTIONS

function easy() {
    for(i = 1; i <= 49; i++) {
        const newDiv = document.createElement('div');
        container.append(newDiv);
        newDiv.append(i)
        newDiv.classList.add('square', 'square-7')
        newDiv.addEventListener('click', function(){
            this.classList.toggle('active');
            console.log(this.innerHTML);
        })
    }
}

function normal() {
    for(i = 1; i <= 81; i++) {
        const newDiv = document.createElement('div');
        container.append(newDiv);
        newDiv.append(i)
        newDiv.classList.add('square', 'square-9')
        newDiv.addEventListener('click', function(){
            this.classList.toggle('active');
            console.log(this.innerHTML);
        })
    }
}

function hard() {
    for(i = 1; i <= 100; i++) {
        const newDiv = document.createElement('div');
        container.append(newDiv);
        newDiv.append(i)
        newDiv.classList.add('square', 'square-10')
        newDiv.addEventListener('click', function(){
            this.classList.toggle('active');
            console.log(this.innerHTML);
        })
    }
}