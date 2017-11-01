import axios from 'axios'

function handleRender(req,res){
  axios.get('http://localhost:3001/books')
  .then(function(response){
    var myHtml =JSON.stringify(response.data)
    res.render('index',{myHtml})
  })
  .catch(function(err){
    console.log("Initial Server-Side Rendering Error", err);
  })
}
module.exports= handleRender;
