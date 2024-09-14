window.addEventListener('scroll', function () {
    const header = document.querySelector('.headers');
    if (window.scrollY > 50) {
        header.classList.add('blur')
    } else {
        header.classList.remove('blur');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});


const text = " At ProjectNest, we specialize in providing high-quality, ready-to-use projects for engineering students. Whether you’re looking for academic projects, personal development ideas, or a unique solution tailored to your requirements, ProjectNest has you covered. We offer a wide variety of projects in different fields like software development, robotics, IoT, and more.";
const typingSpeed = 50; // Typing speed in ms
const pauseDuration = 5000; // 5-second pause before restarting
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById('typewriter-text').textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        setTimeout(() => {
            resetText(); // Clear text and start over after 5 seconds
        }, pauseDuration);
    }
}

function resetText() {
    document.getElementById('typewriter-text').textContent = "";
    index = 0;
    typeWriter();
}

// Start the typewriter effect on page load
window.onload = function() {
    typeWriter();
};


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const projectList = document.getElementById('project-list');

    if (cards) {
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const href = card.getAttribute('href');

                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = 'scale(1)';
                    window.location.href = href;
                }, 200);
            });
        });
    }

    if (projectList) {
        const currentPage = window.location.pathname.split('/').pop().split('.')[0];
        loadProjects(currentPage);
    }
});