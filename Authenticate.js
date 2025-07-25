const StellarSdk = require('stellar-sdk');
const Authentication = require('./SEP10');

let accountSecret = 'SECRET-KEY'; // Replace with your account secret key
let account = StellarSdk.Keypair.fromSecret(accountSecret);

Authentication.challenge(account)
.then((signed) => {
    console.log('signed: ' + signed);

    Authentication.token(signed)
    .then((token) => {
        console.log('token: ' + token);
    })
});

