module.exports = {

    isCurrentPage: function(req, menuitem) {

      var pathArr = req.path.split('/');

      if(pathArr[1] == ''){
        pathArr[1] = 'home';
      }

      return (pathArr[1] === menuitem)

    },
   
}
  