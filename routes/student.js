exports.index = function(req, res){
  console.log(req.params.page);

  res.render('student', { title: 'Express11', foo: {bar:'baz'} });
};
