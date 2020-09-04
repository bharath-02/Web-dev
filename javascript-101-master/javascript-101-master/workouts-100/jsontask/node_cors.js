//npm install node-fetch --save

const fetch = require('node-fetch');

var url_string2 =  "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com"


fetch(url_string2)
    .then(res => res.json())
    .then(json => console.log(json));