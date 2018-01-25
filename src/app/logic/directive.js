app.directive('valTime', function(){
  return {
    require: 'ngModel',
    link: function(scope, element, attr, ngModelCtrl){
      function timeValidation(time){
        var pass=true;
        if(time!==undefined)
        {
          var AP=time.split(' ')[1];
          var time=time.split(' ')[0].split(':');

          if(AP==='AM'&&(Number(time[0])<7||Number(time[0])===12)||AP==='PM'&&(Number(time[0])>=11&&Number(time[0])!==12))
          {
            pass=false;
          } 
        }
        else
        {
          pass=false;
        }
        if(pass){
          ngModelCtrl.$setValidity('timeRange', true);
        }
        else{
          ngModelCtrl.$setValidity('timeRange', false);
        }
        return time;
      }
      ngModelCtrl.$parsers.push(timeValidation);
    }
  };
});