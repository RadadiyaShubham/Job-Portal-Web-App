import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

// Dropdown filter data
const dropdownData = [
    { 
        title: "Job Title", 
        icon: IconSearch, 
        options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] 
    },
    { 
        title: "Location", 
        icon: IconMapPin, 
        options: ['Delhi', 'Pune', 'Banglore', 'Ahmedabad', 'Surat', 'Rajkot', 'Vadodra', 'Gandhinagar', 'Mumbai'] 
    },
    { 
        title: "Experience", 
        icon: IconBriefcase, 
        options: ['Entry Level', 'Intermediate', 'Expert'] 
    },
    { 
        title: "Job Type", 
        icon: IconRecharging, 
        options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'] 
    }
];

// Job listing data (✅ Corrected Syntax)
const jobList = [
  {
    jobTitle: "Product Designer",
    company: "Meta",
    applicants: 25,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "New York",
    package: "32 LPA",
    postedDaysAgo: 12,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    description: "Responsible for designing modern and intuitive user interfaces. You will work closely with developers and product teams to create visually appealing and highly functional user experiences.",
  },
  {
    jobTitle: "Sr. UX Designer",
    company: "Netflix",
    applicants: 14,
    experience: "Expert",
    jobType: "Part-Time",
    location: "San Francisco",
    package: "40 LPA",
    postedDaysAgo: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    description: "Enhancing user experience through creative and interactive designs. You will conduct user research, prototype new features, and improve the usability of Netflix’s streaming platform.",
  },
  {
    jobTitle: "Product Designer",
    company: "Microsoft",
    applicants: 58,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Remote",
    package: "35 LPA",
    postedDaysAgo: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    description: "Join Microsoft as a Product Designer and contribute to innovative design solutions. You will collaborate with developers, create wireframes, and refine user interfaces for various digital products.",
  },
  {
    jobTitle: "Software Engineer",
    company: "Infosys",
    applicants: 120,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Bangalore",
    package: "18 LPA",
    postedDaysAgo: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Infosys_logo.svg",
    description: "Infosys is hiring software engineers to build innovative digital solutions. You will work on cutting-edge technologies like AI, Cloud, and Data Analytics to solve business challenges."
  },
  {
    jobTitle: "Backend Developer",
    company: "Google",
    applicants: 21,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "Bangalore",
    package: "38 LPA",
    postedDaysAgo: 8,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Google_2015_logo.svg",
    description: "Google is hiring a Backend Developer to develop scalable applications. You will optimize databases, build REST APIs, and enhance system performance.",
  },
  {
    jobTitle: "Frontend Developer",
    company: "Amazon",
    applicants: 50,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Seattle",
    package: "36 LPA",
    postedDaysAgo: 10,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    description: "Amazon is looking for a Frontend Developer to build and maintain customer-facing applications. Your role will involve developing responsive UI components, improving accessibility, and collaborating with designers.",
  },
  {
    jobTitle: "iOS Developer",
    company: "Apple",
    applicants: 30,
    experience: "Expert",
    jobType: "Full-Time",
    location: "Cupertino",
    package: "42 LPA",
    postedDaysAgo: 7,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    description: "Apple is seeking an iOS Developer to work on cutting-edge applications for iOS devices. You will write clean, scalable code and contribute to Apple's mobile ecosystem.",
  },
  {
    jobTitle: "Product Designer",
    company: "Adobe",
    applicants: 23,
    experience: "Expert",
    jobType: "Part-Time",
    location: "Toronto",
    package: "33 LPA",
    postedDaysAgo: 22,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Adobe_logo_black.svg",
    description: "Adobe product designers work closely with business, marketing, engineering, and research teams. They also use data analytics to understand user needs and behaviors. ",
  },
  {
    jobTitle: "SMM Manager",
    company: "Spotify",
    applicants: 73,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Delhi",
    package: "34 LPA",
    postedDaysAgo: 8,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Spotify_logo_black.svg",
    description: "Spotify SMM Manager would be responsible for crafting and executing social media strategies across all platforms to amplify Spotify's brand, drive user engagement, promote new features, and foster a vibrant community by creating compelling content, analyzing performance metrics, and staying current with music trends, all while collaborating with internal teams to align with broader marketing goals.",
  },
  {
    jobTitle: "Software Engineer",
    company: "TCS",
    applicants: 40,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Surat",
    package: "12 LPA",
    postedDaysAgo: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tata_Consultancy_Services_Logo.svg",
    description: "TCS is looking for a Software Engineer to develop and maintain enterprise applications for global clients. Work with cutting-edge technologies and drive digital transformation."
  },
  {
    jobTitle: "Data Analyst",
    company: "MG Motors",
    applicants: 20,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Gurgaon",
    package: "14 LPA",
    postedDaysAgo: 7,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/MG_logo.svg",
    description: "MG Motors is seeking a Data Analyst to analyze vehicle performance data, customer insights, and market trends. Join us to drive data-driven decision-making in the automotive industry."
  },
  {
    jobTitle: "Frontend Developer",
    company: "Wipro",
    applicants: 90,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "Pune",
    package: "12 LPA",
    postedDaysAgo: 10,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Wipro_Primary_Logo_Color_RGB.svg",
    description: "Wipro is looking for Frontend Developers to design and develop responsive web applications using React and Angular."
  },
];

// Exporting data
export { dropdownData, jobList };