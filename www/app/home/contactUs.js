/**
 * Created by ronaldkato on 15/05/01.
 */

(function () {

    var contactUsCtrl = function ($scope, uiGmapGoogleMapApi) {

        uiGmapGoogleMapApi.then(function (maps) {
            $scope.map = {center: {latitude: -26.0055879, longitude: 28.1133841}, zoom: 15};
            $scope.northCampus = {center: {latitude: -25.95587, longitude: 28.15325}, zoom: 15};

        });


    }

    contactUsCtrl['$inject'] = ['$scope','uiGmapGoogleMapApi']

    angular.module('ACTSApp').controller('contactUstCtrl', contactUsCtrl);


})();