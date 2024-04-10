// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const formattedLicense = license.replace(/ /g, "_").replace(/-/g, "--");
  return `![Github License](https://img.shields.io/badge/license-${formattedLicense}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'PostgreSQL': 'https://www.postgresql.org/about/licence/',
    'AFL-3.0': 'https://opensource.org/licenses/AFL-3.0',
    'EPL-2.0': 'https://opensource.org/licenses/EPL-2.0',
    '': '' // No license
  };

  return licenseLinks[license] || '';
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `
##License 

`



}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  <h1>#Description</h1>

   ${data.description}


   ${data.imageURL ? `
   <h1>#Visuals</h1>

   <img src="${data.imageURL}" >` : ''}


   ${data.liveDemo ? `
   <h1>#Deployment</h1>

   Live Demo: ([DEMO >](${data.liveDemo}))` : ''}

   
   <h1>#License</h1>

   ${renderLicenseBadge(data.license)}

  Licensed under the ${data.license} license.
  
`;
}

module.exports = generateMarkdown;
