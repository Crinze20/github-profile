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

let request = https.request(option, (result) => {
    console.Slog('Got Responese: ', result.statusCode);
})

request.end();

request.on('error', (e) => {
    console.error(e);
})