module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'false',
      externals: {
        react: 'React'
      }
    }
  }
}
