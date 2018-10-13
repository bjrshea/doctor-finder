# Doctor Finder

#### Epicodus project, 10.12.18

#### By Brendan Shea

## Description

Need a doctor? Using the Doctor Finder, you can enter flu-like symptoms and be recommended a doctor in the Portland area using the BetterDoctor API.

## Specs

| Behavior | Input | Output |
|----------|-------|--------|
| User enters their symptoms and receives a match. | sore throat | Will receive the top result in the Portland area which includes the doctor's name, address, phone number, website (if applicable), and whether or not they're taking new patients. |
| User enters a doctor's name and receives a match. | John Smith | Will receive the top result in the Portland area which includes the doctor's name, address, phone number, website (if applicable), and whether or not they're taking new patients. |
| User searches using symptoms, doctor's name, or both, but they don't receive a match. | toothache | "We could not find a doctor with that search. Please try again." |
| User searches using symptoms, doctor's name, or both, but there's an error loading the API results. | sore throat | "It's not you, it's us. Please try your search again later." |

## Install Instructions

In your command line, do the following from desktop:

* `git clone https://github.com/bjrshea/doctor-finder.git`
* `npm install`
* `npm run build`
* `npm run start`

NOTE: You will also need to obtain an API key from the [BetterDoctor API](https://developer.betterdoctor.com/).

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## Links

* [BetterDoctor API](https://developer.betterdoctor.com/)
