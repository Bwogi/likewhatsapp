# Lets add a few middlewares

Lets setup cross-env and add some middlewares

## Objectives

- Run scripts that set and use environment variables accross platforms with cross-env.
- Adding Morgan middleware as an HTTP request logger middleware for node js.
- Adding Helmet middleware to help you secure Express apps by setting various hpp headers.
- Adding express json and urlencoded middleware to parse json request from body to url.

- Adding express-mongo-sanitise middleware which sanitizes user-supplied data to prevent MongoDB Operator Injection attacks.
- Adding Cookie-parser middleware to parse Cookie header and populate req.cookies with an object keyed in the cookie names.
- Adding compression middleware to compress response bodies for all requests that traverse through the middleware.
- Adding Express-fileupload middleware to make uploaded files available from req.files.
- Adding cors middleware to protect and restrict access to the server.

## Packages we will use

### Cross-env:
