
# vmware-ui-task
Simple angular UI for login and logout functionalities

## Pre-requisites
- node 14.6.0, npm 6.14.11
- Angular 11

## Install Dependencies
After project checkout, run `npm install`

## Running the app
Run `ng serve` to start the application. Navigate to `http://localhost:4200/`.

## Pages

### Login page
##### `http://localhost:4200/login`  
 - User should enter an email id and password of minimun 6 characters to login.
 - To mock user authentication, a dummy user with email `user@test.com` has been hardcoded in the services for validation. Password can be anything of 6 characters. If we enter any other email id, application displays an error message.
 - If the user is already logged in, we will be navigated to home page directly.
 
### Home page
##### `http://localhost:4200/home`
 - Displayed after successful login. Contains a logout button after clicking on which the user is navigated back to login page.

