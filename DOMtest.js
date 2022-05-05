// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const p = document.createElement('p')
p.textContent = "Hey I'm red!"
p.style.color = 'red'
container.appendChild(p)

const h3 = document.createElement('h3')
h3.textContent = "Hey I'm a blue h3!"
h3.style.color = 'blue'
container.appendChild(h3)

const div2 = document.createElement('div')
div2.style.backgroundColor = 'pink'
div2.style.border = '5px solid black'

const h1 = document.createElement('h1')
h1.textContent = "I'm in a div"
div2.appendChild(h1)

const p2 = document.createElement('p')
p2.textContent = "ME TOO!"
div2.appendChild(p2)

container.appendChild(div2)

container.appendChild(content);

const btn = document.querySelector('#btn')
btn.onclick = () => alert("dhrtht")

const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', () => {
    alert("Hello Girls")
})
btn2.addEventListener('click', function (e) {
    e.target.style.background = 'blue'

})


