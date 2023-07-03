# Custom logger, handle Server and http errors

Adding a custom logger, Handling uncaughtException, unhandledRejection errors, SIGTERM, and handle http errors.

## Objectives

- Adding a custom logger to use instead of using the boring console.log to help us read the console better and seperate errors from infos.

- Handle Server closing when facing uncaughtException, unhandledRejection errors.

- Close server gracefully on SIGTERM signal.

- Handle http errors and get proper error messages from server.

## Packages we will use

**Winston:** <br/>[![Winston](https://img.shields.io/npm/v/winston.svg?logo=winston)](https://www.npmjs.com/package/winston)

---

# Let's add few middlwares

Let's setup cross-env and add some middlwares (Functionality, Security and Speed).

## Objectives

- Run scripts that set and use environment variables across platforms with cross-env.

- Adding Morgan middleware as an HTTP request logger middleware for node js.

- Add Helmet middleware, Helmet helps you secure your Express apps by setting various HTTP headers.

- Adding Express json and urlencoded middleware to parse json request from body and url.

- Adding Express-mongo-sanitize middleware which sanitizes user-supplied data to prevent MongoDB Operator Injection.

- Adding Cookie-parser middleware to parse Cookie header and populate req.cookies with an object keyed by the cookie names.

- Adding Compression middleware to compress response bodies for all request that traverse through the middleware.

- Adding Express-fileupload middleware to make uploaded files accessible from req.files.

- Adding cors middleware to protect and restrict access to the server.

## Packages we will use

**Cross-env:** <br/>[![Cross-env](https://img.shields.io/npm/v/cross-env.svg?logo=cross-env)](https://www.npmjs.com/package/cross-env)
<br/>
**Moragn:** <br/>[![Morgan](https://img.shields.io/npm/v/morgan.svg?logo=morgan)](https://www.npmjs.com/package/morgan)
<br/>
**Helmet:** <br/>[![Helmet](https://img.shields.io/npm/v/helmet.svg?logo=helmet)](https://www.npmjs.com/package/helmet)
<br/>
**Express mongo sanitize:**<br/>[![Express-mongo-sanitize](https://img.shields.io/npm/v/express-mongo-sanitize.svg?logo=express-mongo-sanitize)](https://www.npmjs.com/package/express-mongo-sanitize)
<br/>
**Cookie parser:** <br/>[![Cookie parser](https://img.shields.io/npm/v/cookie-parser.svg?logo=cookie-parser)](https://www.npmjs.com/package/cookie-parser)
<br/>
**Compression:** <br/>[![Compression](https://img.shields.io/npm/v/compression.svg?logo=compression)](https://www.npmjs.com/package/compression)
<br/>
**Express file upload:** <br/>[![Express-fileupload](https://img.shields.io/npm/v/express-fileupload.svg?logo=express-fileupload)](https://www.npmjs.com/package/express-fileupload)
<br/>
**Cors:** <br/>[![Cors](https://img.shields.io/npm/v/cors.svg?logo=cors)](https://www.npmjs.com/package/cors)

- [@bwogi](https://www.github.com/bwogi)

# Custom logger, handle Server and http errors

Adding a custom logger, Handling uncaughtException, unhandledRejection errors, SIGTERM, and handle http errors.

## Objectifs

- Adding a custom logger to use instead of using the boring console.log to help us read the console better and seperate errors from infos.

- Handle Server closing when facing uncaughtException, unhandledRejection errors.

- Close server gracefully on SIGTERM signal.

- Handle http errors and get proper error messages from server.

## Packages we will use

**Winston:** <br/>[![Winston](https://img.shields.io/npm/v/winston.svg?logo=winston)](https://www.npmjs.com/package/winston)
<br/>
**Http-errors:** <br/>[![Http-errors](https://img.shields.io/npm/v/http-errors.svg?logo=http-errors)](https://www.npmjs.com/package/http-errors)

# Setup routes and controllers

Adding routes setup and controllers functions.

## Objectifs

- Add routes setup and files.

- Trim incoming requests.

- Add controllers functions.

## Packages we will use

**Trim-request:** <br/>[![Cors](https://img.shields.io/npm/v/trim-request.svg?logo=trim-request)](https://www.npmjs.com/package/trim-request)
