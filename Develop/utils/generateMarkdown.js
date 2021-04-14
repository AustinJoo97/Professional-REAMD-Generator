const licenses = {
  'Apache license 2.0': ['https://img.shields.io/badge/License-Apache%202.0-blue.svg', 'https://opensource.org/licenses/Apache-2.0'],
  'Boost Software License 1.0': ['https://img.shields.io/badge/License-Boost%201.0-lightblue.svg', 'https://www.boost.org/LICENSE_1_0.txt'],
  'BSD 2-clause "Simplified" license': ['https://img.shields.io/badge/License-BSD%202--Clause-orange.svg', 'https://opensource.org/licenses/BSD-2-Clause'],
  'BSD 3-clause "New" or "Revised" license': ['https://img.shields.io/badge/License-BSD%203--Clause-blue.svg', 'https://opensource.org/licenses/BSD-3-Clause'],
  'Creative Commons Zero v1.0 Universal': ['https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg', 'http://creativecommons.org/publicdomain/zero/1.0/'],
  'Creative Commons Attribution 4.0': ['https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg', 'https://creativecommons.org/licenses/by/4.0/'],
  'Creative Commons Attribution ShareAlike 4.0': ['https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg', 'https://creativecommons.org/licenses/by-sa/4.0/'],
  'Eclipse Public License 1.0': ['https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0', 'https://www.eclipse.org/legal/epl-v10.html'],
  'GNU Affero General Public License v3.0': ['https://img.shields.io/badge/License-AGPL%20v3-blue.svg', 'https://www.gnu.org/licenses/agpl-3.0'],
  'GNU General Public License v2.0': ['https://img.shields.io/badge/License-GPL%20v2-blue.svg', 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'],
  'GNU General Public License v3.0': ['https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0', 'https://www.gnu.org/licenses/gpl-3.0.en.html'],
  'GNU Lesser General Public License v3.0': ['https://img.shields.io/badge/License-LGPL%20v3-blue.svg', 'https://www.gnu.org/licenses/lgpl-3.0'],
  'IBM v1.0': ['https://img.shields.io/badge/License-IPL%201.0-blue.svg', 'https://opensource.org/licenses/IPL-1.0'],
  'ISC': ['https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC', 'https://opensource.org/licenses/ISC'],
  'MIT': ['https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT', 'https://opensource.org/licenses/MIT'],
  'Mozilla Public License 2.0': ['https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg', 'https://opensource.org/licenses/MPL-2.0'],
  'The Perl License': ['https://img.shields.io/badge/License-Perl-0298c3.svg', 'https://opensource.org/licenses/Artistic-2.0'],
  'SIL Open Font License 1.1': ['https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg', 'https://opensource.org/licenses/OFL-1.1'],
  'The Unlicense': ['https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/', 'https://unlicense.org/'],
  'zLib License': ['https://img.shields.io/badge/License-Zlib-lightgrey.svg', 'https://opensource.org/licenses/Zlib']
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return "";
  }
  let badgeLink = licenses[license][0];
  return badgeLink;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return "";
  }
  let licenseLink = licenses[license][1]
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let renderBadge = renderLicenseBadge(license);
  let renderLink = renderLicenseLink(license);

  return `## License\n\`\`\`\n[![License](${renderBadge})]\nLicense Link: ${renderLink}\n\`\`\``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let notApplicable = ['N/A', 'N/a', 'n/a', 'n/A', 'NA', 'na']
  if(notApplicable.includes(data.deployedLink)){
    data.deployedLink = 'N/a';
  } 

  // This will generate a list of contributors with new line characters
  data.contributors = data.contributors.split(' ');
  let theTeam = '';
  for(let i = 0; i < data.contributors.length; i++){
      if(i === data.contributors.length-1){
          theTeam += `${data.contributors[i]}`;
          break;
      }
      theTeam += `${data.contributors[i]}\n`
  }

  // This will generate a list of technologies used with new line characters
  let techUsed = '';
  for(let i = 0; i < data.technologies.length; i++){
      if(i === data.technologies.length-1){
          techUsed += `${data.technologies[i]}`;
          break;
      }
      techUsed += `${data.technologies[i]}\n`;
  }

  let licenseSection = renderLicenseSection(data.license);

  return `# ${data.appName}

## Deployed Site Link
\`\`\`
${data.deployedLink}
\`\`\`

## Contributors
\`\`\`
${theTeam}
\`\`\`

## Technologies Used
\`\`\`
${techUsed}
\`\`\`

## Description and Setup
\`\`\`
${data.descriptionAndSetup}
\`\`\`

## Testing Performing
\`\`\`
${data.testing}
\`\`\`

${licenseSection}

## Questions
\`\`\`
Please contact me with any questions, comments, or concerns regarding this repo or if you would like to be a fellow contributor to this project!
GitHub: ${data.gitHubUserame} 
Email: ${data.email}
\`\`\` `;
}

module.exports = generateMarkdown;
