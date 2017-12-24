app.factory('serverData',function($http){

  function getLink() {
    return $http.get('data/linkData.json');
  }

  return {
    getLink: getLink
  }
})