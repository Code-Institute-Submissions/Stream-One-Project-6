# Stream One Project

This is my final project for Code Institute Stream One.

## Installation
``` 
$ git clone https://github.com/andreweliyah/Stream-One-Project.git

$ cd Stream-One-Project

$ npm install

$ npm install -g gulp //May require admin privileges.
```
## Build
**For production build:**
```
$ gulp build
```

**For dev build:**
```
$ gulp dev-build
```
## Testing
Jasmine is used for testing this app. It is the standalone version so tests are run in the file: **"SpecRunner.html"** at the root of the project and the spec file is located at **test/spec/appSpec.js**.

To run the tests edit the **appSpec.js** file and run the **specRunner.html**.