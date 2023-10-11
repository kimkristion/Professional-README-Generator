// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)')
  } else if (license === 'GPL') {
    return ('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0')
  } 
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license = 'MIT License') {
    return ('[Read the full MIT license](https://opensource.org/licenses/MIT')
  } else if (license === 'GPL') {
    return ('[Read the full GPL v3 license](https://www.gnu.org/licenses/gpl-3.0)')
  } else if (license ==='Apache') {

  }
  return '';
 }


module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
};
