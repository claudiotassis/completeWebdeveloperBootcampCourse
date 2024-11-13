
        // DOM Manipulation
        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.addEventListener('click', function() {
                this.style.backgroundColor = getRandomColor();
            });
        });

        // Função para cores aleatórias
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // Manipulação de eventos
        function showProjectDetails(id) {
            alert(`Detalhes do Projeto ${id} seriam mostrados aqui!`);
        }

        // Validação de formulário
        function handleSubmit(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validação básica
            if (name.length < 3) {
                alert('Nome deve ter pelo menos 3 caracteres');
                return;
            }

            if (!email.includes('@')) {
                alert('Por favor, insira um email válido');
                return;
            }

            if (message.length < 10) {
                alert('Mensagem deve ter pelo menos 10 caracteres');
                return;
            }

            // Simulação de envio
            console.log('Formulário enviado:', { name, email, message });
            alert('Formulário enviado com sucesso!');
            event.target.reset();
        }

        // Smooth scroll para navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });
