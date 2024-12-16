
const container = document.createElement('div');
container.classList.add('container');



const perfilimg = document.createElement('img');
perfilimg.src = 'afolo.jpg'; 
perfilimg.id = 'perfil';


const containertext = document.createElement('h1');
containertext.textContent = 'Olá parceiro';


const button = document.createElement('button')
button.button = 'Estudar'

container.appendChild(perfilimg);
container.appendChild(containertext);
container.appendChild(button)
document.body.appendChild(container);


//body
document.body.style.boxSizing = 'border-box'
document.body.style.margin = '0'
document.body.style.border = '0'
document.body.style.backgroundColor = 'rgb(37, 35, 35)'


//elementos

container.style.backgroundColor = '#cd3232'
container.style.width = '1535px'
container.style.height = '200px'
containertext.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-seri'
containertext.style.color = 'rgb(37, 35, 35)'
perfilimg.style.width = '45px'
perfilimg.style.height = '45px'
perfilimg.style.borderRadius = '60px'
document.body.style.backgroundColor = 'rgb(37, 35, 35)'
