angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HomeCtrl', function($scope) {

})

.controller('MesalabelsCtrl', function($scope, $stateParams, mesaLabels, $window, $cordovaBarcodeScanner) {
  
  var getLabels = mesaLabels.getLabels();
          		  	  getLabels.then(function(content) {  // this is only run after $http completes
                      $scope.labels = content;
                      });
  
  $scope.additem = function(barcode) {
        console.log("Item's barcode is: " + barcode);
          var addLabel = mesaLabels.addLabel(barcode);
          		  	  addLabel.then(function(content) {  // this is only run after $http completes
                      $scope.cont = content;
                      $window.location.reload(true);              
                      });
    }
    
  $scope.finalsubmit = function() {
                  console.log("Inside Final Submit");
          var finalSubmit = mesaLabels.finalSubmit();
          		  	  finalSubmit.then(function(content) {  // this is only run after $http completes
                      $scope.cont = content;
                      console.log("Before window reload");
                      $window.location.reload(true);              
                      });
    }
    
    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };
  
});
