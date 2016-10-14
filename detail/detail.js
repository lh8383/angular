(function () {
    angular.module('s1.detail', ['s1.data'])
        .controller('detailController', function ($scope, DataService, $stateParams) {
            var data = $scope.data = {};
            data.guest = DataService.getGuestByTel($stateParams.tel)
            DataService.setCurrentGuest(data.guest)
        })
})()
