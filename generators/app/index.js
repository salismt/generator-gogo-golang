'use strict';
const path = require('path');
const Generator = require('yeoman-generator');
const mkdir = require('mkdirp');

module.exports = class extends Generator {
  paths() {
    this.destinationRoot(process.env.GOPATH || './');
  }

  prompting() {
    console.log('Welcome to GOGO Golang boilerplate generator')
  
    let cb = this.async();

    let prompts = [{
      type: 'input',
      name: 'appName',
      message: 'What is the name of your application?',
      default: 'myapp'
    }, {
      type: 'input',
      name: 'repoUrl',
      message: 'What is your URL repository ?',
      default: 'github.com/me'
    }];

    return this.prompt(prompts).then(props => {
      this.appName = props.appName.replace(/\s+/g, '-').toLowerCase();
      if (props.repoUrl.substr(-1) != '/') props.repoUrl += '/';
        this.repoUrl = props.repoUrl + this.appName;
        cb()
    });
  }

};
