// Função para lidar com o envio do formulário de contato
document.querySelector('#formulario-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Pega os valores dos campos do formulário
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const assunto = document.querySelector('#assunto').value;
    const mensagem = document.querySelector('#mensagem').value;
    
    // Validações básicas
    if (nome.trim() === '') {
        alert('Por favor, insira seu nome.');
        return;
    }
    if (email.trim() === '' || !email.includes('@')) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }
    if (assunto.trim() === '') {
        alert('Por favor, insira um assunto.');
        return;
    }
    if (mensagem.trim() === '') {
        alert('Por favor, insira sua mensagem.');
        return;
    }
    
    // Exemplo de envio de mensagem (substitua com seu método de envio de mensagem ou servidor back-end)
    // Exemplo usando fetch:
    /*
    fetch('/api/contato', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome,
            email,
            assunto,
            mensagem
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Mensagem enviada com sucesso!');
        // Limpar o formulário após o envio
        document.querySelector('#formulario-contato').reset();
    })
    .catch(error => {
        alert('Erro ao enviar a mensagem. Por favor, tente novamente.');
    });
    */
    
    // Exibir uma mensagem de sucesso para fins de demonstração (substitua com o código de envio real)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    // Limpar o formulário após o envio
    document.querySelector('#formulario-contato').reset();
});
