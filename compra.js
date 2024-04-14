// Array para armazenar os itens do carrinho
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarCarrinho(event) {
    const produtoElement = event.target.closest('.produto');
    const produtoId = parseInt(produtoElement.getAttribute('data-id'));
    const produtoNome = produtoElement.querySelector('h3').innerText;
    const produtoPreco = parseFloat(produtoElement.querySelector('p').innerText.replace('Preço: R$', ''));

    // Verifica se o produto com a combinação de ID e preço já está no carrinho
    let itemExistente = carrinho.find(item => item.id === produtoId && item.preco === produtoPreco);

    if (itemExistente) {
        // Se o produto já está no carrinho, aumenta a quantidade
        itemExistente.quantidade++;
    } else {
        // Se o produto não está no carrinho, adiciona-o
        carrinho.push({
            id: produtoId,
            nome: produtoNome,
            preco: produtoPreco,
            quantidade: 1
        });
    }

    // Atualiza a exibição do carrinho
    exibirCarrinho();
}

// Função para exibir o conteúdo do carrinho
function exibirCarrinho() {
    const conteudoCarrinho = document.getElementById('conteudo-carrinho');
    let html = '<ul>';

    // Itera sobre os itens do carrinho para exibir seus detalhes
    carrinho.forEach(item => {
        html += `
            <li>
                ${item.nome} - R$${item.preco.toFixed(2)} x ${item.quantidade}
                <button onclick="removerDoCarrinho(${item.id}, ${item.preco})">Remover</button>
            </li>
        `;
    });

    // Fecha a lista
    html += '</ul>';

    // Calcula o total e exibe
    const total = calcularTotal();
    html += `<p>Total: R$${total.toFixed(2)}</p>`;

    // Define o conteúdo do carrinho
    conteudoCarrinho.innerHTML = html;
}

// Função para calcular o total do carrinho
function calcularTotal() {
    return carrinho.reduce((total, item) => {
        return total + (item.preco * item.quantidade);
    }, 0);
}

// Função para remover um item do carrinho
function removerDoCarrinho(produtoId, produtoPreco) {
    // Filtra o carrinho removendo o produto com a combinação de ID e preço fornecidos
    carrinho = carrinho.filter(item => item.id !== produtoId || item.preco !== produtoPreco);

    // Atualiza a exibição do carrinho
    exibirCarrinho();
}

// Função para finalizar a compra
function finalizarCompra(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter informações do formulário
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const pagamento = document.getElementById('pagamento').value;

    // Exibir os dados da compra no console (ou processar de outra maneira)
    console.log('Finalizando compra...');
    console.log('Nome:', nome);
    console.log('Endereço:', endereco);
    console.log('Forma de pagamento:', pagamento);
    console.log('Itens do carrinho:', carrinho);

    // Calcula o total da compra
    const total = calcularTotal();
    console.log('Total da compra: R$' + total.toFixed(2));

    // Limpa o carrinho após finalizar a compra
    carrinho = [];
    exibirCarrinho();

    // Exibir mensagem de sucesso
    alert('Compra finalizada com sucesso! Total: R$' + total.toFixed(2));

    // Limpa o formulário de finalização de compra
    event.target.reset();
}

// Adicionar eventos de clique aos botões "Adicionar ao Carrinho"
document.querySelectorAll('.adicionar-carrinho').forEach(botao => {
    botao.addEventListener('click', adicionarCarrinho);
});
