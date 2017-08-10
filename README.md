# errors

[![npm version](https://img.shields.io/npm/v/@rheactorjs/errors.svg)](https://www.npmjs.com/package/@rheactorjs/errors)
[![Build Status](https://travis-ci.org/RHeactorJS/errors.svg?branch=master)](https://travis-ci.org/RHeactorJS/errors)
[![Greenkeeper badge](https://badges.greenkeeper.io/RHeactorJS/errors.svg)](https://greenkeeper.io/) 
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![semantic-release](https://img.shields.io/badge/semver-semantic%20release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Test Coverage](https://codeclimate.com/github/RHeactorJS/errors/badges/coverage.svg)](https://codeclimate.com/github/RHeactorJS/errors/coverage)
[![Code Climate](https://codeclimate.com/github/RHeactorJS/errors/badges/gpa.svg)](https://codeclimate.com/github/RHeactorJS/errors)

A collection of errors

Note that Babel [does not support extending builtin classes](https://github.com/babel/babel/commit/3878bd812c73bdd18b1011be59515dad985940fd), so we use [this way](http://stackoverflow.com/a/35858868) to create the error objects:
  
```javascript
class MyError {
  constructor(message) {
    this.name = MyError.name
    this.message = message
    this.stack = (new Error(message)).stack
  }
}
MyError.prototype = Object.create(Error.prototype)
```
