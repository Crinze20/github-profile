/* Port http itu = 80
sedangkan https = 443 */ 

/* GET : Kita minta data dari server
   POST : Kita ngirim data
*/



let https = require('https');

const option = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/yofri',
    method: 'GET',
    headers: { 
        'user-agent': 'nodejs'
    }
}

let request = https.request(option, (response) => {
    let body = ''
    response.on('data', (data) => {
       body = body + data;
    })

    response.on('end',  () => {
        console.log(body)
        console.log(typeof  body)
    })
})

request.end();

request.on('error', (e) => {
    console.error(e);
})