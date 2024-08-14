# Open Source Job Portal

**sanjeev kumar **  
**Full-stack web development**  
**aug-14-2024**

## Introduction
The Open Source Job Portal is a web application that connects job seekers with employers. It provides functionalities for user registration, job listing creation, job search, and application management. The project aims to offer a dynamic platform using modern web technologies.

## Project Structure
/OpenSourceJobPortal
|-- /frontend
| |-- /css
| |-- /js
| |-- index.html
|-- /backend
| |-- server.js
|-- /database
| |-- my.sql



## Technical Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js
- **Database**: MySQL
- **Version Control**: Git

## Features and Functionalities
- **User Registration and Authentication**: 
  - Users can register and log in as either job seekers or employers.
  - Proper authentication and authorization are implemented.

- **Job Listing Creation**: 
  - Employers can post job listings with job details, including title, description, requirements, location, and application deadline.

- **Job Search and Filtering**: 
  - Job seekers can search for job listings based on keywords, location, and job type.
  - Filters are available to refine search results.

- **Job Application**: 
  - Job seekers can apply for jobs directly through the portal.
  - A dashboard is available for job seekers to manage their applications.

- **Employer Dashboard**: 
  - Employers have a dashboard to manage their job listings, including editing, deleting, and marking jobs as filled.

- **User Profiles**: 
  - Profiles for job seekers and employers contain relevant information such as contact details, skills, and work history.

- **Responsive Design**: 
  - The website is responsive and accessible on desktops, tablets, and smartphones.

## Screenshots and Visuals
*Home Page - The main landing page of the job portal.*

![Screenshot (120)](https://github.com/user-attachments/assets/43d3ead3-4803-427d-addc-de72df4dd6c5)

![Registeration and login]
(![Screenshot (123)](https://github.com/user-attachments/assets/227b806a-fbae-4e8e-a610-01a4bd0e249d)
)(![Screenshot (124)](https://github.com/user-attachments/assets/067d62ee-91b0-465e-b489-8992e0957865)
)


*Job Listings - A view showing available job postings.*
![job listing ](![Screenshot (125)](https://github.com/user-attachments/assets/f3b34e7b-10bc-46b5-a45a-8b4a0ecb8feb)
)

![Employer Dashboard](![Screenshot (126)](https://github.com/user-attachments/assets/7a2f8611-239d-42c9-a376-61bc12a5f82b)
)
*Employer Dashboard - A dashboard for employers to manage their job listings.*

## Database Structure
The database schema consists of the following tables:

- **Users Table**:
  - `id`: INT (Primary Key)
  - `username`: VARCHAR
  - `password`: VARCHAR
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    user_type ENUM('job_seeker', 'employer') NOT NULL,
    contact_details TEXT,
    skills TEXT,
    work_history
- **Job Listings Table**:
  - `id`: INT (Primary Key)
  - `title`: VARCHAR
  - `description`: TEXT
  - `requirements`: TEXT
  - `location`: VARCHAR
  - `deadline`: DATE
  - `employer_id`: INT (Foreign Key)

![database ](![Screenshot (129)](https://github.com/user-attachments/assets/8cacf017-0cbd-4c4f-9754-e532b7f22eb4) 
![Screenshot (130)](https://github.com/user-attachments/assets/b1fb0b62-2a03-4b00-beb5-a1d6e2df61e5)


*Database Schema - Visual representation of the database structure.*

## Challenges Faced
During development, I faced challenges with user authentication and data validation. I researched best practices and implemented middleware for session management and input validation to overcome these issues.

## Conclusion
The Open Source Job Portal successfully connects job seekers and employers while providing essential features for job management. This project enhanced my skills in web development, including user authentication, database integration, and responsive design.

## GitHub Repository
The project is hosted on GitHub. You can access the code https://github.com/sanjeevkr08/Open-source-job-portal-.git
