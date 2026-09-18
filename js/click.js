const produtos = [
    { id: "lume", nome: "Anel Solitário Lume Gota Ouro Amarelo 18k e Diamante", preco: 7300.00, imagem: "Imagens/a1.webp", categoria: "Aneis", temAro: true,
      descricao: "Anel solitário em ouro amarelo 18k, com diamante lapidação gota em detalhe central e micro cravação ao longo do aro." },
    { id: "splendore", nome: "Anel Coleção Splendore", preco: 7000.00, imagem: "Imagens/a2.webp", categoria: "Aneis", temAro: true,
      descricao: "Anel da coleção Splendore, com pedra central em destaque e acabamento em ouro amarelo." },
    { id: "fresh", nome: "Anel Solitário Fresh", preco: 4500.00, imagem: "Imagens/a3.webp", categoria: "Aneis", temAro: true,
      descricao: "Anel aparador de linhas em ouro amarelo e cravação de diamantes." },
    { id: "classic", nome: "Anel Solitário Classic", preco: 6700.00, imagem: "Imagens/a4.webp", categoria: "Aneis", temAro: true,
      descricao: "Anel solitário em ouro branco e ouro 18k." },
    { id: "imperio-brinco", nome: "Brinco Coleção Império", preco: 10900.00, imagem: "Imagens/b1.webp", categoria: "Brincos", temAro: false,
      descricao: "Brinco em formato cascata em ouro 18k com cravação em diamantes" },
    { id: "shine", nome: "Brinco Coleção Shine", preco: 9900.00, imagem: "Imagens/b2.webp", categoria: "Brincos", temAro: false,
      descricao: "Brinco de ouro 18k em formato triangular com esmeraldas e diamantes" },
    { id: "lux-identity-brinco", nome: "Brinco Coleção Lux Identity", preco: 8900.00, imagem: "Imagens/b3.webp", categoria: "Brincos", temAro: false,
      descricao: "Brinco em ouro branco e cristais com design moderno em formato de leque." },
    { id: "lyra", nome: "Brinco Coleção Lyra", preco: 7900.00, imagem: "Imagens/b4.webp", categoria: "Brincos", temAro: false,
      descricao: "Brinco de ouro branco com esmeraldas e diamante, modelo gota." },
    { id: "aurora", nome: "Colar Coleção Aurora", preco: 3900.00, imagem: "Imagens/c1.webp", categoria: "Colares", temAro: false,
      descricao: "Colar com pedras verdes intercaladas, corrente fina em ouro branco." },
    { id: "max-colar", nome: "Colar Coleção Max", preco: 11000.00, imagem: "Imagens/c2.webp", categoria: "Colares", temAro: false,
      descricao: "Colar maximalista em ouro amarelo e detalhes em diamantes." },
    { id: "lux-identity-colar", nome: "Colar Coleção Lux Identity", preco: 12900.00, imagem: "Imagens/c3.webp", categoria: "Colares", temAro: false,
      descricao: "Colar maximalista com cravação em cristais." },
    { id: "glorious", nome: "Colar Coleção Glorious", preco: 90980.00, imagem: "Imagens/c4.webp", categoria: "Colares", temAro: false,
      descricao: "Colar estilo chocker em ouro amarelo 18k, ouro branco e ouro rose" },
    { id: "imperio-pulseira", nome: "Pulseira Coleção Império", preco: 9980.00, imagem: "Imagens/p1.webp", categoria: "Pulseiras", temAro: false,
      descricao: "Pulseira delicada com pingente em formato de trangular em esmeraldas e ouro amarelo 18k." },
    { id: "sensity", nome: "Pulseira Coleção Sensity", preco: 15000.00, imagem: "Imagens/p2.webp", categoria: "Pulseiras", temAro: false,
      descricao: "Pulseira com esferas cravejadas, alternando ouro amarelo e branco." },
    { id: "max-pulseira", nome: "Pulseira Coleção Max", preco: 19000.00, imagem: "Imagens/p3.webp", categoria: "Pulseiras", temAro: false,
      descricao: "Pulseira ampla em elos entrelaçados, acabamento fosco e polido em ouro amarelo." },
    { id: "lagoon", nome: "Pulseira Coleção Lagoon", preco: 5980.00, imagem: "Imagens/p4.webp", categoria: "Pulseiras", temAro: false,
      descricao: "Pulseira delicada trançada em ouro amarelo 18k e diaamantes." }
];

const params = new URLSearchParams(window.location.search);
const idClicado = params.get('id');
const produtoAtual = produtos.find(function(p) { return p.id === idClicado; });

if (!produtoAtual) {
    document.getElementById('area-produto').innerHTML =
        '<p class="nao-encontrado">Produto não encontrado (id="' + idClicado + '"). ' +
        '<a href="pag.produtos.html">Voltar ao catálogo</a></p>';
} else {
    document.title = produtoAtual.nome;
    document.getElementById('titulo-colecao').textContent = produtoAtual.categoria + ':';

    document.getElementById('imagem-produto').src = produtoAtual.imagem;
    document.getElementById('imagem-produto').alt = produtoAtual.nome;
    document.getElementById('nome-produto').textContent = produtoAtual.nome;

    document.getElementById('preco-produto').textContent =
        produtoAtual.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('parcelas-produto').textContent =
        '10x de ' + (produtoAtual.preco / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ' sem juros';
    document.getElementById('descricao-produto').textContent = produtoAtual.descricao || '';

    if (!produtoAtual.temAro) {
        document.querySelector('.secao-aro').style.display = 'none';
    }

    let aroSelecionado = null;
    const botoesAro = document.querySelectorAll('.meus-aros button');

    botoesAro.forEach(function(botao){
        botao.addEventListener('click', function(){
            botoesAro.forEach(function(b) { b.classList.remove('selecionado'); });
            botao.classList.add('selecionado');
            aroSelecionado = botao.textContent;
        });
    });

    const botaoSacola = document.querySelector('.botaosacola');

    botaoSacola.addEventListener('click', function(){
        if (produtoAtual.temAro && !aroSelecionado) {
            alert("Selecione o aro antes de adicionar à sacola.");
            return;
        }

        const aro = produtoAtual.temAro ? aroSelecionado : '-';
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

        const existente = carrinho.find(function(item) {
            return item.nome === produtoAtual.nome && item.aro === aro;
        });

        if (existente) {
            existente.quantidade += 1;
        } else {
            carrinho.push({
                nome: produtoAtual.nome,
                preco: produtoAtual.preco,
                imagem: produtoAtual.imagem,
                aro: aro,
                quantidade: 1
            });
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        window.location.href = "carrinho.html";
    });
}