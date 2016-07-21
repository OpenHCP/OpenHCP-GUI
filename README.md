# OpenHCP WebGUI
==================

## Debug your app ##

The full featured `dev/dist` tools are provided, it's easy to start debugging your app.

Run `npm start` to start a debug web server for the project.

Open [http://localhost:8080/](http://localhost:8080/) to see the playable skeleton, and have fun.


## Release your app ##

> Release means, generate output bundles by using `webpack`. It's good using the released resources as your production code.

Move the root of the created project.

Run `npm run dist` to compile all the source code into webpack bundles. And all required resources are generated into `{root}/build/`.

You can copy the `build` folder to anywhere you like, it's the released app.

### Like have a try with the released app? ###

Install [sero-cli](https://github.com/leftstick/Sero-cli): `npm install -g sero-cli`

Move into `{root}/build/`

Run `sero server -p 8080 -h`, a static web server launched at port 8080.

Open [http://localhost:8080](http://localhost:8080) to watch the released version


## References ##

1. [webpack](http://webpack.github.io/)
2. [es6-features](https://github.com/lukehoban/es6features)
3. [react](http://facebook.github.io/react/)
4. [material-ui](http://material-ui.com)


## LICENSE ##

ISC License

Copyright (c) 2016 by Aleksander Cynarski <aleksander@cynarski.pl>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
