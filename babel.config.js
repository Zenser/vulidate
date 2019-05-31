module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: process.env.NODE_ENV === 'test' ? 'umd' : false
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ]
  ]
}
