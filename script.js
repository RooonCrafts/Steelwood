function closeMenu() {
    document.getElementById('menu-toggle').checked = false;
}

function showHome() {
    document.getElementById('content').innerHTML = `
        <h2>Introduction</h2>
        <p>Steelwood offers a wide range of services including consulting, custom fabrication, repairs, construction, remodeling, metal fabrication, welding, furniture manufacturing, and carpentry. Our skilled team delivers high-quality, tailored solutions for every project.</p>
        <h2>Our Aim</h2>
        <p>At Steelwood, we aim to be your top choice for construction, fabrication, and repair services. We focus on exceeding expectations through quality and reliability, whether building new structures, remodeling, or crafting custom furniture.</p>
        <h2>Summary</h2>
        <p>Steelwood provides comprehensive services from consulting to carpentry, ensuring exceptional quality and personalized solutions. We prioritize excellence, aiming to create lasting value and establish ourselves as industry leaders.</p>`;
    closeMenu();
}

function showServices() {
    document.getElementById('content').innerHTML = `
        <h2>Our Services</h2>
        <ul>
            <li>Consulting: We offer expert consulting services to guide you through every stage of your project.</li>
            <li>Custom Fabrication: Our skilled craftsmen specialize in custom fabrication to bring your unique designs to life.</li>
            <li>Repairs: Trust us for efficient and reliable repair services to keep your structures and equipment in top condition.</li>
            <li>Construction: From planning to completion, we handle all aspects of construction projects with precision and expertise.</li>
            <li>Remodeling: We offer comprehensive remodeling services to transform and enhance your spaces.</li>
            <li>Metal Fabrication: Our metal fabrication services provide durable and custom solutions for various applications.</li>
            <li>Welding: Our skilled welders ensure strong and precise welding for your projects.</li>
            <li>Furniture Manufacturing: We create high-quality, custom furniture that meets your specific needs and style.</li>
            <li>Carpentry: Our carpentry services cover everything from framing to finishing, delivering exceptional results.</li>
        </ul>`;
    closeMenu();
}

function showProjects() {
    document.getElementById('content').innerHTML = `
        <h2>Our Projects</h2>
        <div class="project-grid">
            <div class="project">
                <img src="project1.jpg" alt="Project 1">
                <h3>Project 1</h3>
                <p>Project 1 description goes here.</p>
            </div>
            <div class="project">
                <img src="project2.jpg" alt="Project 2">
                <h3>Project 2</h3>
                <p>Project 2 description goes here.</p>
            </div>
            <div class="project">
                <img src="project3.jpg" alt="Project 3">
                <h3>Project 3</h3>
                <p>Project 3 description goes here.</p>
            </div>
            <div class="project">
                <img src="project4.jpg" alt="Project 4">
                <h3>Project 4</h3>
                <p>Project 4 description goes here.</p>
            </div>
            <div class="project">
                <img src="project5.jpg" alt="Project 5">
                <h3>Project 5</h3>
                <p>Project 5 description goes here.</p>
            </div>
            <div class="project">
                <img src="project6.jpg" alt="Project 6">
                <h3>Project 6</h3>
                <p>Project 6 description goes here.</p>
            </div>
        </div>`;
    closeMenu();
}

function showContact() {
    document.getElementById('content').innerHTML = `
        <h2>Contact Us</h2>
        <form id="contact-form" action="/contact" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="5" required></textarea><br><br>
            <input type="submit" value="Send Message">
        </form>`;
    closeMenu();
}
