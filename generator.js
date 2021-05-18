const Generator = require('yeoman-generator');
const path = require('path');

module.exports = class extends Generator {
    initializing() {
        this.props = {};
    }
    async prompting() {
        this.props = await this.prompt([{
            type: 'input',
            name: 'title',
            message: 'your project title',
        }])
    }
    writing() {
        this.fs.copyTpl(this.templatePath('index.html'), this.destinationPath('public/index.html'), this.props)
    }
    end() {
        this.log('end of lifecycle');
        this.log(this.props);
    }
}
