# [myles.github.io](http://myles.github.io)

[![Build Status](https://travis-ci.org/myles/myles.github.io.svg?branch=develop)](https://travis-ci.org/myles/myles.github.io)

This is the source code for [my GitHub Page](http://myles.github.io/ "Myles Braithwaite GitHub Page") and for [my archive organizations GitHub Page](http://myles.github.io/archive/ "Myles Braithwaite's GitHub Archive").

![Screenshot of Myles Braithwaite's GitHub Page](screenshot.jpg)

## Usage

**Build** the web site:

	$ grunt build

Build the web site and **run** a web server:

	$ grunt run

**Deploy** the web site to GitHub Pages:

	$ grunt deploy

## Develop

You will need to install the *Ruby*, *Node.js*, and *Bower* libraries:

	$ gem install sass
	$ npm install
	$ bower install

## Testing Workflow

1. Build the web site
2. Test the HTML output with `htmlproof`.
3. If *1* and *2* success it will deploy to GitHub Pages. 
