
function errHandler(err,req,res,next){
  var responseData;
  if (err.name === 'JsonSchemaValidation') {

      // Log the error however you please
      console.log(err.message);
      // logs "express-jsonschema: Invalid data found"

      // Set a bad request http response status
      res.status(400);

      // Format the response body
      responseData = {
         statusText: 'Bad Request',
         jsonSchemaValidation: true,
         validations: err.validations  // All of your validation information
      };

      // Respond with the right content type
      if (req.xhr || req.get('Content-Type') === 'application/json') {
          res.json(responseData);
      } else {
          res.render('badrequestTemplate', responseData);
      }

  } else {
      // pass error to next error middleware handler
      next(err);
  }
}

exports.errHandler = errHandler;
