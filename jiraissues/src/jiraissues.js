'use strict';

angular.module('adf.widget.jiraissues', ['adf.provider', 'ngSanitize'])
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('jiraissues', {
        title: 'jiraissues',
        description: 'Display Issue Status Metrics for Jira Project',
        templateUrl: '{widgetsPath}/jiraissues/src/jiraissuesview.html',
        controller: 'jiraissuesCtrl',
        reload: true,
        resolve: {
          data: function(jiraissuesService, config){
            if (config.jiraproject != null){ }
            else
            {
              config.jiraproject = "project-10000";
            }

            return jiraissuesService.get(config.jiraproject);
          }
        },
        edit: {
          templateUrl: '{widgetsPath}/jiraissues/src/jiraissuesedit.html'
        }
      });
  }).service('jiraissuesService', function($q, $http){
    return {
      get: function(jiraproject){
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: "https://jira.digitaladrenalin.net/rest/gadget/1.0/stats/generate?includeResolvedIssues=true&projectOrFilterId=" + jiraproject + "&sortBy=natural&sortDirection=asc&statType=statuses"
        }).success(function(data){
              deferred.resolve(data);
          })
          .error(function(error){
            console.log(error);
            deferred.reject();
          });
        return deferred.promise;
      }
    };
  })
  .controller('jiraissuesCtrl', function($scope, data){
    $scope.jiraissues = data;
  });
