describe('AngularJS App: app', function(){
  beforeEach(function(){
    angular.mock.module("app");
  });
  describe('controller',function(){
    describe('navbar', function(){
      var scope, $location, createController, $serverData;
      
      beforeEach(inject(function ($rootScope, $controller, _$location_, serverData){
        $location = _$location_;
        scope = $rootScope.$new();
        $serverData = serverData;
        createController = $controller('navbar', {'$scope': scope});
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
    });
    describe('memberList', function(){
      var scope, $location, createController, $serverData;
      
      beforeEach(inject(function ($rootScope, $controller, _$location_, serverData){
        $location = _$location_;
        scope = $rootScope.$new();
        $serverData = serverData;
        createController = $controller('memberList', {'$scope': scope});
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
    describe('audioCtl', function(){
      var scope, $location, createController, $serverData;
      
      beforeEach(inject(function ($rootScope, $controller, _$location_, serverData){
        $location = _$location_;
        scope = $rootScope.$new();
        $serverData = serverData;
        createController = $controller('audioCtl', {'$scope': scope});
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
    });
    describe('event', function(){
      var scope, $location, createController, $serverData;
      
      beforeEach(inject(function ($rootScope, $controller, _$location_, serverData){
        $location = _$location_;
        scope = $rootScope.$new();
        $serverData = serverData;
        createController = $controller('event', {'$scope': scope});
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
    describe('book', function(){
      var scope, $location, createController, $serverData;
      
      beforeEach(inject(function ($rootScope, $controller, _$location_, serverData){
        $location = _$location_;
        scope = $rootScope.$new();
        $serverData = serverData;
        createController = $controller('book', {'$scope': scope});
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
    describe('info', function(){
      var scope, $location, createController, $serverData;
      
      beforeEach(inject(function ($rootScope, $controller, _$location_, serverData){
        $location = _$location_;
        scope = $rootScope.$new();
        $serverData = serverData;
        createController = $controller('info', {'$scope': scope});
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
    
