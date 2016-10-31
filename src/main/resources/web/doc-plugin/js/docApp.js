var app = angular.module('DocApp', ['ngResource']);

app.config(
    function ($httpProvider, $locationProvider) {
        if(parent && typeof parent.getAuthToken === 'function') $httpProvider.defaults.headers.common.Authorization = parent.getAuthToken()
    });


angular.module('DocApp')
  .controller('DocController', ['$http', function($http) {

      var xld = this;
      xld.selectedPrefix = "udm";
      xld.selectedType = "udm.BaseContainer"

      $http.get('/deployit/metadata/type').success(function(data) {
          xld.descriptors = data;
          xld.descriptorsByPrefix = _.groupBy(data, function(e) { return e.type.split('.')[0] });
          xld.prefixes = _.orderBy(_.keys(xld.descriptorsByPrefix));
          xld.selectedPrefix = xld.prefixes[0];
          xld.selectedType = xld.descriptorsByPrefix[xld.selectedPrefix][0].type;
      });

      xld.selectPrefix = function(prefix) {
        xld.selectedPrefix = prefix;
        xld.selectedType = xld.descriptorsByPrefix[xld.selectedPrefix][0].type;
      };

      xld.selectType = function(t) {
        xld.selectedType = t;
        xld.selectedTypeObj = _.find(xld.descriptorsByPrefix[xld.selectedPrefix], {type:t});
      };

      xld.selectedTypes = function() {
        if(xld.descriptorsByPrefix) {
            return xld.descriptorsByPrefix[xld.selectedPrefix];
        } else {
         return [];
        }
      };

  }]);


  app.filter('reverse', function() {
    return function(items) {
        if(items) {
            return items.slice().reverse();
        } else {
            return [];
        }
    };
  });
