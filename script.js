const inputCep = document.getElementById('cep');
const btn = document.getElementById('btn');
const results = document.getElementById('results')

btn.addEventListener('click', handleCLick);

function handleCLick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  // ao colocar o cep na busca aciona a função de buscar o cep e mostrar os resultados em tela
  busca(cep)
}

function busca(CEP) {
  fetch(`https://viacep.com.br/ws/${CEP}/json/`)
  .then(response => response.text())
  .then(body => { 
    results.innerText = body;
  })
}
