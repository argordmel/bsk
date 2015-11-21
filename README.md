#BSK

Backbone - Starter Kit for Frontend

##Table of Contents
1. Folder Structure
2. Instalation

-----------------------------------

## 1. Folder Structure


> Folder structure options and naming conventions for software projects

    .
    ├── bower_components       # Bower Components
    │
    ├── build                  # Compiled files (alternatively `dist`)
    │   ├── css                # Css
    │   ├── fonts              # Fonts
    │   ├── img                # Images
    │   └── js                 # JavaScript
    │
    ├── docs                   # Documentation files (alternatively `doc`)
    │
    ├── gulp-tasks             # Gulp Task
    │   └── templates          # Templates
    │
    ├── src                    # Source files (alternatively `lib` or `app`)
    │   ├── fonts              # Fonts
    │   ├── img                # Images
    │   ├── js                 # Javascript
    │   ├── sass               # Sass
    │   └── templates          # Templates
    │
    ├── test                   # Automated tests (alternatively `spec` or `tests`)
    │   ├── benchmarks         # Load and stress tests
    │   ├── integration        # End-to-end, integration tests (alternatively `e2e`)
    │   └── unit               # Unit tests
    │
    ├── tools                  # Tools and utilities
    │
    ├── LICENSE
    ├── README.md
    ├── bower.json             # Bower file
    ├── config.js              # Config Gulp
    ├── config.rb              # Config Compass
    ├── gulpfile.js            # Gulpfile
    └── package.json           # Node modules


## 2. Instalation

Run the following commands:

1. `cd folder`

2. `sudo npm run install`

3. `bower install`

4. `gulp watch`

5. Navigate to: `http://localhost/yourproject/`


-------------------------------------


## 3. Build Process


### Livereload

If you want to have the latest version of the code in the browser, make sure to run this command:

`gulp watch`

This will be watching for changes in SASS files.


---------------------------------------


##License

MIT © [argordmel](https://twitter.com/argordmel)