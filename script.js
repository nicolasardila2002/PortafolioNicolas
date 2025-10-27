// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Toggle de habilidades - VERSIÓN CORREGIDA
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remover clase active de todos los botones
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Ocultar todos los contenidos
            document.querySelectorAll('.skills-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Mostrar el contenido correspondiente
            const targetContent = document.querySelector(`.${targetTab}-skills`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

// Modal Video Presentación
function openVideoModal() {
    const modal = document.getElementById('videoModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Previene scroll
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura scroll
}

// Cerrar modal haciendo click fuera del contenido
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('videoModal');
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeVideoModal();
        }
    });
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeVideoModal();
        }
    });
});