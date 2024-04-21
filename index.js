const Xray = require('x-ray');
const x = Xray();

// For taking URL as input from the command line arguments
const url = process.argv[2];

// For Checking if URL is provided
if (!url) {
    console.log("Please provide a URL as input.");
    process.exit(1);
}

// scraping logic
x(url, 'a', [{
    href: '@href'
}])(function(err, links) {
    if (err) {
        console.error("Error occurred while scraping:", err);
        return;
    }

    // For output the links in JSON format
    console.log(JSON.stringify(links, null, 2));
});