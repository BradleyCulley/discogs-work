require('dotenv').config()
const Discojs = require('discojs')

const client = new Discojs.Discojs({
    userToken: process.env.USER_TOKEN,
})

// search among releases
client
    .searchRelease('Damon Albarn - Everyday Robots', {
        releaseTitle: 'Damon Albarn - Everyday Robots'
    })
    .then(({results}) => {
        console.log(results)
    });

// search among releases
client
    .searchDatabase({
        query: 'Damon Albarn - Everyday Robots',
        type: "release"
    })
    .then(({results}) => {
        console.log(results)
    });

// get single release
client
    .getRelease(5636870)
    .then((results) => {
        console.log(results)
    });
