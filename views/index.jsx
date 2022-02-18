const React = require('react')

function Default(html) {
  return (
    <html>
    <head>
      <title>Default</title>
    </head>
    <body>
      <h1>HTML Rendered!</h1>
      <div className="container">
        {html.children}
      </div>
    </body>
    </html>
  )
}

module.exports = Default

const React = require('react')
const Default = require('./layouts/Default')

function Index () {
    return (
      <Default>
        <h2>Index Page</h2>
      </Default>
    )
}

module.exports = Index