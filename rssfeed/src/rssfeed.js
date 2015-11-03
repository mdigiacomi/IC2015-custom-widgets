'use strict';

angular.module('adf.widget.rssfeed', ['adf.provider'])
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('rssfeed', {
        title: 'rssfeed',
        description: 'Embed an external page into the dashboard',
        templateUrl: '{widgetsPath}/rssfeed/src/view.html',
        controller: 'iframeController',
        controllerAs: 'iframe',
        edit: {
          templateUrl: '{widgetsPath}/rssfeed/src/edit.html'
        },
        config: {
          height: '420px'
        }
      });
  })
  .controller('iframeController', function($sce, config){
    if (config.url){
      this.url = $sce.trustAsResourceUrl(config.url);
    }
  });
