# node_alpha
Initial learning node js

### What is node?
- Node js or node is an open-source, cross-platform runtime environment for executing Javascript code outside browser.

### Advantages of node as of 2019
- Build twice as fast with fewer people
- 33% fewer lines of code
- 40% fewer files
- 2x requests for second
- 35% faster response time

### Node Architecture 
- Prior to node javascript were run in browser which do not have access to file system or to make any server calls
- Browers uses javascript engines to convert code to machine readable code
    - Internet explorer and edge have Chakra
    - Firefox have spidermonkey
    - google chrome have V8 (Fastest javascript engine atpresent)
- Ryan Dhal took V8 engine and embedded it in a c++ program we call it node now.
- Node enables java script to access file systems and make server calls etc 
- The base object for javascript in a browser is window or document
- The base object in node is global
- Node applications are asynchronous by default, a single thread is used to monitor event queue which will have details of all
  requests. If data is ready for a request it will be available in event queue, node monitors eventqueue and processes the request.
- Use Node for I/O intense applications like data transfering and network.
- Do not use node for CPU intense operations.

### Creating first app
- Create a function to console log a text and invokeit see file initial app
- log window and global objects to see if they work.

### Global object
- In node there are many objects available from global object they are explained in app.js file
- User defined variables are not derived from global object.
- Javascript's global object is window. Every other object is derived from window. consider the time related functions setTimeout(), clearTimeout(), setInterval(), clearInterval(). these can be invoked as
 window.setTimeout().
- when we define a user defined variable like var message the same can be used as window.message, as javascript scope is window.
- But the same message variable will not be attached to global because node is split into modules and have different scope. If we try to console.log global.message it will return undefined.
