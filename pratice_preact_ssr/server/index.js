const express = require('express');
const { h } = require('preact');
const path = require('path');
const renderToString = require('preact-render-to-string');
const { WDM } = require('./wdm');
const { App } = require('../src/app');

const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.use(WDM);

app.get('*', (req, res) => {
  const html = renderToString(<App url={req.url}/>)
  res.send(`
    <html>
      <body>
        <div id="root">${html}</div>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
  `)
})

app.listen(8900);