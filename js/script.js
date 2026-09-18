 
        /*Carrinho*/
        const container = document.getElementById('sacolaContainer');
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

        function formatarPreco(valor){
            return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }

        function salvarCarrinho(){
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
        }

        function removerItem(indice){
            carrinho.splice(indice, 1);
            salvarCarrinho();
            renderizar();
        }

        function renderizar(){
            container.innerHTML = "";

            if(carrinho.length === 0){
                container.innerHTML = `
                    <p class="vazio">Sua sacola está vazia.</p>
                    <a class="continuar" href="click.html">&larr; Continuar comprando</a>
                `;
                return;
            }

            let total = 0;

            carrinho.forEach(function(item, indice){
                total += item.preco * item.quantidade;

                const div = document.createElement('div');
                div.className = "item-carrinho";
                div.innerHTML = `
                    <img src="${item.imagem}" alt="${item.nome}">
                    <div class="item-info">
                        <div class="nome">${item.nome}</div>
                        <div class="detalhe">Aro: ${item.aro} · Qtd: ${item.quantidade}</div>
                        <div class="detalhe">${formatarPreco(item.preco)}</div>
                    </div>
                    <button class="remover" data-indice="${indice}">Remover</button>
                `;
                container.appendChild(div);
            });

            const resumo = document.createElement('div');
            resumo.className = "resumo";
            resumo.innerHTML = `<span>Total</span><span>${formatarPreco(total)}</span>`;
            container.appendChild(resumo);

            const botao = document.createElement('button');
            botao.className = "botaofinalizar";
            botao.textContent = "Finalizar compra";
            botao.addEventListener('click', function(){
                alert("Compra finalizada! (aqui entraria a integração de pagamento)");
                carrinho = [];
                salvarCarrinho();
                renderizar();
            });
            container.appendChild(botao);

            container.querySelectorAll('.remover').forEach(function(btn){
                btn.addEventListener('click', function(){
                    removerItem(Number(btn.dataset.indice));
                });
            });
        }

        renderizar();

    
    

        