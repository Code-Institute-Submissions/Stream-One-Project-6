app.config(function($routeProvider,$locationProvider)
{
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/',{ templateUrl:'app/template/home.html'});
});