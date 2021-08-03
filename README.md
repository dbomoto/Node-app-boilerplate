# Node App Boilerplate

## <a name="tableofcontents">Table of contents</a>
1. [Development Process Tree](#section1)
2. [NPM Commands](#section2)
3. [Git Commands](#section3)
4. [Modules / Libraries](#section4)  
5. [Express Routes](#section5)
6. [Useful Functions](#section6)
7. [Definitions](#section7)
8. [Markdown Cheat Sheet](#section8)
9. [Replit](#section9)
10. [Requests Template](#section10)
***
### <a name="section1">Section 1 : Development Process Tree</a>
#### [Back to Table of Contents](#tableofcontents)
- Purpose of app *(everything depends on this)*
- Scope of app *(who will use it)*
- Database *(decide on what type of database paradigm to use (mongodb, sql, etc.) ; only if the app needs it ; should be one of the first things you design in your app ; depends heavily on what types of data you want to store)*
- Renderingg (decide whethere to render the html on the server side or on the client side)
- Server Design (decide which one to use depending on the app requirements, Node, Python, PHP)
- App Hosting *(replit, glitch, heroku, etc)* 
- Tests *(unit, functional, headless ; focus on the app fucntionality(use BDD, a better way of thinking but still a TDD)(make tests first before making the app, the app DEVELOPMENT should be DRIVEN, by what BEHAVIOUR the app makes when conditions/request/etc. are met.)
- UI/UX Design *(plan out how you want your users to interact with your app)*(basic design only during development, bare minimum inputs and outputs needed that matches with the test, reserve the eyecandy during refactoring)(TAILWIND CSS)
- Authentication *(Passport local and Oauth)*
- Code (focus on coding per feature, code the front and back end together, use  MVC architecture)
- Security *(sql injections, hacks, vulnerabilities, unintentional public API), verify user inputs on server side*
- User Stories *(simulated user exp)*
- User Review *(get it out ASAP)*
- Refactoring *(optimize your code)*

- Webchat *(only if the the app needs it)*
****
### <a name="section2">Section 2 : NPM Commands</a>
#### [Back to Table of Contents](#tableofcontents)
Most used commands so far
- `npm init y`  
  * initializes defaults to yes of package.json, usually used at the beginning of the project on initialization
- `npm i [library]`
  * installs your chosen library, without brackets
- `npm --save-dev [library]`
  * installs your chosen library, without brackets, to devDependencies of package.json
  * note, Replit seems to have an error on devDependencies declarations, but it is OK in VSCode.
- `npm install`
  * installs all the libraries indicated in the package.json
****
### <a name="section3">Section 3 : Git Commands</a>
#### [Back to Table of Contents](#tableofcontents)
Mose used commands so far
- `git`
  * shows help and instructions for each command
- `git status`
  * shows the whether the changed files are in the staging, commit, or push phase
- `git config`
  * show a list of configurations, but the most used is setting up the user.name and user.email for Replit contributions be credited on Github coding days. 
  * user.name "name" , exact name used on Github
  * user.email [email] , email without brackets
- `git config --global -list` / `git config --local -list`
  * shows a list of configurations on --global or --local 
- `git add --all` / `git add .`
   * adds all the changes to the staging area
- `git add [filename]`
  * adds the file, without brackets, to the staging area and ready for commit
- `git commit -m "message here"`
  * commits the changed and added files with a message
- `git push`
  * push your changes to the repository

Notes:
* Replit is an HTPPS so it will ALWAYS ask for your Github Username and Password via Git, SSH Keys won't work.
****
### <a name="section4">Section 4 : Modules / Libraries / Frameworks</a>
#### [Back to Table of Contents](#tableofcontents)
- dotenv
- express
- boydparser
- multer
- mongodb
- mongoose
- nodemon
- chai  (use replit tests instead?)
- chai-http (use replit tests instead?)
- zombie  
- mocha (use replit tests instead?)
- passport
- socket.io
- cors
- gridjs
- print-js
- tailwindcss
- postcss
- autoprefixer
****
### <a name="section5">Section 5 : Express routes</a>
#### [Back to Table of Contents](#tableofcontents)
****
### <a name="section6">Section 6 : Useful Functions</a>
#### [Back to Table of Contents](#tableofcontents)
****
### <a name="section7">Section 7 : Definitions</a>
#### [Back to Table of Contents](#tableofcontents)
- Fork 
> a copy of a repo ON GITHUB, relative to Github scope ( i.e. a copy of a PEN ON CODEPEN )
- Clone 
> a copy of a repo ON THE LOCAL MACHINE, relative to where the machine is ( i.e PC, HEROKU, REPLIT, GLITCH )
****
### <a name="section8">Section 8 : Markdown Cheat Sheet</a>
#### [Back to Table of Contents](#tableofcontents)
Headers
```
# h1
## h2
### h3
#### h4
##### h5
###### h6  

Header 1
========
Header 2
--------
```
Emphasis
```
*italic*
_italic_
**bold**
__bold__
`code`
```

Lists
```
* Item 1
* Item 2
- Item 1
- Item 2
- [ ] Checkbox off
- [x] Checkbox on
1. Item 1
2. Item 2
```

Code
```
    4 space indent
    makes a code block
    
[```]  w/o the brackets
code fences
[```] w/o the brackets

[```]js w/o the brackets
codeFences.withLanguage()
[```] w/o the brackets
```

Links
```
[link](http://google.com)
[link][google]
[google]: http://google.com
<http://google.com>
```
Images
```
![Image alt text](/path/to/img.jpg)
![Image alt text](/path/to/img.jpg "title")
![Image alt text][img]
[img]: http://foo.com/img.jpg
```
Tables
```
| Column 1 Heading | Column 2 Heading |
| ---------------- | ---------------- |
| Some content     | Other content    |
Column 1 Heading | Column 2 Heading
--- | ---
Some content | Other content
```
Blockquotes
```
> This is
> a blockquote
>
> > Nested
> > Blockquote
```
Horizontal Line
```
----
****
```

****
### <a name="section9">Section 9 : Replit</a>
#### [Back to Table of Contents](#tableofcontents)
- On using git in Replit, make sure to add, commit, and push on the same session so as to avoid errors. If you leave it for tommorrow, it gets confused.
- Another way to push contributions to Github from Replit, is to "add" and "commit" using the console or shell, then "push" using the Replit version control tool for Github. This skips those annoying errors of multiple branch detected where it does'nt even exist, and records your contribution. Just make sure to set your ```git config user.name``` and ```git config user.email``` according to your Github account.
****
### <a name="section10">Section 10 : Request Template</a>
#### [Back to Table of Contents](#tableofcontents)

##### TEMPLATE 1
```
FRONTEND CODE
  async function formRequest() {
    const form = new FormData(formID)
    const data = await fetch('/definedRoute',{
      method: 'POST',
      body: form
    })
    // process response from server
    const parsed = await data.json()
    // use 'parsed' to display client data on webpage; e.g.
    divID.innerHTML = `<p>${parsed.data}</p>`
  }

  // prevents the default action of the <form> tag and instead uses the function formRequest()
  submitSearch.onsubmit = (e) => {
    e.preventDefault();
    formRequest();
  }

SERVER CODE
  const multer = require('multer');
  // load multer on app
  let upload = multer();
  // for parsing multipart/form-data
  app.use(upload.array()); 
  
  //request can be accessed on the object below
  req.body

```  

## ERRORS ENCOUNTERED ANS SOLUTIONS
IDE: replit
Error: ENOENT: no such file or directory, open '/home/runner/MLOAccountingapp/index.js'
Solution: renamed "server.js" to "index.js"

