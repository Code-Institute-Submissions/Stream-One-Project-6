app.factory('serverData',function($http){

  function getLink() {
    return $http.get('data/linkData.json');
  }
  function getMember() {
    return $http.get('data/memberData.json');
  }
  return {
    getLink: getLink,
    getMember: getMember,
  }
})