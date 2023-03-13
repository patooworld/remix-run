import isbot from 'isbot';
import { renderToReadableStream } from 'react-dom/server';

export async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixServer: JSX.Element
) {
  let body = await renderToReadableStream(remixServer, {
    signal: request.signal,
    onError(error) {
      console.error(error);
      responseStatusCode = 500;
    },
  });

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
