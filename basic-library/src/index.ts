import ms from 'ms';

export function pandafy(input: string): string {
  return input.replace(/\bpanda\b/gi, '🐼');
}

export function sleep(time: string): Promise<void> {
  const timeInMilliseconds = ms(time);
  return new Promise(resolve => {
    setTimeout(resolve, timeInMilliseconds);
  });
}
