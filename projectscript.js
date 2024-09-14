function loadProjects(department) {
    const projects = {
        electronics: [
            {
                title: "Smart Home Automation System",
                description: "Design and implement a IoT-based smart home system.",
                price: 299
            },
            {
                title: "Digital Signal Processing Toolkit",
                description: "Develop a comprehensive DSP toolkit for audio applications.",
                price: 249
            },
            {
                title: "5G Network Simulator",
                description: "Create a simulator for 5G network protocols and performance.",
                price: 399
            },
            {
                title: "Smart Home Automation System",
                description: "Design and implement a IoT-based smart home system.",
                price: 299
            },
            {
                title: "Digital Signal Processing Toolkit",
                description: "Develop a comprehensive DSP toolkit for audio applications.",
                price: 249
            },
            {
                title: "5G Network Simulator",
                description: "Create a simulator for 5G network protocols and performance.",
                price: 399
            }
        ],
        computer: [
            {
                title: "AI-powered Chatbot",
                description: "Build an intelligent chatbot using natural language processing.",
                price: 349
            },
            {
                title: "Blockchain-based Voting System",
                description: "Develop a secure and transparent voting system using blockchain.",
                price: 499
            },
            {
                title: "Cloud-based File Storage Service",
                description: "Create a scalable cloud storage solution with encryption.",
                price: 299
            },
            {
                title: "AI-powered Chatbot",
                description: "Build an intelligent chatbot using natural language processing.",
                price: 349
            },
            {
                title: "Blockchain-based Voting System",
                description: "Develop a secure and transparent voting system using blockchain.",
                price: 499
            },
            {
                title: "Cloud-based File Storage Service",
                description: "Create a scalable cloud storage solution with encryption.",
                price: 299
            }
        ],
        mechanical: [
            {
                title: "3D-Printed Prosthetic Hand",
                description: "Design and fabricate a functional 3D-printed prosthetic hand.",
                price: 399
            },
            {
                title: "Autonomous Drone for Inspection",
                description: "Build a drone for automated industrial inspections.",
                price: 549
            },
            {
                title: "Energy-Efficient HVAC System",
                description: "Develop an innovative, energy-saving HVAC system.",
                price: 449
            },
            {
                title: "3D-Printed Prosthetic Hand",
                description: "Design and fabricate a functional 3D-printed prosthetic hand.",
                price: 399
            },
            {
                title: "Autonomous Drone for Inspection",
                description: "Build a drone for automated industrial inspections.",
                price: 549
            },
            {
                title: "Energy-Efficient HVAC System",
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
            <img src="Computer img/sample.png" class="projectimg"/>
            <p>${project.description}</p>
            <p class="price">Rs${project.price}</p>
            <button>Buy Now</button>
            </a>
        `;
        projectContainer.appendChild(projectCard);
    });
}