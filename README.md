
![Image description](https://i.ibb.co/5WfpMPg/5.png)

# Mediapark unsplash task

## Requirements

For development, you will only need Node.js 

### Node

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21 

## Install

    $ git clone https://github.com/Saltibarsciai/unsplash-react.git
    $ cd unsplash-react
    $ npm install

## Start & watch

    $ npm start

## Simple build for production

    $ npm run build
    
## Run tests

    $ npm run test
    
## Requirements for Project

Create a web application with ReactJS, web application should:

Be one-page web application

Have a clear, comprehensible and responsive layout

Implement unsplash.com image retrieval API

User should be able to search images by entered keywords

**Image app functionality:**

Web application should provide user with keyword (search) input field

When keyword is entered user should be able to press search button to retrieve the images

When images are returned app should parse API response and display images in the grid below the search input field

Application should show some sort of progress (loading) indicator while images are being fetched

If there are no images by entered keyword user should see message with relevant information (it could be modal popup or text element in empty image grid)

**Bonus tasks:**

Allow user to query images by more than one keyword

Host your application in GitHub Pages

Use SASS/SCSS to upstyle your web application

Write tests for chosen ReactJS component

Allow user to save it’s query in Redux state and list saved queries, so that when pressed that query is repeated again and user gets pictures by saved query

**Project requisites:**

Project source code should be stored in GitHub, bitbucket or any other version control platform

Project should have a comprehensible README file

Project directory should be logically structured

Source code should be clean and formatted accordingly

Extensive comments in source code are not desirable, source code should be self explanatory

Please follow API guidelines here

**(Violated 1.4 rule  "protect access key", I didn't want to create server in order to protect access token.
Violated 2.3 rule "Don't replicate the core user experience")**