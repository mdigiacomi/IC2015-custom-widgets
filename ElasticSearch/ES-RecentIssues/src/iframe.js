'use strict';

angular.module('adf.widget.ES-RecentIssues', ['adf.provider'])
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('ES-RecentIssues', {
        title: 'ES-RecentIssues',
        description: 'See Recent Issues in Elastic Serch for your Application or Group',
        templateUrl: '{widgetsPath}/ES-RecentIssues/src/view.html',
        controller: 'ES-RecentIssuesController',
        controllerAs: 'ES-RecentIssues',
        edit: {
          templateUrl: '{widgetsPath}/ES-RecentIssues/src/edit.html'
        },
        config: {
          height: '420px'
        }
      });
  })
  .controller('ES-RecentIssuesController', function($sce, config){
    if (config.url){
      this.url = $sce.trustAsResourceUrl(config.url);
    }
  });
