const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
            {
            enunciado: "Você recebeu seu primeiro salário e está pensando em como utilizá-lo. O que você faz primeiro?",
            alternativas: [
                {
                    texto: "Vou gastar em algo que sempre quis.",
                    afirmacao: "Você priorizou uma compra imediata, sem considerar outras necessidades ou o futuro."
                },
                {
                    texto: "Vou reservar uma parte para economizar.",
                    afirmacao: "Você decidiu começar a poupar, pensando em sua segurança financeira a longo prazo."
                },
                {
                    texto: "Vou pagar todas as contas e ver o que sobra.",
                    afirmacao: "Você preferiu primeiro quitar suas obrigações antes de pensar em outras despesas."
                }
            ]
        },
        {
            enunciado: "Uma oferta tentadora aparece: um novo smartphone com um grande desconto, mas é necessário pagar à vista. O que você faz?",
            alternativas: [
                {
                    texto: "Compro imediatamente para aproveitar o desconto.",
                    afirmacao: "Você optou por gastar seu dinheiro de uma só vez, sem considerar outras necessidades."
                },
                {
                    texto: "Avalio se esse gasto é realmente necessário agora.",
                    afirmacao: "Você pensou duas vezes antes de fazer uma compra impulsiva, priorizando outras responsabilidades."
                },
                {
                    texto: "Deixo passar, já que não planejei essa compra.",
                    afirmacao: "Você preferiu seguir seu planejamento financeiro e evitar gastos não previstos."
                }
            ]
        },
        {
            enunciado: "Você tem a oportunidade de investir parte do seu dinheiro em uma poupança que rende juros, mas não sabe como funciona. O que você faz?",
            alternativas: [
                {
                    texto: "Invisto assim mesmo, confiaram em mim.",
                    afirmacao: "Você tomou uma decisão sem buscar informações detalhadas, confiando na opinião de outros."
                },
                {
                    texto: "Pesquiso sobre o investimento antes de aplicar.",
                    afirmacao: "Você decidiu entender melhor como funciona o investimento antes de aplicar seu dinheiro."
                },
                {
                    texto: "Prefiro guardar o dinheiro em casa, é mais seguro.",
                    afirmacao: "Você optou por não investir por não entender bem o processo, preferindo métodos mais tradicionais."
                }
            ]
        }
    ];
    

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No final do mês";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
