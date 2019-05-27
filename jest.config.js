module.exports = {
  verbose: true,
  roots: ['src'],
  moduleFileExtensions: ['js', 'json', 'html'],
  setupTestFrameworkScriptFile: './jest.init.js',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tpl\\.html?$': 'html-loader-jest',
  },
};
