import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../src/app';
import wdm from './wdm'
import RenderHtml from './renderHtml';

const app = express();
const port = 3000;

app.use(wdm);

app.get('*', function (req, res, next) {

  let preloadState = {
    text: 'Server-Side Rendering'
  };

  let renderProps = {
    preloadState: `window.__PRELOADED_STATE__ =${JSON.stringify(preloadState).replace(/</g, '\\u003c')}`,
    script: '/build/client.bundle.js'
  };

  ReactDOMServer.renderToNodeStream(
    <RenderHtml {...renderProps}>
      <StaticRouter location={req.originalUrl} context={{}}>
        <App data={preloadState} />
      </StaticRouter>
    </RenderHtml>
  ).pipe(res);
});

app.listen(port, () => {
  console.log('http://localhost:3000')
});
