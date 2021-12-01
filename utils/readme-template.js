// write constants for questions that can vary 
// create istallation section
const generateInstallation = installationText => {
    if (!installationText) {
        return '';
    }
    return `## Installation
${installationText}
      `;
};
// create screenshots section
const generateScreenshots = screenshotsText => {
    if (!screenshotsText) {
        return '';
    }
    return `${screenshotsText}`;
};
// create credits section
const generateCredits = creditsText => {
    if (!creditsText) {
        return '';
    }
    return `## Credits
${creditsText}
      `;
};
// create contributing section
const generateContributing = contributingText => {
    if (!contributingText) {
        return '';
    }
    return `## Contributing
${contributingText}
      `;
};
// create tests section
const generateTests = testsText => {
    if (!testsText) {
        return '';
    }
    return ` ## Tests
${testsText}
      `;
};

module.exports = template => {
    // destructure page data by section
    const { installation, screenshots, credits, contributing, tests, ...header } = template;
    return `# ${header.projectTitle}

## Description

${header.description} 


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

${generateInstallation(installation)}


## Usage 

${header.usage}
![screenshot](./assets/images/${generateScreenshots(screenshots)})


${generateCredits(credits)}

## License

${header.license}

---

${generateContributing(contributing)}

${generateTests(tests)}

## Questions
If you have any questions, feel free to checkout my [Github page](https://github.com/${header.github}) or shoot me an [email](mailto:${header.email}).
`
}