## Spread Operators and express middleware
#### an exploration of the new es6 spread operator and its possible applications in the node ecosystem
###### Presented by Ben Harding on 05/16/16 in the Seattle Code Fellows Advanced Javascript 401d7 class

* `simple_example` shows the spread operator in its most basic form, spreading the elements of an array and inserting them into a second array.
* `function_call` shows a slightly more useful use case by using the spread operator to spread the elements of an array and use them as arguments in a function call.
* `express_middleware` shows the possibilities of the spread operator when used in conjunction with express middleware when hitting a route.  It defines 10 pieces of auth middleware and 10 pieces of parse middleware, requires them into a single module per middleware type (authware and parseware respectively) containing an array of all 10 pieces.  It then requires those two middleware array modules into the main express server (server.js) and uses the spread operator to insert all twenty pieces of middleware into the route using only the arguments `...authware` and `...parseware`.  Badass.  The final server.js file comes out to a clean 12 lines despite requiring in 20 modules:
```
const express = require('express');
var app = express();

var authWare = require(__dirname + '/auth/authware');
var parseWare = require(__dirname + '/parse/parseware');

app.get('/auth', ...authWare, ...parseWare, (req, res) => {
  console.log('auth route hit');
  res.send('you did your auths and parses');
});

app.listen(5000, () => console.log('server up'));
```
* `lightning_talk.key` was the keynote presentation.  It is only two slides because the code itself was way more interesting.
* a note about node version: the spread operator isn't available prior to node version 5.  If you are using node version 4, you should be able to use it by throwing a `--harmony` flag in front of your node calls (eg. `node --harmony simple_example/example.js`).
