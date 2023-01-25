// Tarefa 1 - Crie uma função
// que escreva na tela as boas vindas ao novo colega;
function boasVindas(){
  let nome = "Thiago";
  console.log("Seja bem vindo " + nome + "!");
}
boasVindas();


//tarefa 2- Crie uma função que calcule a idade;

function calculoIdade(){
  const hoje = new Date();
  const anoNascimento = 1993;
  let idade = hoje.getFullYear() - anoNascimento;
  console.log("Sua idade é " + idade + ".");
}
calculoIdade();


// Tarefa 3 - Crie uma função que calcule o percentual de
// alunos que faltaram;

function faltantes(){
let alunosAtivos = 19;
let alunosPresentes = 11;
let alunosFaltantes = alunosAtivos - alunosPresentes;
let faltantesPorcento = (alunosFaltantes * 100) / alunosAtivos;
console.log("A porcentagem de alunos faltantes é de " + faltantesPorcento.toFixed(2) + "%");
}
faltantes();


// Tarefa 4 - crie uma função que receba as tres notas e devolva a
// média;

function media(){
  let notaTeorica = 9.0; //Insira a nota da prova teórica.
  let notaPratica1 = 4.8; //Insira a nota da primeira prova pratica.
  let notaPratica2 = 5.5; //Insira a nota da segunda prova pratica.
  let mediaFinal = ((notaTeorica * 2) + notaPratica1 + notaPratica2) / 4;
  console.log("Sua média é " + mediaFinal.toFixed(1));
}
media();


// Tarefa 5 - crie uma função que
// identifique pelo horário em que período do dia(Manhã(05:00 as 11:59), Tarde(12:00 as
// 17:59), ou Noite(18:00 as 04:59)) aconteceu o acesso, execute essa função 10 vezes com
// horários diferentes, e escreva na tela a quantidade de acessos de cada período;

function acessosPeriodo(time) {
  let horaAcessada = time.getHours();
  if (horaAcessada >= 5 && horaAcessada < 12) {
    return "Manhã";
  } else if (horaAcessada >= 12 && horaAcessada < 18) {
    return "Tarde";
  } else {
    return "Noite";
  }
}

let ContadorAcessos = {
  "Manhã": 0,
  "Tarde": 0,
  "Noite": 0,
};

for (let i = 0; i < 10; i++) {
  // gera um horario aleatório entre 0 e 23
  let HoraAleatoria = Math.floor(Math.random() * 24);
  // gera um minuto aleatório entre 0 e 59
  let minutoAleatorio = Math.floor(Math.random() * 60);
  // gera um segundo aleatório entre 0 e 59
  let segundoAleatorio = Math.floor(Math.random() * 60);
  // cria uma data com os valores gerados acima
  let gerarHora = new Date(2023, 0, 1, HoraAleatoria, minutoAleatorio, segundoAleatorio);
  let periodoAcessado = acessosPeriodo(gerarHora);
  ContadorAcessos[periodoAcessado]++;
}
console.log("Quantidade de acessos por periodo:")
console.log(ContadorAcessos);