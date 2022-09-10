require('dotenv').config()
const Discojs = require('discojs')
const fs = require('fs');

const client = new Discojs.Discojs({
    userToken: process.env.USER_TOKEN,
})

const listingIDs = fs.readFileSync('/Users/bradculley/Documents/very-simple-cypress-seed/cypress/fixtures/listingIDs.json', {encoding:'utf8', flag:'r'});

listingIDs.trim()
    .split('\n')
    .map(releaseID => parseInt(releaseID))
    .forEach(releaseID => {
        // get single release
        client
            .getListing(releaseID)
            .then((results) => {
                console.log(results)
            });
    })
