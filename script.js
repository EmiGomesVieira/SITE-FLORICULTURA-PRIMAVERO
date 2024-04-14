// Inicializar o Google Maps
function initMap() {
    // Coordenadas da floricultura (substitua pela latitude e longitude corretas)
    const localizacao = { lat: -23.555, lng: -46.639 };
    
    // Cria o mapa com o centro na localização especificada
    const mapa = new google.maps.Map(document.getElementById('mapa'), {
        center: localizacao,
        zoom: 15,
    });
    
    // Adiciona um marcador na localização da floricultura
    new google.maps.Marker({
        position: localizacao,
        map: mapa,
        title: "Floricultura ABC",
    });
}

// Chama a função initMap quando a página é carregada
window.onload = initMap;

// Validação do formulário de contato
document.querySelector('form').addEventListener('submit', function(event) {
    // Pega os valores dos campos do formulário
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const mensagem = document.querySelector('#mensagem').value;
    
    // Verifica se os campos estão preenchidos
    if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
        // Impede o envio do formulário
        event.preventDefault();
        
        // Exibe uma mensagem de erro
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});

// Interatividade na página de Perguntas Frequentes (FAQs)
const perguntas = document.querySelectorAll('.faq h3');

// Adiciona um ouvinte de clique a cada pergunta
perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', function() {
        // Alterna a visibilidade da resposta associada
        const resposta = this.nextElementSibling;
        resposta.style.display = resposta.style.display === 'block' ? 'none' : 'block';
    });
});
