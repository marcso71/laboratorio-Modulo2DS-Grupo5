/* ============================================================
   CONTROLADOR DE INTERFAZ - PROYECTO MULTIMEDIA
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Interfaz de Usuario (HUD) cargada correctamente...");

    // 1. Efecto de iluminación en los botones al pasar el mouse
    const botones = document.querySelectorAll('.btn-gta');

    botones.forEach(boton => {
        boton.addEventListener('mouseenter', () => {
            // Aquí podrías añadir un sonido de 'hover' si tuvieras el archivo de audio
            boton.style.boxShadow = "0 0 15px var(--gta-money-green)";
        });

        boton.addEventListener('mouseleave', () => {
            boton.style.boxShadow = "none";
        });
    });

    // 2. Sistema de detección de página activa
    // Resalta en el menú la página en la que el usuario se encuentra actualmente
    const currentPath = window.location.pathname.split("/").pop();
    
    botones.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.background = "var(--gta-money-green)";
            link.style.color = "#000";
        }
    });

    // 3. Efecto de "Misión Cumplida" al cargar secciones críticas
    const cards = document.querySelectorAll('.gta-card.alert');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateX(0)";
        }, 300 * (index + 1));
    });
});

/* ============================================================
   FUNCIONES DE UTILIDAD
   ============================================================ */
function mostrarAlertaMision(mensaje) {
    // Función opcional por si quieres lanzar mensajes tipo GTA en pantalla
    alert("NUEVA MISIÓN: " + mensaje);
}