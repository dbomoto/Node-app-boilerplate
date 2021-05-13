# Node App Boilerplate

## <a name="tableofcontents">Table of contents</a>
1. [Development Process Tree](#section1)
2. [NPM Commands](#section2)
3. [Git Commands](#section3)
4. Modules / Libraries  
5. Routes
6. Useful Functions
7. Useful Definitions
8. [Markdown Cheat Sheet](#section8)
***
### <a name="section1">Section 1 : Development Process Tree</a>
#### [Back to Table of Contents](#tableofcontents)
- Purpose of app *(everything depends on this)*
- Scope of app *(who will use it)*
- User Stories *(simulated user exp)*
- Deployment *(replit, glitch, heroku, etc)*
- UI/UX Design *(plan out how you want your users to interact with your app)*
- Code *(it's ok to be dirty, clean it on refactoring)*
- Database *(MongoDB & replit ; only if the app needs it)*
- Tests *(unit, functional, headless ; focus on the app fucntionality)*
- Authentication *(Passport local and Oauth)*
- Webchat *(only if the the app needs it)*
- Security *(sql injections, hacks, vulnerabilities, unintentional public API)*
- User Review *(get it out ASAP)*
- Refactoring *(optimize your code)*
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
- `git push`
  * push your changes to the repository

Notes:
* Replit is an HTPPS so it will ALWAYS ask for your Github Username and Password via Git, SSH Keys won't work.
****
### Section 7 : Useful Definitions
#### [Back to Table of Contents](#tableofcontents)
Fork - a copy of a repo ON GITHUB, relative to Github scope ( i.e. a copy of a PEN ON CODEPEN )
Clone - a copy of a repo ON THE LOCAL MACHINE, relative to where the machine is ( i.e PC, HEROKU, REPLIT, GLITCH )
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
