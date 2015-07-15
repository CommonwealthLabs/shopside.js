# shopside.js 0.0.1
A fork of letters.js. Turning this into a MEAN stack MMO marketplace app.

### Technologies

- Back End
   - [NodeJS](https://nodejs.org/)
   - [ExpressJS](expressjs.com/)
   - [MongoDB](https://www.mongodb.org/)
   - [Mongoose](mongoosejs.com/)
- Front End
   - [Materialize](materializecss.com/)
   - [AngularJS](https://angularjs.org/)

## Todo List

### Front End

_Assignee_: Sushil Tailor

* Front End Layout in MATERIALIZE, for MOBILE <- MANDATORY
    * Front End Marketplace Feed
    * 


### Back End

_Assignee_: Diogo Pinto

- Validation for API requests
   - Appropriate non-cryptic error messages & codes
   - Prevent foul play on the front end
   - Make sure only valid wards come in
   - Allow for non-brampton residents (no ward)
   - Make sure requests do not attempt to
- Authentication (API Key)
- Email system
   - Recieve email content from front end
   - Validate
      - Has a body
      - Has associated UserID
         - UserID exists in the DB
      - Has Subject Line ("Hurontario-Mail LRT")
   - Send to both regional and city councillor in the appropriate wards
   - BCC city clerk, swing votes, and mayor

## In Progress


## Done List

### Front End

* Ward Numbers (Ward 1 => Wards 1 & 5) functional
* Name of City & Regional Councillors (Ward 2 => Doug Whillans & Michael Pallesci) working

### Back End

- User schema and non-auth API
- Basic routing ("/api", "/api/users", and "/")
