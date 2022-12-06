const btnCalcular = document.getElementById('btnCalcular');
const cards = document.getElementById('cards');

btnCalcular.addEventListener('click', ()=>{
  const nombre = document.getElementById('nombre');
  const valorHora = document.getElementById('valorHora');
  const cantidadHora = document.getElementById('cantidadHora');
  const card = document.createElement('section');
  const titulo = document.createElement('p');
  const salario = document.createElement('p');
  const foto = document.createElement('img');
  const nuneroRandom = Math.floor(Math.random()* (4-1+1)+1);
  titulo.textContent = nombre.value;
  salario.textContent = parseInt(valorHora.value)*parseInt(cantidadHora.value);
  foto.src = `./img/${nuneroRandom}.png`;
  card.append(foto, titulo, salario);
  cards.append(card);
});