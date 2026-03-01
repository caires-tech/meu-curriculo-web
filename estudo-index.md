# Estudo Completo do index.html --- Portfólio Rodrigo Caires

Este documento contém a explicação estrutural e conceitual do arquivo
index.html, organizado por blocos funcionais para estudo e consulta
futura.

------------------------------------------------------------------------

## 1. Estrutura Base

### \<!DOCTYPE html\>

Define que o documento utiliza HTML5.

\###
```{=html}
<html lang="pt-br">
```
Inicia o documento HTML e define o idioma como Português do Brasil.
Importante para SEO, acessibilidade e leitores de tela.

------------------------------------------------------------------------

## 2. Head (Configurações e Metadados)

O
```{=html}
<head>
```
contém informações que não aparecem visualmente na página, mas são
essenciais para funcionamento, SEO e compartilhamento.

### Meta Tags Básicas

-   meta charset="UTF-8" Permite uso de acentuação e caracteres
    especiais.

-   meta name="viewport" Torna o site responsivo em dispositivos móveis.

-   meta name="view-transition" Habilita suporte a transições suaves
    entre páginas.

-   title Define o título exibido na aba do navegador.

------------------------------------------------------------------------

## 3. Open Graph (Compartilhamento)

Essas tags controlam como o site aparece ao ser compartilhado em redes
sociais.

-   og:title → Título exibido na prévia.
-   og:description → Descrição da prévia.
-   og:image → Imagem exibida.
-   og:url → URL oficial.
-   og:type → Tipo do conteúdo (website).
-   og:site_name → Nome do site.

------------------------------------------------------------------------

## 4. Recursos Externos

-   link rel="stylesheet" Importa o arquivo CSS externo.

-   link rel="icon" Define o favicon da aba do navegador.

------------------------------------------------------------------------

## 5. Body (Conteúdo Visível)

Tudo que aparece na página está dentro do
```{=html}
<body>
```
.

------------------------------------------------------------------------

## 6. Header

Contém o título principal do site.

-   h1 → Título principal (forte impacto em SEO).
-   strong → Destaque semântico importante.

------------------------------------------------------------------------

## 7. Sistema de Modal

Estrutura reutilizável para exibir conteúdos dinâmicos.

Componentes principais:

-   modal-container → Fundo escuro (overlay).
-   modal-content → Caixa central.
-   close-btn → Botão que chama função JavaScript fecharModal().
-   modal-body → Área onde conteúdo é inserido dinamicamente.

Arquitetura inteligente: um único modal reutilizado para vários
conteúdos.

------------------------------------------------------------------------

## 8. Cards Interativos

Estrutura padrão:

div class="card" onclick="abrirModal('conteudo-x')"

Função:

-   Estiliza como cartão.
-   Ao clicar, chama função JavaScript.
-   Exibe conteúdo oculto correspondente.

------------------------------------------------------------------------

## 9. Conteúdos Ocultos

Estrutura:

div id="conteudo-x" style="display:none;"

Função:

-   Mantém conteúdo invisível.
-   JavaScript altera para exibição no modal.
-   Evita duplicação de layout.

------------------------------------------------------------------------

## 10. Script Final

script src="script.js"

Importa o arquivo JavaScript responsável por:

-   abrirModal()
-   fecharModal()
-   Manipulação do DOM
-   Inserção dinâmica de conteúdo

------------------------------------------------------------------------

# Arquitetura Geral do Projeto

✔ Separação clara entre HTML, CSS e JavaScript\
✔ Estrutura semântica correta\
✔ Sistema de modal reutilizável\
✔ Conteúdo dinâmico via DOM\
✔ Configuração de SEO e Open Graph\
✔ Estrutura profissional organizada

------------------------------------------------------------------------

Documento gerado para estudo e consulta técnica.
