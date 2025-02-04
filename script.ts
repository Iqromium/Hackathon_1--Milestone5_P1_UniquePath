//listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    //type assertion
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLInputElement;
const experienceElement = document.getElementById('experience') as HTMLInputElement;
const skillsElement = document.getElementById('skills') as HTMLInputElement;

//coding for unique path Milestone 5 addition:
const usernameElement = document.getElementById('username') as HTMLInputElement;


//putting conditions:
if (profilePictureInput && 
nameElement &&
emailElement && 
phoneElement &&
educationElement && 
experienceElement && 
skillsElement &&  
usernameElement 
) {  
const name = nameElement.value;
const email = emailElement.value;
const phone = phoneElement.value;
const education = educationElement.value;
const experience = experienceElement.value;
const skills = skillsElement.value;
const username = usernameElement.value;
//coding for unique path Milestone 5 addition:
const uniquePath = `resumes/${username.replace(/\s+/g, '')}_resume.html`;


// elements of profile image
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile): '';

//moving on to making output of resume
const resumeOutput = `

<h2>Resume</h2>

${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Image" class="profilePicture">` : ''}
<p><strong>Name:</strong> ${name} </p>
<p><strong>Email:</strong> ${email} </p>
<p><strong>Phone Number:</strong> ${phone} </p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;

//coding for unique path Milestone 5 addition:
const downloadLink = document.createElement('a')
downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURI(resumeOutput)
downloadLink.download = uniquePath;
downloadLink.textContent = 'Download Your Resume Here';

//resume output:
const resumeOutputElement = document.getElementById("resumeOutput");
if (resumeOutputElement) {
resumeOutputElement.innerHTML = resumeOutput;

//coding for unique path Milestone 5 addition:
resumeOutputElement.appendChild(downloadLink)

resumeOutputElement.style.display = "block";
}
} else {
console.error('one or more elements of output are not present')
}
});

