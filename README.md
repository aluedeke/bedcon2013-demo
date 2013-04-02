bedcon2013-demo
===============

## project setup with angular & yeoman on ubuntu

### ruby and compass installation

    sudo apt-get install ruby-full
    sudo apt-get install rubygems1.8
    sudo gem install compass

### node.js installation

    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

### yeoman installation

    sudo npm install -g yo grunt-cli bower
    npm install generator-angular generator-karma

### project setup

    yo angular
    npm install && bower install --dev

### bootstrap & font awesome integration

    bower install bootstrap-sass font-awesome dropbox angular-ui-router --save

replace in main.scss the @import statement with:

    @import '../components/bootstrap-sass/lib/bootstrap.scss';
    $fontAwesomePath : '../components/font-awesome/font' !default;
    @import '../components/font-awesome/sass/font-awesome.scss';

### compile dropbox

    cd app/components/dropbox
    npm install
    npm pack


### development and tests
    grunt test
    grunt server
    grunt






