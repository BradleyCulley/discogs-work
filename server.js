require('dotenv').config()
const Discojs = require('discojs')

const client = new Discojs.Discojs({
    userToken: process.env.USER_TOKEN,
})

client
    .searchRelease('Damon Albarn - Everyday Robots', {
        releaseTitle: 'Damon Albarn - Everyday Robots'
    })
    .then(({results}) => {
        console.log(results)
    });

