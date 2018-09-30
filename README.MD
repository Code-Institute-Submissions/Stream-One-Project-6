# Stream One Project

This is my final project for Code Institute Stream One. The Example page can be found here: https://andreweliyah.github.io/Stream-One-Project/

**Please note the Monkees are not affiliated with this site and the prices and dates and event are all made up. The band bio is from the [Wikipedia page](https://en.wikipedia.org/wiki/The_Monkees) and all info on the this page is used for demo/Grading purposes and are not real. Its just a course project. Thank you and have a nice day.**

## Summery
This application is to demonstrate my learned skills of front end development. It is the website for a band called the Monkees. It has a gig booking form as well as a music player is built using angularJS and basic HTML, CSS, and JavaScript, along with jQuery. The music player was built with Javascript functions. The booking form and its validations are powered by Javascript and AngularJs.

## Technologies
- HTML
- CSS/Sass
- Javascript
- Jquery
- AngularJS
- DateTime Picker
- Gulp
- Bootstrap 3

## Installation
``` 
$ git clone 'https://github.com/andreweliyah/Stream-One-Project.git'

$ cd Stream-One-Project

$ npm install

$ sudo npm install -g gulp

// if you need a server to run your code on while editing.
$ sudo npm install http-server -g 
```
## Build
**For production build:**
```
$ gulp build

// to see the code in action run:
$ http-server <path-to-build-folder>

// if you need to specify a port add -p <port> to the end i.e.
'$ http-server ./build/ -p 8081'
```

**For dev build:**
```
$ gulp dev-build // for manual dev building or
$ gulp watch // for automatic dev building on file changes to the src folder
// You may have to do the manual build first then run the watch command.
// That way you can have the folder ready for the next command.

// to see the code in action run:
$ http-server <path-to-build-folder>

// if you need to specify a port add -p <port> to the end i.e.
'$ http-server ./dev-build/ -p 8081'
```
## Testing
Jasmine is used for testing this app. It is the standalone version so tests are run in the file: **"SpecRunner.html"** at the root of the project and the spec file is located at **test/spec/appSpec.js**.

To run the tests edit the **appSpec.js** file and run the **specRunner.html**.
