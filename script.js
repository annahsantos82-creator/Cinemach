const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (evento) {
evento.preventDefault();

const nome = document.querySelector("#nome").value;
const genero = document.querySelector("#genero").value;

resultado.textContent = Obrigado, ${nome}! Voce prefere filmes de ${genero}.;formulario.reset ();
