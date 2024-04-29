// Function to generate markdown data for README
  function generateSVG(data) {
    return `
    # ${data.title}
  
    ${renderLicenseBadge(data.license)}
  
    ## Description
    ${data.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Credits](#credits)
    - [Testing](#testing)
    - [Questions](#questions)
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}
  
    ${renderLicenseSection(data.license)}
  
    ## Credits
    ${data.credits}
  
    ## Testing
    ${data.testing}
  
    ## Questions
    Check out my [GitHub](https://github.com/${data.github}) 
    
    For questions, reach out to me at ${data.email}.
  `;
  }
  
  module.exports = generateSVG;
  