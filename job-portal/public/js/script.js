
document.addEventListener("DOMContentLoaded", function() {

    const searchForm = document.querySelector('.search form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const keywords = searchForm.keywords.value.trim();
            const location = searchForm.location.value.trim();
            const company = searchForm.company.value.trim();
            
            if (keywords === "" || location === "") {
                alert("Please fill in all required fields.");
            } else {
                alert(`Searching for jobs with keywords: ${keywords}, location: ${location}, company: ${company}`);
                
            }
        });
    }
    // script.js

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault(); 
        const email = this.email.value;
        const password = this.password.value;
    
        
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => {
            if (response.ok) {
                window.location.href = "jobs.html"; 
            } else {
                alert('Invalid login credentials. Please try again.');
            }
        })
        .catch(error => console.error('Error:', error));
    });
    

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = this.username.value;
    const email = this.email.value;
    const password = this.password.value;
    const userType = this.userType.value;

   
    console.log("User registered:", { username, email, password, userType });

    
    window.location.href = "jobs.html";
});

    
   
    const loginButton = document.querySelector('.cta-buttons .button[href="login.html"]');
    if (loginButton) {
        loginButton.addEventListener('click', function(event) {
            event.preventDefault();
           
            window.location.href = "login.html"; 
        });
    }

   
    const registerButton = document.querySelector('.cta-buttons .button[href="register.html"]');
    if (registerButton) {
        registerButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            window.location.href = "register.html"; 
        });
    }

    //jobs listing
    document.addEventListener('DOMContentLoaded', () => {
        const applyButtons = document.querySelectorAll('.apply-button');
    
        applyButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const jobListing = event.target.parentElement.innerText; 
                alert(`You have applied for: ${jobListing}`);
                
            });
        });
    });

       
        jobListings.forEach(job => {
            const jobItem = document.createElement('li');
            jobItem.innerHTML = `
                <h3>${job.title}</h3>
                <p>Company: ${job.company}</p>
                <p>Location: ${job.location}</p>
                <p>Description: ${job.description}</p>
                <a href="${job.link}">Apply Now</a>
            `;
            jobListingsSection.appendChild(jobItem);
        });
    }
);


document.addEventListener('DOMContentLoaded', () => {
    const applyButtons = document.querySelectorAll('.apply-button');
    
    applyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const jobListing = event.target.parentElement.innerText; 
            alert(`You have applied for: ${jobListing}`);
            
        });
    });

   
    console.log("Available Job Listings:");
    applyButtons.forEach((button, index) => {
        const jobTitle = button.parentElement.firstChild.textContent.trim();
        console.log(`${index + 1}: ${jobTitle}`);
    });
});
