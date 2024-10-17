function loadProjects(department) {
    const projects = {
        electronics: [
            {
                title: "Gesture Control Bicycle Indicator Gloves",
                image: "ej-proj-gloves.jpg",
                description: "Design gloves that use hand gestures to activate bicycle turn indicators.",
                price: 299
            },
            {
                title: "LIDAR Micro Drone With Proximity Sensing",
                image: "ej-proj-drone.jpg",
                description: "Develop a compact drone equipped with LIDAR for precise obstacle detection and proximity sensing.",
                price: 249
            },
            {
                title: "3D Scanner Machine using Arduino",
                image: "ej-proj-3dscanner.jpg",
                description: "Build a 3D scanning device powered by Arduino for capturing object dimensions.",
                price: 399
            }
        ],
        computer: [
            {
                title: "Hotel Management System",
                image: "co-proj-hotel.webp",
                description: "Develop a system to manage bookings, staff, and operations efficiently for hotels.",
                price: 349
            },
            {
                title: "Notes & Password Manager",
                image: "co-proj-notpassman.webp",
                description: "Create a secure app to store notes and manage passwords with encryption.",
                price: 499
            },
            {
                title: "Cloud-based File Storage Service",
                image: "co-proj-cloudstorage.webp",
                description: "Build a platform for storing, sharing, and accessing files seamlessly via the cloud.",
                price: 299
            },
        ],
        mechanical: [
            {
                title: "5 Speed Gearbox Mechanism",
                image: "me-proj-5speedgear.jpg",
                description: "Create a mechanical system that enables smooth shifting between five different gear ratios.",
                price: 399,
            },
            {
                title: "Six Legged Spider Bot using Klann Mechanism",
                image: "me-proj-spidercar.jpg",
                description: "Develop a robotic spider with six legs, utilizing the Klann mechanism for realistic movement.",
                price: 549

            },
            {
                title: "Automated Coconut Scraping Machine",
                image: "me-proj-coconutscrap.jpg",
                description: "Design a machine that efficiently scrapes the flesh from coconuts automatically.",
                price: 449
            }
        ]
    };

    const projectContainer = document.getElementById('project-list');

    projects[department].forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
        <a href="viewproject.html?title=${encodeURIComponent(project.title)}&description=${encodeURIComponent(project.description)}&image=${encodeURIComponent(project.image)}&price=${project.price}">
            <h2>${project.title}</h2>
            <img src=${project.image} class="projectimg" alt="Project Image"/>
            <p>${project.description}</p>
            <p class="price">Rs ${project.price}</p>
            <button>View Project</button>
        </a>
        `;
        projectContainer.appendChild(projectCard);
    });
}