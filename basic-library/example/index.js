const myLib = require('../dist');

(async function() {
  const input = 'Hello little panda!';
  console.log(input);
  console.log('Sleeping for 10 seconds');
  await myLib.sleep('10s');
  console.log(myLib.pandafy(input));
})().catch(console.error);
