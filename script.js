const buttons = document.querySelectorAll('.btn-glitch');
const sections = document.querySelectorAll('.content-section');

        function showSection(targetId) {
            // 1. Ocultar todo
            sections.forEach(section => {
                section.classList.remove('active');
                section.style.display = 'none';
            });

            // 2. Mostrar objetivo
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
                // Pequeño delay para permitir que el navegador procese el display:block antes de la animación
                setTimeout(() => {
                    targetSection.classList.add('active');
                }, 10);
            }
        }

        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();

                // Efecto visual en botones
                buttons.forEach(btn => btn.classList.remove('active-btn'));
                button.classList.add('active-btn');

                // Cambio de sección
                const targetId = button.getAttribute('data-target');
                showSection(targetId);
            });
        });

        // Inicialización al cargar la página
        document.addEventListener('DOMContentLoaded', () => {
            showSection('writeups');
            const defaultBtn = document.querySelector('.btn-glitch[data-target="writeups"]');
            if(defaultBtn) defaultBtn.classList.add('active-btn');
        });



