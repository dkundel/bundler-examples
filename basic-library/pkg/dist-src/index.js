import ms from 'ms';
export function pandafy(input) {
    return input.replace(/\bpanda\b/gi, '🐼');
}
export function sleep(time) {
    const timeInMilliseconds = ms(time);
    return new Promise(resolve => {
        setTimeout(resolve, timeInMilliseconds);
    });
}
