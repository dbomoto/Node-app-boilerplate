# Boilerplate for Node App

## Table of contents
1.0 Development Process Tree
2.0 NPM Commands
3.0 Git Commands
4.0 Modules / Libraries  
5.0 Routes
6.0 Useful Functions
7.0 Useful Definitions

### 1.0 Development Process Tree (for arranging)
UI/UX Design
Purpose of app (everything depends on this)
Scope of app (who will use it)
Tests (unit, functional, headless, injections)
Code (it's ok to be dirty, clean it on refactoring)
User Stories (simulated user exp)
User Review (get it out ASAP)
Live Server (replit, glitch, heroku, etc)
Database (MongoDB & replit)
Authentication (Passport local and Oauth)
Webchat (if it matches with the purpose)


### 2.0 NPM Commands
Most used commands so far
npm init y  - initializes defaults to yes of package.json, usually used at the beginning of the project on initialization
npm i [library] - installs your chosen library, without brackets
npm --save-dev [library] - installs your chosen library, without brackets, to devDependencies of package.json
  - note, Replit seems to have an error on devDependencies declarations, but it is OK in VSCode.
npm install - installs all the libraries indicated in the package.json

### 3.0 Git Commands
Mose used commands so far
git - shows help and instructions for each command
git status - shows the whether the changed files are in the staging, commit, or push phase
git config - a lot of configuration, but the most used is setting up the user.name and user.email for Replit contributions be credited on Github coding days. 
  - user.name "Daniel Benedict L. Omoto" , exact name used on Github
  - user.email [email] , email without brackets
git config --global -list / git config --local -list - shows a list of configurations on --global or --local
git add --all / git add [filename] - adds the file, without brackets, to the staging area and ready for commit
git push - push your changes to the repository
  - Replit is an HTPPS so it will ALWAYS ask for your Github Username and Password, SSH Keys won't work.

### 7.0 Useful Definitions
Fork - a copy of a repo ON GITHUB, relative to Github scope ( i.e. a copy of a PEN ON CODEPEN )
Clone - a copy of a repo ON THE LOCAL MACHINE, relative to where the machine is ( i.e PC, HEROKU, REPLIT, GLITCH )
  
