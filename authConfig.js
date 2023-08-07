/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const msal = require('@azure/msal-node');
const fs = require("fs");

// const REDIRECT_URI = "http://poc-app-test01.azurewebsites.net/auth/redirect";
// const POST_LOGOUT_REDIRECT_URI = "http://poc-app-test01.azurewebsites.net";
const REDIRECT_URI = "http://poc-app-test01.azurewebsites.net/auth/redirect";
const POST_LOGOUT_REDIRECT_URI = "http://poc-app-test01.azurewebsites.net;
const GRAPH_ME_ENDPOINT = "https://graph.microsoft.com/v1.0/me";

const SESSION_COOKIE_NAME = "msid.sample.session";
const STATE_COOKIE_NAME = "msid.sample.state";

const msalConfig = {
    auth: {
        clientId: 'ce91bb48-aed2-44a6-8f5d-7ea4cadba53c',
        authority: 'https://login.microsoftonline.com/PwCallianceSandbox.onmicrosoft.com',
        clientSecret: 'rub8Q~4PV26kM~pcZNU40rW5A4RLROdCzCV_FcP2',
        // clientCertificate: {
        //     thumbprint: 'YOUR_CERT_THUMBPRINT', // replace with thumbprint obtained during step 2 above
        //     privateKey: fs.readFileSync('PATH_TO_YOUR_PRIVATE_KEY_FILE'), // e.g. c:/Users/diego/Desktop/example.key
        // },
        clientCapabilities: ['CP1'], // this let's the resource know this client is capable of handling claims challenges
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                // console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Verbose,
        },
    },
};

module.exports = {
    msalConfig,
    REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI,
    GRAPH_ME_ENDPOINT,
    SESSION_COOKIE_NAME,
    STATE_COOKIE_NAME,
};
