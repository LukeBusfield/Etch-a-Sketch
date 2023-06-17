/*
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const red = document.createElement('p');
red.textContent = 'I am red!';
red.style.color = "red";

const h3 = document.createElement("h3");
h3.textContent = "I’m a blue h3!";
h3.style.color = "blue";

const div = document.createElement("div");
div.style.borderColor = "black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I’m in a div";
div.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'ME TOO!';
div.appendChild(p);

container.appendChild(content);
container.appendChild(red);
container.appendChild(h3);
container.appendChild(div);

const container = document.querySelector('#container');

let columns = new Array(16);
columns.forEach(function(){
    columns[i] = new Array(16);
    columns[i].forEach(function(){
        let div = document.createElement("div");
        div.style.color = black;
    });
    container.append(columns[i]);
});
*/
const container = document.querySelector('#container');
const columns = new Array(16);

for(i = 0; i < 16; i++){
    columns[i] = document.createElement('div');
    columns[i].style.display = "flex";
    columns[i].style.height = "6.25%";
    columns[i].style.gap = "5px";
    columns[i].style.marginBottom = "5px";

    let row = new Array(16);

    for(j = 0; j < 16; j++){
        let div = document.createElement('div');
        div.style.backgroundColor = "black";
        div.style.height = "100%";
        div.style.gap = "5px";
        div.style.width = "6.25%";
        row[j] = div;
        columns[i].appendChild(div);
    }

    container.appendChild(columns[i]);
}

columns[5].childNodes[4].style.backgroundColor = "blue";