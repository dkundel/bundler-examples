import ms from 'ms';

function pandafy(input) {
  return input.replace(/\bpanda\b/gi, '🐼');
}
function sleep(time) {
  const timeInMilliseconds = ms(time);
  return new Promise(resolve => {
    setTimeout(resolve, timeInMilliseconds);
  });
}

export { pandafy, sleep };
