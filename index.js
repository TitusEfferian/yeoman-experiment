const yeoman = require('yeoman-environment');

const generator = require.resolve('./generator');

const env = yeoman.createEnv();

env.register(require.resolve(generator), 'codegen');
env.run('codegen some-nme');