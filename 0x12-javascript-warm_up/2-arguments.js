#!/usr/bin/node
const numOfArgument = process.argv.length;
if (numOfArgument <= 2) {
  console.log('No argument');
} else if (numOfArgument === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
