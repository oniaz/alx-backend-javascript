console.log('Welcome to Holberton School, what is your name?');

// process.stdin.setEncoding('utsf8');
process.stdin.on('data', (input) => {
  process.stdout.write(`Your name is: ${input}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
