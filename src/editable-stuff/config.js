// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Eric",
  middleName: "",
  lastName: "Zazovsky",
  message: "Math and Computer Science Student at UT Austin",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ezazovsky",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=61555854530579",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/eric.zazovsky/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/eric-zazovsky/",
    },
    {
      image: "fa-twitter",
      url: "https://x.com/ezazovsky?t=7biOyzj7zPaphzQy8xkyfg&s=09",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/HeadShotCrop.jpg"),
  imageSize: 375,
  message:
    "My name is Eric Zazovsky. I’m a senior pursuing a B.S. in Computer Science and a B.S. in Mathematics at the University of Texas at Austin (expected May 2027, GPA 3.78). Most recently I was a Software Engineering Intern on the Cloud Growth team at Confluent, an IBM Company, where I shipped an in-product survey platform and A/B-tested growth experiments in React Redux/TypeScript. Before that I built a HIPAA-compliant patient care portal at Thrive Education, and I work on robot learning and teleoperation research at UT. I code in Java, Python, C/C++, JavaScript and TypeScript, and I love building cool things and solving hard problems.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ezazovsky", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["JunhongXu/LEAP_MAN_Teleop", "zsky-solutions", "zsky-backend", "Ai-News-App", "portfolio", "Toyota-Financial"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/HeadShotCrop.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/HeadShotCrop.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Java", value: 85 },
    { name: "JavaScript", value: 90 },
    { name: "TypeScript", value: 85 },
    { name: "React Redux", value: 85 },
    { name: "C/C++", value: 70 },
    { name: "Spring Boot", value: 70 },
    { name: "Docker / AWS", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am currently looking for full-time new grad software engineering roles starting in 2027! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ezazovsky@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      company: "Confluent, an IBM Company",
      role: "Software Engineering Intern, Cloud Growth",
      date: "May 2026 – August 2026",
    },
    {
      company: "Thrive Education",
      role: "Full-Stack Software Engineering Intern",
      date: "November 2024 – May 2026",
    },
    {
      company: "University of Texas at Austin",
      role: "Peer Mentor, Freshman Research Initiative",
      date: "January 2024 – May 2026",
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
