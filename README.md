# PTTG-RPS-Enquiry-Form

## Overview
This is the RPS Enquiry Form. This allows current and potential users of the residency proving service to ask questions about either a future application or a current application.

## Find Us
* https://github.com/UKHomeOffice/pttg-rps-enquiry-form

## Contributors
* https://github.com/UKHomeOffice/pttg-rps-enquiry-form/graphs/contributors

## Running locally
The RPS enquiry form is built using the HOF (Home Office Forms) template.
Follow these instructions to run the service on your local machine.
**A Github account and an IDE (Integrated development environment) are pre-requisites.**
* Create a folder on your machine in which you would like the RPS enquiry form to live
* Using your IDE of choice navigate to this folder within your integrated terminal
for example

```user$ cd ./documents/folder-of-choice```

* Visit the github repository here https://github.com/UKHomeOffice/pttg-rps-enquiry-form
* To the right of the page click the green 'Clone or download' button 
* Copy the clone link and return to your IDE
* Type the following command into your IDE's integrated terminal and press enter

```user$ git clone [paste clone link here]```

* This now pulls down all the neccessary files from the repository to your machine
* We now need to install the packages and dependencies the service needs to run locally on your machine. To do this enter the following command

```user$ npm install```

* You should now be able to run the service locally with the following command

```user$ npm run start:dev```

* You should receive a console output highlighting a successful build
* Open up a web browser and enter the following URL in the address bar
**http://localhost:8080/pttg-rps-enquiry-form**