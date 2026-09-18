 /* Pag do produto*/
         
        document.querySelectorAll('.produto').forEach(function(card) {
            card.addEventListener('click', function() {
                const id = card.dataset.id;
                window.location.href = 'click.html?id=' + id;
            });
        });

        document.querySelectorAll('.filtro-categoria').forEach(function(botaoFiltro) {
            botaoFiltro.addEventListener('click', function() {
                document.querySelectorAll('.filtro-categoria').forEach(function(b) {
                    b.classList.remove('selecionado');
                });
                botaoFiltro.classList.add('selecionado');

                const categoriaEscolhida = botaoFiltro.dataset.categoria;

                document.querySelectorAll('.produto').forEach(function(card) {
                    const mostrar = categoriaEscolhida === 'Todos' || card.dataset.categoria === categoriaEscolhida;
                    card.style.display = mostrar ? '' : 'none';
                });
            });
        });