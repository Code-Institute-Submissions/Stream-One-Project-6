app.controller('navbar',function($scope, serverData){

  // console.log(serverData.getLink());
  serverData.getLink().then(function(data){
    console.log(data);
    $scope.links=data.data;
  },function(err){
    console.log(err);
  });
  
});