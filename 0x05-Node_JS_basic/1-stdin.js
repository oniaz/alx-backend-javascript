console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utsf8');
process.stdin.on('data', (input) => {
  const trimmedInput = input.trim();
  console.log(`Your name is: ${trimmedInput}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
