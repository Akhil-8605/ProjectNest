function loadProjects(department) {
    const projects = {
        electronics: [
            {
                title: "Smart Home Automation System",
                image: "sample.png",
                description: "Design and implement a IoT-based smart home system.",
                price: 299
            },
            {
                title: "Digital Signal Processing Toolkit",
                image: "sample.png",
                description: "Develop a comprehensive DSP toolkit for audio applications.",
                price: 249
            },
            {
                title: "5G Network Simulator",
                image: "sample.png",
                description: "Create a simulator for 5G network protocols and performance.",
                price: 399
            },
            {
                title: "Smart Home Automation System",
                image: "sample.png",
                description: "Design and implement a IoT-based smart home system.",
                price: 299
            },
            {
                title: "Digital Signal Processing Toolkit",
                image: "sample.png",
                description: "Develop a comprehensive DSP toolkit for audio applications.",
                price: 249
            },
            {
                title: "5G Network Simulator",
                image: "sample.png",
                description: "Create a simulator for 5G network protocols and performance.",
                price: 399
            }
        ],
        computer: [
            {
                title: "AI-powered Chatbot",
                image: "sample.png",
                description: "Build an intelligent chatbot using natural language processing.",
                price: 349
            },
            {
                title: "Blockchain-based Voting System",
                image: "sample.png",
                description: "Develop a secure and transparent voting system using blockchain.",
                price: 499
            },
            {
                title: "Cloud-based File Storage Service",
                image: "sample.png",
                description: "Create a scalable cloud storage solution with encryption.",
                price: 299
            },
            {
                title: "AI-powered Chatbot",
                image: "sample.png",
                description: "Build an intelligent chatbot using natural language processing.",
                price: 349
            },
            {
                title: "Blockchain-based Voting System",
                image: "sample.png",
                description: "Develop a secure and transparent voting system using blockchain.",
                price: 499
            },
            {
                title: "Cloud-based File Storage Service",
                image: "sample.png",
                description: "Create a scalable cloud storage solution with encryption.",
                price: 299
            }
        ],
        mechanical: [
            {
                title: "3D-Printed Prosthetic Hand",
                image: "sample.png",
                description: "Design and fabricate a functional 3D-printed prosthetic hand.",
                price: 399
            },
            {
                title: "Autonomous Drone for Inspection",
                image: "sample.png",
                description: "Build a drone for automated industrial inspections.",
                price: 549
            },
            {
                title: "Energy-Efficient HVAC System",
                image: "sample.png",
                description: "Develop an innovative, energy-saving HVAC system.",
                price: 449
            },
            {
                title: "3D-Printed Prosthetic Hand",
                image: "sample.png",
                description: "Design and fabricate a functional 3D-printed prosthetic hand.",
                price: 399
            },
            {
                title: "Autonomous Drone for Inspection",
                image: "sample.png",
                description: "Build a drone for automated industrial inspections.",
                price: 549
            },
            {
                title: "Energy-Efficient HVAC System",
                image: "sample.png",
                description: "Develop an innovative, energy-saving HVAC system.",
                price: 449
            }
        ]
    };

    const projectContainer = document.getElementById('project-list');

    projects[department].forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `<a href="quotes.html">
            <h2>${project.title}</h2>
            <img src=${project.image} class="projectimg"/>
            <p>${project.description}</p>
            <p class="price">Rs${project.price}</p>
            <button>Buy Now</button>
            </a>
        `;
        projectContainer.appendChild(projectCard);
    });
}