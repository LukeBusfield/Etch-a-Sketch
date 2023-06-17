const container = document.querySelector('#container');

const bodyHeight = window.innerHeight;
const containerHeight = bodyHeight * 0.8;
container.style.height = containerHeight + 'px';

container.style.width = containerHeight + 'px';

const leftMargin = window.innerWidth * 0.5 - containerHeight * 0.5;
container.style.marginLeft =  leftMargin+ 'px';

createGrid(16, 16);

function createGrid(colsInput, rowsInput){
    container.innerHTML = '';
    const rows = new Array(colsInput);
    for(i = 0; i < rowsInput; i++){
        rows[i] = document.createElement('div');
        rows[i].style.display = "flex";
        const heightPercentage = 100/rowsInput;
        rows[i].style.height = heightPercentage + "%";

        let column = new Array(colsInput);

        for(j = 0; j < colsInput; j++){
            let div = document.createElement('div');
            div.style.backgroundColor = "black";
            div.style.height = "100%";
            const widthPercentage = 100/colsInput;
            div.style.width = widthPercentage + "%";
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = "red";
            });
            column[j] = div;
            rows[i].appendChild(div);
        }

        container.appendChild(rows[i]);
    }
}

const btn = document.querySelector("button");
btn.addEventListener('click', () => {
    /*
    for(i = 0; i < 16; i++){
        for(j = 0; j < 16; j++){
            columns[i].childNodes[j].style.backgroundColor = "black";   
        }
    }
    */
   const colsInput = prompt("How many columns do you want?");
   const rowsInput = prompt("How many rows do you want?");   
   if(isNaN(colsInput) || isNaN(rowsInput)){
    alert("invalid input");
   }else if(colsInput > 100 || rowsInput > 100){
    alert("Only 100 rows and columns allowed.")
   }else{
    createGrid(colsInput, rowsInput);
   }
});