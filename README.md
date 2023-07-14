# App Development Process

---

# 6. Register a user

Let's work on the register function of the user

## Objectives

- Validate the user data.
- Create a service to add a user to the database.
- Generate access and refresh access tokens.
- Store the refresh token in the cookies.
- Send back the user data to the front-end

## Packages we will use

## **Validator:** <br/>[![validator](https://img.shields.io/npm/v/validator.svg?logo=validator)](https://www.npmjs.com/package/validator)

## **Bcrypt:** <br/>[![Bcrypt](https://img.shields.io/npm/v/bcrypt.svg?logo=bcrypt)](https://www.npmjs.com/package/bcrypt)

---

# 6. User Model

Let's create a user model

## Objectives

- Create a user model.

- Learn proper validation for a mongoose schema.

- Use validator in the model schema.

## Packages we will use

## **Validator:** <br/>[![validator](https://img.shields.io/npm/v/validator.svg?logo=validator)](https://www.npmjs.com/package/validator)

---

# 5. Integrate Mongodb to our application

Let's add mongodb as our main database.

## Objectives

- Create a mongodb cluster.

- Connect to the database from our express app.

- Handle mongodb connection errors.

- Activate debugging mode.

## Packages we will use

## **Mongoose:** <br/>[![Mongoose](https://img.shields.io/npm/v/mongoose.svg?logo=mongoose)](https://www.npmjs.com/package/mongoose)

---

# 4. Setup routes and controllers

Adding routes setup and controllers functions.

## Objectives

- Add routes setup and files.

- Trim incoming requests.

- Add controllers functions.

## Packages we will use

**Trim-request:** <br/>[![trim-request](https://img.shields.io/npm/v/trim-request.svg?logo=trim-request)](https://www.npmjs.com/package/trim-request)

---

# 3. Custom logger, handle Server and http errors

Adding a custom logger, Handling uncaughtException, unhandledRejection errors, SIGTERM, and handle http errors.

## Objectives

- Adding a custom logger to use instead of using the boring console.log to help us read the console better and seperate errors from infos.

- Handle Server closing when facing uncaughtException, unhandledRejection errors.

- Close server gracefully on SIGTERM signal.

- Handle http errors and get proper error messages from server.

## Packages we will use

**Winston:** <br/>[![Winston](https://img.shields.io/npm/v/winston.svg?logo=winston)](https://www.npmjs.com/package/winston)

---

# 2. Let's add few middlwares

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
**Morgan:** <br/>[![Morgan](https://img.shields.io/npm/v/morgan.svg?logo=morgan)](https://www.npmjs.com/package/morgan)
**Helmet:** <br/>[![Helmet](https://img.shields.io/npm/v/helmet.svg?logo=helmet)](https://www.npmjs.com/package/helmet)
**Express mongo sanitize:**<br/>[![Express-mongo-sanitize](https://img.shields.io/npm/v/express-mongo-sanitize.svg?logo=express-mongo-sanitize)](https://www.npmjs.com/package/express-mongo-sanitize)
**Cookie parser:** <br/>[![Cookie parser](https://img.shields.io/npm/v/cookie-parser.svg?logo=cookie-parser)](https://www.npmjs.com/package/cookie-parser)
**Compression:** <br/>[![Compression](https://img.shields.io/npm/v/compression.svg?logo=compression)](https://www.npmjs.com/package/compression)
**Express file upload:** <br/>[![Express-fileupload](https://img.shields.io/npm/v/express-fileupload.svg?logo=express-fileupload)](https://www.npmjs.com/package/express-fileupload)
**Cors:** <br/>[![Cors](https://img.shields.io/npm/v/cors.svg?logo=cors)](https://www.npmjs.com/package/cors)

- [@bwogi](https://www.github.com/bwogi)

---

# 1. Let's setup our express application

Let's build a basic express application to start with.

## Goals

- Create a basic express application.

- Adding Nodemon to automatically restart the server when file changes in the directory are detected.

- Push our source code to github.

## Packages we will use

**Express:** <br/>[![express](https://img.shields.io/npm/v/express.svg?logo=express)](https://www.npmjs.com/package/express)

**Nodemon:** <br/>[![Nodemon](https://img.shields.io/npm/v/nodemon.svg?logo=nodemon)](https://www.npmjs.com/package/nodemon)
