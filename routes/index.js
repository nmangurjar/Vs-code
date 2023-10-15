var express = require('express');
var router = express.Router();
const fs = require("fs");

router.get('/', function(req, res, next) {
   fs.readdir("./files",{withFileTypes: true} ,function(err,data){
    res.render("index",{data})
   })
});
router.get('/filecreate', function(req, res, next) {
   fs.writeFile(`./files/${req.query.filename}`,"",function(err){
    res.redirect("/")
   })
});
router.get('/folcreate', function(req, res, next) {
   fs.mkdir(`./files/${req.query.folname}`,function(err){
    res.redirect("/")
   })
});

router.get(`/delete/file/:filename`,function(req,res){
   fs.unlink(`./files/${req.params.filename}`,function(err){
      res.redirect("/")
   })
})
router.get(`/delete/folder/:folname`,function(req,res){
   fs.rmdir(`./files/${req.params.folname}`,function(err){
      res.redirect("/")
})
})
router.post(`/editfile/:oldname`,function(req,res){
  fs.rename(`./files/${req.params.oldname}`,`./files/${req.body.filename}`,function(){
   res.redirect("/")
  })
})



module.exports = router;
