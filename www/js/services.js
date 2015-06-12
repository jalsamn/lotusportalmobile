angular.module('starter.services', [])


.factory('mesaLabels',['$http', function ($http, $httpProvider) {


    var addLabel = function(barcode) {
    return $http({
          			 method: 'POST',
          			 url: 'https://jalsamn-177789.usw1.nitrousbox.com/api/templabels' + "?barcode=" + barcode,
          			 headers: {
          			   'Content-Type': 'any',
          			   'Authorization': 'Token token="fc3236ce78f6f059ab14daba087bd802"'
          			 },
          			}).then(function(result){
            return result.data;
        });
    };
    
    var getLabels = function($scope, $localstorage) {
      
    return $http({
          			 method: 'GET',
          			 url: 'https://jalsamn-177789.usw1.nitrousbox.com/api/templabels',
          			 headers: {
          			   'Content-Type': 'any',
          			   'Authorization': 'Token token="fc3236ce78f6f059ab14daba087bd802"'
          			 },
          			}).then(function(result){
            return result.data;
        });
    };
    
    var finalSubmit = function($scope, $localstorage) {
      
    return $http({
          			 method: 'GET',
          			 url: 'https://jalsamn-177789.usw1.nitrousbox.com/api/csv',
          			 headers: {
          			   'Content-Type': 'any',
          			   'Authorization': 'Token token="fc3236ce78f6f059ab14daba087bd802"'
          			 },
          			}).then(function(result){
            return result.data;
        });
    };
    
    return {
        addLabel: addLabel,
        getLabels: getLabels,
        finalSubmit: finalSubmit
     }
}]);