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