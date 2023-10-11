function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
  } else if (license === 'GPL') {
    return ('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');
  } else if (license === 'Apache') {
    return ('[![License: Apache](https://img.shields.io/badge/License-Apache-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)');
  } else {
    return '';
  }
}
  
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return ('[Read the full MIT license](https://opensource.org/licenses/MIT)')
  } else if (license === 'GPL') {
    return ('[Read the full GPL v3 license](https://www.gnu.org/licenses/gpl-3.0)')
  } else if (license ==='Apache') {
    return ('[Read the full Apache license](https://www.apache.org/licenses/LICENSE-2.0)');
  } else {
    return ('No license provided')
  }
 }


module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
};
