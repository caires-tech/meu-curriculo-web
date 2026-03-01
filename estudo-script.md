# Estudo Completo do script.js --- Sistema de Modal

Este documento explica detalhadamente o funcionamento do arquivo
script.js responsável pelo controle do modal no portfólio.

------------------------------------------------------------------------

# 1. Função abrirModal(idConteudo)

function abrirModal(idConteudo)

Função responsável por abrir o modal e inserir dinamicamente o conteúdo
selecionado.

## Passo 1 --- Capturar conteúdo oculto

const conteudo = document.getElementById(idConteudo).innerHTML;

-   Busca um elemento pelo ID recebido como parâmetro.
-   Captura todo o HTML interno desse elemento.
-   Armazena na variável "conteudo".

------------------------------------------------------------------------

## Passo 2 --- Inserir conteúdo dentro do modal

document.getElementById("modal-body").innerHTML = conteudo;

-   Localiza o elemento com id "modal-body".
-   Substitui seu conteúdo pelo conteúdo capturado.
-   Isso permite reutilizar o mesmo modal para diferentes seções.

------------------------------------------------------------------------

## Passo 3 --- Bloquear scroll da página

document.body.style.overflow = 'hidden';

-   Impede que o usuário role a página enquanto o modal está aberto.
-   Melhora a experiência e evita problemas visuais.

------------------------------------------------------------------------

## Passo 4 --- Tornar modal visível

const modal = document.getElementById("modal-container");
modal.style.display = "flex";

-   Seleciona o container principal do modal.
-   Altera o display para "flex", tornando-o visível.

------------------------------------------------------------------------

## Passo 5 --- Aplicar animação de entrada

setTimeout(() =\> { modal.classList.add("show"); }, 10);

-   Aguarda 10 milissegundos.
-   Adiciona a classe "show".
-   Essa classe normalmente ativa uma transição CSS.
-   O pequeno atraso garante que a animação seja aplicada corretamente.

------------------------------------------------------------------------

# 2. Função fecharModal()

function fecharModal()

Responsável por fechar o modal com animação suave.

------------------------------------------------------------------------

## Passo 1 --- Selecionar elementos

const modal = document.getElementById("modal-container"); const content
= document.querySelector(".modal-content");

-   Seleciona o container principal do modal.
-   Seleciona a caixa interna do conteúdo.

------------------------------------------------------------------------

## Passo 2 --- Liberar scroll

document.body.style.overflow = '';

-   Remove o bloqueio de rolagem.
-   Retorna ao comportamento padrão da página.

------------------------------------------------------------------------

## Passo 3 --- Aplicar animação de saída

content.classList.add("closing"); modal.classList.remove("show");

-   Adiciona classe "closing" para animação de saída.
-   Remove classe "show" usada na entrada.

------------------------------------------------------------------------

## Passo 4 --- Ocultar modal após animação

setTimeout(() =\> { modal.style.display = "none";
content.classList.remove("closing"); }, 300);

-   Aguarda 300 milissegundos (tempo da animação).
-   Define display como "none", ocultando o modal.
-   Remove classe "closing" para resetar estado.

------------------------------------------------------------------------

# 3. Fechar modal ao clicar fora

window.onclick = function(event)

Função que monitora cliques na janela inteira.

const modal = document.getElementById("modal-container");

if (event.target == modal) { fecharModal(); }

-   Verifica se o clique ocorreu exatamente no overlay do modal.
-   Se sim, chama a função fecharModal().
-   Permite fechar o modal clicando fora da caixa de conteúdo.

------------------------------------------------------------------------

# Arquitetura Geral do Script

✔ Manipulação do DOM com getElementById e querySelector\
✔ Reutilização de estrutura HTML dinâmica\
✔ Controle de animações via classes CSS\
✔ Controle de tempo com setTimeout\
✔ Boa experiência do usuário (UX) com bloqueio de scroll\
✔ Estrutura simples, clara e eficiente

------------------------------------------------------------------------

Conclusão:

O script implementa um sistema de modal reutilizável, com inserção
dinâmica de conteúdo e controle de animações, seguindo boas práticas de
separação entre HTML, CSS e JavaScript.
