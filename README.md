# PTTG-RPS-Enquiry-Form

IMPORTANT: Automated tests do not currently run in CI, any changes require manual regression testing. See related Jira tickets for details.

## Overview

This is the RPS Enquiry Form. This allows current and potential users of the residency proving service to ask questions about either a future application or a current application.

## Find Us

- https://github.com/UKHomeOffice/pttg-rps-enquiry-form

## Contributors

- https://github.com/UKHomeOffice/pttg-rps-enquiry-form/graphs/contributors

## Running locally

The RPS enquiry form is built using the HOF (Home Office Forms) template.

Follow these instructions to run the service on your local machine.

- The application requires a data store. Install Redis. (Not required if using Docker).
  **https://redis.io/download**

## Clone the repository

`git clone git@github.com:UKHomeOffice/pttg-rps-enquiry-form.git`

- This now pulls down all the neccessary files from the repository to your machine
- We now need to install the packages and dependencies the service needs to run locally on your machine. To do this enter the following command

`user$ npm install`

- You should now be able to run the service locally with the following command

`user$ npm run start:dev`

- You should receive a console output highlighting a successful build
- Open up a web browser and enter the following URL in the address bar
  **http://localhost:8080/pttg-rps-enquiry-form**

## Using Docker

The application contains a docker-compose file and can be alternatively run through Docker using the following command:

`docker-compose up`

The built images are stored at https://quay.io/repository/ukhomeofficedigital/pttg-rps-enquiry?tab=tags

## Whitelist

The application is behind a whitelist in both the test and dev environments. Detailed in the drone.yml

## Deployment

https://drone-gh.acp.homeoffice.gov.uk/UKHomeOffice/pttg-rps-enquiry-form

### Maintenance mode

Prerequisite: ACP prod VPN and kube context.

The UI can be made available in a "maintenance mode". This tells users that the service is offline and gives alternative comms methods. The version of the app is controlled by Ingress.

- To switch to maintenance mode (and back), you will need to clone the companion kube project:

`git@github.com:UKHomeOffice/kube-pttg-rps-enquiry-form.git`

- Make sure you have set your Kube context to the ACP kube prod config (cluster=acp-prod, namespace=pttg-rps-enquiry-pr)

- Then run the script

`./maintenance-on` to set the service in "Maintenance Mode", or
`./maintenance-off` to set the service in "Regular Mode"

## Testing

The automated acceptance tests were using a library that is no longer maintained and full of vulnerabilities https://www.npmjs.com/package/so-acceptance. The tests were also failing in CI so this library has been removed and due to the low churn and simplicity of this app manual regression testing is a reasonable option going forward. Test files left in place for reference.
