        // Dados de exemplo
        const products = [
            { id: 1, name: 'Produto 1', price: 100 },
            { id: 2, name: 'Produto 2', price: 200 },
            { id: 3, name: 'Produto 3', price: 300 }
        ];

        // DOM Elements
        const productList = document.getElementById('productList');
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modalContent');
        const form = document.getElementById('registerForm');

        // Renderiza lista de produtos
        function renderProducts() {
            productList.innerHTML = products.map(product => `
                <li class="list-item" onclick="showProduct(${product.id})">
                    ${product.name} - R$ ${product.price}
                </li>
            `).join('');
        }

        // Mostra detalhes do produto
        function showProduct(id) {
            const product = products.find(p => p.id === id);
            modalContent.innerHTML = `
                <p>Nome: ${product.name}</p>
                <p>Preço: R$ ${product.price}</p>
            `;
            modal.style.display = 'flex';
        }

        // Fecha o modal
        function closeModal() {
            modal.style.display = 'none';
        }

        // Toggle menu mobile
        function toggleMenu() {
            const nav = document.querySelector('.nav-menu');
            nav.classList.toggle('active');
        }

        // Form submission
        function handleSubmit(event) {
            event.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                category: document.getElementById('category').value,
                message: document.getElementById('message').value
            };

            // Validação
            if (formData.name.length < 3) {
                alert('Nome deve ter pelo menos 3 caracteres');
                return;
            }

            if (!formData.email.includes('@')) {
                alert('Email inválido');
                return;
            }

            if (!formData.category) {
                alert('Selecione uma categoria');
                return;
            }

            console.log('Dados enviados:', formData);
            alert('Cadastro realizado com sucesso!');
            form.reset();
        }

        // Inicialização
        renderProducts();

        // Event Listeners
        window.onclick = function(event) {
            if (event.target === modal) {
                closeModal();
            }
        }

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    