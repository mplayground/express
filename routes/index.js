exports.index = function(req, res){
  res.render('index', { title: 'Express1z1', foo: {bar:'baz'} });
};
