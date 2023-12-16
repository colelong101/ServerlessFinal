# Project Overview
This is my submission for my Serverless Cloud class at WSU Tech. The project is meant to display the ability to write simple serverless functions. For this, I chose to apply this
creating a simple login page directs to a mock real estate portal with property information, and a Lambda function to view listing clicks for marketing engagement.

The page loads in with a simple login page, that references the auth folders "loginAuth.js", a Lambda function that simply checks the entered data for matching DynamoDB
user data. If that matches, then you are granted admin privileges to the portal.

The "portal" in this instance is an interface that displays property information, with a Lambda function that fetches website views for that listing. The outline is there, but ideally
there would be multiple properties being fetched upon load, all displaying.

# Instructions
- Using Live Server, or File Explorer, you can open the index.html file to view the UI
- The login page is being handled with scoped JS to provide the feeling of logging in so that you can view the Real Estate listing.
- Enjoy and test! This is a project I will be contributing to, to continue getting to actually work in better with AWS. Right now only the View Count Lambda function works.

# Future Tasks
- Deploy environment to a Docker container for easier collaboration and peer work
