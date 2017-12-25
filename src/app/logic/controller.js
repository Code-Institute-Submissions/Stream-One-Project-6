app.controller('navbar',function($scope, serverData){
  // Generate site wide nav links
  serverData.getLink().then(function(data){
    $scope.data=data.data;
  },function(err){
    console.log(err);
  });
});

app.controller('memberList',function($scope, serverData){
  // Generate member list
  serverData.getMember().then(function(data){
    $scope.data=data.data;
  },function(err){
    console.log(err);
  });
});