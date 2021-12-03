// write constants for questions that can vary

// Add license functions
// Add license badge
const generateLicense = licenseText => {
        if (!licenseText) {
            return '';
        }
        switch (licenseText) {
            case 'Unlicense':
                return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
            case 'MIT':
                return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            case 'GPLv2':
                return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
            case 'Apache':
                return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            case 'GPLv3':
                return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            case 'BSD 3-clause':
                return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            case 'BSD 2-clause':
                return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
            case 'GPLv3':
                return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            case 'AGPLv3':
                return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
            default:
                return '';
        };
    }
    // Add license link at license section
const generateLicenseDescription = licenseText => {
    if (!licenseText) {
        return '';
    }
    switch (licenseText) {
        case 'Unlicense':
            return '[Unlicense](http://unlicense.org/)';
        case 'MIT':
            return '[MIT](https://opensource.org/licenses/MIT)';
        case 'GPLv2':
            return '[GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
        case 'Apache':
            return '[Apache](https://opensource.org/licenses/Apache-2.0)';
        case 'GPLv3':
            return '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
        case 'BSD 3-clause':
            return '[BSD 3-clause](https://opensource.org/licenses/BSD-3-Clause)';
        case 'BSD 2-clause':
            return '[BSD 2-clause](https://opensource.org/licenses/BSD-2-Clause)';
        case 'GPLv3':
            return '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
        case 'AGPLv3':
            return '[AGPL v3](https://www.gnu.org/licenses/agpl-3.0)';
        default:
            return '';
    };
}

// create istallation section
const generateInstallation = installationText => {
    if (!installationText) {
        return 'No installation required.';
    }
    return `${installationText}`;
};
// create screenshots section
const generateScreenshots = screenshotsText => {
    if (!screenshotsText) {
        return '';
    }
    return `${screenshotsText}`;
};
// create contributing section
const generateContributing = contributingText => {
    if (!contributingText) {
        return 'No contributing allowed.';
    }
    return `${contributingText}`;
};
// create tests section
const generateTests = testsText => {
    if (!testsText) {
        return 'No tests available.';
    }
    return `${testsText}`;
};

module.exports = template => {
    // destructure page data by section
    const { installation, screenshots, credits, contributing, tests, ...header } = template;
    return `${generateLicense(header.license)}
# ${header.projectTitle}

## Description

${header.description} 


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${generateInstallation(installation)}


## Usage 

${header.usage}

<img src="./assets/images/${generateScreenshots(screenshots)}" alt="Screenshot"/>

## License

${generateLicenseDescription(header.license)}

---
## Contributing

${generateContributing(contributing)}

## Tests

${generateTests(tests)}

## Questions
If you have any questions, feel free to checkout my [Github page](https://github.com/${header.github}) or shoot me an [email](mailto:${header.email}).
`
}