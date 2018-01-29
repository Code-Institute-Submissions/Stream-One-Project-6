describe('AngularJS App: app', function(){
  beforeEach(function(){
    angular.mock.module("app");
  });
  describe('controller',function(){
    describe('navbarCtrl', function(){
      var scope, $location, createController, $serverData;
      
      beforeEach(inject(function ($rootScope, $controller, _$location_, serverData){
        $location = _$location_;
        scope = $rootScope.$new();
        $serverData = serverData;
        createController = $controller('navbarCtrl', {'$scope': scope});
      }));

      it('should be defined', function(){
          var controller = createController;
          expect(controller).toBeDefined();
      });

      it('$scope should be defined', function(){
          var controller = createController;
          expect(scope).toBeDefined();
      });

      it('serverData.getLink function should be defined', function(){
          var controller = createController;
          expect($serverData.getLink()).toBeDefined();
      });

      it('serverData.getBrand function should be defined', function(){
          var controller = createController;
          expect($serverData.getBrand()).toBeDefined();
      });
    });
    describe('memberCtrl', function(){
      var scope, $location, createController, $serverData;
      
      beforeEach(inject(function ($rootScope, $controller, _$location_, serverData){
        $location = _$location_;
        scope = $rootScope.$new();
        $serverData = serverData;
        createController = $controller('memberCtrl', {'$scope': scope});
      }));

      it('should be defined', function(){
          var controller = createController;
          expect(controller).toBeDefined();
      });

      it('$scope should be defined', function(){
          var controller = createController;
          expect(scope).toBeDefined();
      });
      it('serverData.getMember() function should be defined', function(){
          var controller = createController;
          expect($serverData.getMember()).toBeDefined();
      });
    });
    describe('audioCtrl', function(){
      var scope, $location, createController, $serverData;
      
      beforeEach(inject(function ($rootScope, $controller, _$location_, serverData){
        $location = _$location_;
        scope = $rootScope.$new();
        $serverData = serverData;
        createController = $controller('audioCtrl', {'$scope': scope});
      }));

      it('should be defined', function(){
          var controller = createController;
          expect(controller).toBeDefined();
      });

      it('$scope should be defined', function(){
          var controller = createController;
          expect(scope).toBeDefined();
      });

      it('serverData.getAudio() function should be defined', function(){
          var controller = createController;
          expect($serverData.getAudio()).toBeDefined();
      });

      it('serverData.getAudioDesc() function should be defined', function(){
          var controller = createController;
          expect($serverData.getAudioDesc()).toBeDefined();
      });
    });
    describe('eventCtrl', function(){
      var scope, $location, createController, $serverData;
      
      beforeEach(inject(function ($rootScope, $controller, _$location_, serverData){
        $location = _$location_;
        scope = $rootScope.$new();
        $serverData = serverData;
        createController = $controller('eventCtrl', {'$scope': scope});
      }));

      it('should be defined', function(){
          var controller = createController;
          expect(controller).toBeDefined();
      });

      it('$scope should be defined', function(){
          var controller = createController;
          expect(scope).toBeDefined();
      });
      
      it('serverData.getEvent() function should be defined', function(){
          var controller = createController;
          expect($serverData.getEvent()).toBeDefined();
      });
    });
    describe('bookCtrl', function(){
      var scope, $location, createController, $serverData;
      
      beforeEach(inject(function ($rootScope, $controller, _$location_, serverData){
        $location = _$location_;
        scope = $rootScope.$new();
        $serverData = serverData;
        createController = $controller('bookCtrl', {'$scope': scope});
      }));

      it('should be defined', function(){
          var controller = createController;
          expect(controller).toBeDefined();
      });

      it('$scope should be defined', function(){
          var controller = createController;
          expect(scope).toBeDefined();
      });
      
      it('serverData.getBooking() function should be defined', function(){
          var controller = createController;
          expect($serverData.getBooking()).toBeDefined();
      });
    });
    describe('infoCtrl', function(){
      var scope, $location, createController, $serverData;
      
      beforeEach(inject(function ($rootScope, $controller, _$location_, serverData){
        $location = _$location_;
        scope = $rootScope.$new();
        $serverData = serverData;
        createController = $controller('infoCtrl', {'$scope': scope});
      }));

      it('should be defined', function(){
          var controller = createController;
          expect(controller).toBeDefined();
      });

      it('$scope should be defined', function(){
          var controller = createController;
          expect(scope).toBeDefined();
      });
      
      it('serverData.getType() function should be defined', function(){
          var controller = createController;
          expect($serverData.getType()).toBeDefined();
      });
    });
  });
});
    
