# Estudo - style.css

## Arquivo CSS Completo

------------------------------------------------------------------------
#  1. CONFIGURAÇÕES GERAIS 
## Body, header, etc

´´´
body {
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.4;
    color: #333;
    background-color: #e9ecef;
    margin: 0;
    padding: 0;
    animation: fadeIn 0.3s ease-out;
}

header, main {
    max-width: 850px;
    margin: 0 auto;
    background: #fff;
    padding: 40px 50px;
}

header {
    background-color: #1a2a3a;
    color: white;
    text-align: left;
    border-bottom: 5px solid #3498db;
}

h1 { font-size: 2.5rem; letter-spacing: -1px; margin: 0; }
h2 { font-size: 1.4rem; margin-top: 0; padding-top: 0; border-top: none; }
h3 { margin: 0 0 5px 0; color: #2980b9; font-size: 1.1rem; }
p { margin: 5px 0; }
ul { margin-top: 2px; padding-left: 20px; }
li { margin-bottom: 1px; text-align: justify; }
´´´

------------------------------------------------------------------------
# 2. CARDS (REUTILIZÁVEL) 

´´´
.card {
    background: #fff;
    padding: 30px;
    margin-bottom: 25px !important;
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    margin-top: 0 !important;
}

.card p { text-align: justify; }

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
    border-color: #3498db;
}

.card::after {
    content: "➔";
    position: absolute;
    right: 20px; top: 20px;
    color: #3498db;
    font-size: 1.2rem;
    opacity: 0.7;
}

.card-link { text-decoration: none; color: inherit; display: block; }
.card-link:visited { color: inherit; }
.card-link:hover { text-decoration: none; color: inherit; }
.card-link:active .card { transform: scale(0.98); background-color: #f0f0f0; }

.contato-card::after {
    display: none !important;
}
´´´

------------------------------------------------------------------------
# 3. SEÇÃO CONTATO E ÍCONES

´´´
contato { padding-bottom: 20px;}
contato h2 { text-align: center; margin-bottom: 30px; }

main { padding-top: 20px; }

.image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    padding-bottom: 20px;
    align-items: center;
}

.image-item { text-align: center; }

.image-item img {
    width: 40px;
    height: auto;
    object-fit: contain;
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0.7;
}

.image-item img:hover { 
    transform: scale(1.1);
    opacity: 1;
}
´´´

------------------------------------------------------------------------
# 4. MODAL E ANIMAÇÕES 
´´´
.modal-overlay {
    display: none; opacity: 0;
    position: fixed; top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    justify-content: center; align-items: center;
    z-index: 1000;
    transition: opacity 0.4s ease-in-out;
}

.modal-overlay.show { opacity: 1; }

.modal-content {
    background: white; width: 90%; max-width: 800px;
    border-radius: 20px; overflow: hidden; position: relative;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    animation: modalSurgir 0.5s ease-out;
}

.modal-inner-scroll {
    max-height: 80vh; overflow-y: auto; padding: 30px; box-sizing: border-box;
}

.close-btn { position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 1.5rem; cursor: pointer; }
´´´

------------------------------------------------------------------------
# 5.CONTROLE DOS LINKS --- */

´´´
.link-projeto {
    text-decoration: none;
    color: #444;
    font-weight: normal;
    font-style: italic;
    cursor: pointer;
}

.link-projeto:visited,
.link-projeto:hover {
    color: #444;
    text-decoration: underline;
}

.link-projeto:active {
    color: #444;
    text-decoration: none;
}

.cert-link {
    text-decoration: none;
    color: #444;
    font-weight: normal;
    font-style: italic;
    cursor: pointer;
    margin-left: 5px;
}

.cert-link:visited, 
.cert-link:active {
    color: #444;
    text-decoration: none;
}

.cert-link:hover {
    color: #444;
    text-decoration: underline;
}

@keyframes modalSurgir {
    from { opacity: 0; transform: scale(0.7); }
    to { opacity: 1; transform: scale(1); }
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
´´´
------------------------------------------------------------------------
# 6. RESPONSIVIDADE (MOBILE)

´´´
@media (max-width: 768px) {
    main { width: 95%; padding: 10px; }
    .card { padding: 20px; margin-bottom: 20px; }
    h1 { font-size: 1.6rem; }
    h2 { font-size: 1.2rem; }
    p, li { font-size: 0.95rem; }
}
´´´
