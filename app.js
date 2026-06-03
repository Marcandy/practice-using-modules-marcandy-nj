import yargs from 'yargs';
import chalk from 'chalk';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).parse();

const city = argv.city;

const weather = {
    "NewYork": "Cloudy 70F",
    "Chicago": "Sunny 80F"
}

if(weather[city]) {
    console.log(chalk.green(city));
    console.log(chalk.blue(weather[city]))
} else {
    console.log(chalk.red('Invalid city name'))
}

/*
gitIgnore allow us to not push our node_modules online to github, 
preventing us from committing a lot of uneeded code and data that would 
make code review difficult.
When someone clone our they can easily install the necessary modules
because of the package.json which keep track of all our depencies.
*/