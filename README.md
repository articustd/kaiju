# Bigger Better Kaiju
Bigger Better Kaiju (B2K) is an 18+ furry Twine RPG
## ⚠️ WARNING ⚠️
This repo contains adult and furry content. Proceeding into this repo you are confirming you are the appropriate age to be consuming this content. All characters in this work of fiction are 18+

## FOR DEVELOPMENT
Go through the normal Install steps down below. In addition to that though it is highly advisable to globally install gulp.

### Normal Development Cycle
With Gulp installed globally you can run `gulp` in the root `kaiju` folder to start the game locally with all development features turned on.

## Running
### Prerequisites
Bigger Better Kaiju supports Windows, Linux, and MacOS. To build, you will need the following tools:
- NodeJS

It is recommended to also have the following installed to make development smoother:
- Visual Studio Code

### Installing
To install all required dependencies for this project, run the following in the root project folder: `npm install`

### Configuration
For extra development tools: `npm run config:dev`

For production: `npm run config:prod`

### Build
To build an HTML file run: `npm run build`
HTML file will be output to the `dist` folder and can be run in place.

For development hot reloading tools: `npm run watch:dev`
This will watch the `src` and `story` folders for changes along with opening your default browser to the compiled HTML. When changes are made, the opened browser will reload with the changes made.