//Integrate with LogRocket

// you can import these packages anywhere
const LogRocket = require('logrocket');
const setupLogRocketReact = require('logrocket-react');
// HAHA;
// only initialize when in the browser
if (typeof window !== 'undefined') {
  LogRocket.init(`${process.env.NEXT_PUBLIC_LOGROCKET_APP_ID}`);

  // plugins should also only be initialized when in the browser
  setupLogRocketReact(LogRocket);
}

LogRocket.identify(`${process.env.NEXT_PUBLIC_LOGROCKET_USER_ID}`, {
  name: process.env.NEXT_PUBLIC_LOGROCKET_USER_NAME,
  email: process.env.NEXT_PUBLIC_LOGROCKET_USER_EMAIL,

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro',
});
