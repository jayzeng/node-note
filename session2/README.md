What is Node.js?
--------
Official definition: Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. From nodejs.org

What makes Node unique?
- JavaScript has historically been used by front-end developers, Node provides a platform for develoeprs with JavaScript experience to develop a full-stack application in JavaScript
- Node's evented model for processing incoming HTTP requests offers an awesome alternative to the traditional thread-per-request models, it offers sizeable performance advantage when it comes to
service large number of concurrent requests.
- Node.js features non-blocking I/O, leverages common JavaScript models such as events, callbacks. What's more, Node.js inherits all language features from JavaScript (functions, closures etc), there is no thread manage, no synchronization mechanisms, which eliminates lots of pitfalls for developers.

Node.js
- It is not a cross platform language, it only works on V8.

```javascript
    // no such function
    alert('oops');

    // these objects don't exist
    window
    document
    document.cookie

    // no dom elements, no native events, no http request object
```

Common Modules
- http
- https
- fs

See http://nodejs.org/api/ for a list of core modules

```javascript
var http = require('http');
var port = process.env.PORT || 8000;

http.createServer( function( req, res ) {
    res.writeEnd( 200, {'content-type' : 'text/plain'} );
    res.end( 'hello world' );
)).listen( port );
```

Package management
---------
node.js provides an awesome package management tool named npm (node package manager) (npm link ). o

Common npm commands
- npm search package
- npm view package
- npm install package
- npm install -g package (install module globally)

There are multiple ways to install modules with npm

Install through package.json
---------
Installing through package.json is a far better way to manage dependencies, this file describes required dependencies and information about
this application. You may also specify different dependencies for development and production.  When you run npm install, npm will automsatically
fetches and installs all the specified dependencies inside a folder named node_modules.

```json
{
  "name": "unit test demo",
  "description": "demo code to illustrate how to unit test",
  "version": "0.0.1",
  "dependencies": {
    "jasmine-node" : "1.0.26"
  },
  "private": "true"
}
```

Below is a link about package specification:
http://wiki.commonjs.org/wiki/Packages/1.0#Package_Descriptor_File

Finding module
---------
Browse http://search.npmjs.org/ or use `npm search`. Please note that node has a set of core modules such as http, fs (file system) that are available by default.
Once you know the module name, you may do npm view package to list out detailed information aobut the module.

```
npm view socket.io
```

Once you have the modules installed, you may list out the module structures with:
```
npm ls
```
