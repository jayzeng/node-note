Socket.io
--------
Supports the following protocols:
- WebSocket
- Adobe Flash Socket
- AJAX long polling
- AJAX multipart streaming
- Forever Iframe
- JSONP Polling

When you use a WebSocket enabled browser (such as Google Chrome, FireFox, or Safari), it uses WebSocket whereas when your browser doesn't support WebSocket, it will try to use Flash Socket then long polling etc.

You can use Scoket.io to build all kinds of awesome real-time applications, such as chat app, irc client.

Demo
--------
Image fetcher (https://github.com/jayzeng/imagefetcher)

Unit test
--------
- npm install
- ./node_modules/jasmine-node/bin/jasmine-node .

More details can be found at: https://github.com/pivotal/jasmine/wiki
