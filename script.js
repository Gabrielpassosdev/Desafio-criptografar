function toggleAtivo(recebe__texto) {
  // Adiciona a classe 'ativo' se não estiver presente, ou a remove se já estiver presente
  recebe__texto.classList.toggle("ativo");
}

// Adiciona um ouvinte de evento de clique ao documento
document.addEventListener("click", function (e) {
  recebe__texto = document.querySelector(".recebe__texto");
  // Verifica se o clique foi fora de 'recebe__texto'
  if (
    !recebe__texto.contains(e.target) &&
    recebe__texto.classList.contains("ativo")
  ) {
    // Desativa a classe 'ativo'
    recebe__texto.classList.remove("ativo");
  }
});
// função para fazer a troca das vogais pelos termos da criptografia
function trocaVogal(texto) {
  // mapeando os pares das trocas
  var mapeamento = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  //.replace pra fazer a alteração das vogais
  texto = texto.replace(/[aeiou]/gi, function (vogal) {
    return mapeamento[vogal.toLowerCase()] || vogal;
  });
  return texto;
}

//função para desfazer a alteração das vogais
function voltaVogal(texto) {
  var mapeamentoInverso = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  texto = texto.replace(/(ai|enter|imes|ober|ufat)/gi, function (match) {
    return mapeamentoInverso[match] || match;
  });
  return texto;
}
//função responsavel por descriptografar
function descriptografarTexto() {
  //recebe o texto criptografado
  var textoCriptografado = document.getElementById("textoOriginal").value;
  //recebe o texto descriptografado
  var textoOriginal = voltaVogal(textoCriptografado);

  // Exibir o texto descriptografado no input
  document.getElementById("exibe__texto").value = textoOriginal;

  apagarMensagem();
  revelaCopiar();
}

//função para realizar a criptografia
function criptografarTexto() {
  //recebe o que foi escrito pelo usuário
  var textoOriginal = document.getElementById("textoOriginal").value;

  //verifica se há letras maiúsculas ou caracteres
  if (/[^a-z\s]/.test(textoOriginal)) {
    alert("Por favor, use Apenas Letras minúsculas e sem acentos.");

    return; // sai da função se não cumprir a condição
  }

  //criptografa a escrita do usuário
  var textoCriptografado = trocaVogal(textoOriginal);

  //retorna o texto criptografado pro input
  document.getElementById("exibe__texto").value = textoCriptografado.toString();

  apagarMensagem();
  revelaCopiar();
}

//função para apagar as mensagens não encontradas
function apagarMensagem() {
  document.getElementById("mensagem__inicio").style.display = "none";
}
//função para mostrar o botão de copiar
function revelaCopiar() {
  document.getElementById("copiar").style.display = "block";
}

//função com api para copiar o texto para área de transferencia
function copiarTexto() {
  var textCopiar = document.getElementById("exibe__texto").value;

  navigator.clipboard
    .writeText(textCopiar)
    .then(function () {
      // Sucesso! Exibe uma mensagem de confirmação
      alert("Texto copiado para a área de transferência.");
    })
    .catch(function (err) {
      // Trata qualquer erro que possa ocorrer
      console.error("Erro ao copiar o texto: ", err);
    });

  limpaCampo();
}

function limpaCampo() {
  var textoLimpo = " ";

  document.getElementById("exibe__texto").value = textoLimpo;
}
//Desafio completo de criptografia realizado para alura em parceria com a oracle next education #challengeonedecodificador5
