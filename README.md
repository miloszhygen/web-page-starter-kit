This is a super easy starter kit for creating simple webpages with livereload. 


## Prerequisite 
You need node and npm installed. 
[Installing node](https://github.com/creationix/nvm)


## First time
`npm install && npm start`

## Starting the site 
`npm start`

## Build 
`npm run build -s`

## Running the build/dist
`npm run start:dist -s`

## Deploy
Heroku, Firebase etc...?


## Dependencies
- [usemin-cli](https://github.com/nelsyeung/usemin-cli)
- [clean-css-cli](https://github.com/jakubpawlowicz/clean-css-cli)
- [uglifyjs](https://www.npmjs.com/package/uglifyjs)
- [connect](https://github.com/senchalabs/connect)
- [livereload](https://github.com/napcs/node-livereload)
- [serve-static](https://github.com/expressjs/serve-static)

## Creating a new page
Remember to add the livereload script    

```
<!-- build:remove -->
<script src="helper/livereload.js"></script>
<!-- endbuild -->
```


## TODO
- improve the code further
