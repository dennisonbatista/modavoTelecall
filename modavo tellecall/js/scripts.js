<script>
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('form');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Verificar se é uma página de cadastro ou de login
            if (form.id === 'signupForm') {
                // Lógica de cadastro (mantida igual)

                // Após o cadastro, redirecione para a página de login
                window.location.href = 'paginaLogin.html';
            } else if (form.id === 'loginForm') {
                // Lógica de login (adicionar sua lógica de autenticação aqui)
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;

                // Exemplo de autenticação simples (substitua por sua lógica real)
                if (authenticateUser(email, password)) {
                    // Armazenar informações do usuário no localStorage
                    const userData = {
                        name: "Nome do Usuário",  // Substitua pelo nome real do usuário
                        // Adicione outros dados do usuário conforme necessário
                    };

                    localStorage.setItem('userData', JSON.stringify(userData));

                    // Atualizar a interface para refletir o login bem-sucedido
                    updateUI();
                } else {
                    alert('Login falhou. Verifique suas credenciais.');
                }
            }
        });

        // Função para autenticar o usuário (substitua por sua lógica real)
        function authenticateUser(email, password) {
            // Adicione sua lógica de autenticação aqui
            // Retorna true se a autenticação for bem-sucedida, false caso contrário
            return true;  // Este é um exemplo simples, substitua por sua lógica real
        }

        // Função para atualizar a interface após o login bem-sucedido
        function updateUI() {
            const userData = JSON.parse(localStorage.getItem('userData'));

            // Verificar se há informações de usuário no localStorage
            if (userData) {
                // Atualizar a navegação com o nome do usuário
                const userNav = document.getElementById('userNav');
                if (userNav) {
                    userNav.innerHTML = `Bem-vindo, ${userData.name}!`;
                }
            }
        }
    });
</script>