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

        // Array of image URLs (You can add more images or change the paths as needed)
        const images = [
            "img 1.jpg",
            "img 2.jpg",
            "img 3.jpg",
            "img 4.jpg",
            "img 5.jpg"
        ];

        let currentIndex = 0;
        const imageElement = document.getElementById('about-image');
        const displayTime = 5000; // 5 seconds

        // Function to cycle through images with smooth transitions
        function cycleImages() {
            // Fade out the current image
            imageElement.style.opacity = '0';

            setTimeout(() => {
                // Change the image after fading out
                imageElement.src = images[currentIndex];

                // Fade in the new image
                imageElement.style.opacity = '1';

                // Update the index to the next image (looping back at the end)
                currentIndex = (currentIndex + 1) % images.length;
            }, 1000); // 1-second delay for fade-out
        }

        // Start cycling through images every 5 seconds
        setInterval(cycleImages, displayTime);

        // Initial image load
        window.onload = cycleImages;

        // Fade in animation for the about-container
        window.addEventListener('DOMContentLoaded', () => {
            document.querySelector('.about-container').style.opacity = '1';

            const aboutBoxes = document.querySelectorAll('.about-box');

            // Add scrolling effect for each box
            window.addEventListener('scroll', () => {
                aboutBoxes.forEach((box) => {
                    const boxPosition = box.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;

                    if (boxPosition < windowHeight - 100) {
                        box.style.transform = 'translateY(0)';
                        box.style.opacity = '1';
                        box.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
                    }
                });
            });
        });

const noteTextstr="⚠️ Note :This is not a dynamic website so if you want to send message to our team please copy the msg that we provided in that copy button and go to @projectnest_projectseller our instagram account and DM us...."
const noteText = document.getElementById("note-text");
noteText.innerText=noteTextstr;