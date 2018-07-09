const NotifyClient = require('notifications-node-client').NotifyClient;
const notifyClient = new NotifyClient('');

notifyClient
    .sendEmail('', '', {
        personalisation: {
            'name': 'Guy'
        }

    })
    .then(response => console.log(response))
    .catch(err => console.error(err));
