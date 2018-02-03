var myApp = angular.module('myApp', []);

myApp.controller('FormController', ['$scope', function($scope) {
    $scope.register = function() {
        $scope.msg = 'Hoşgeldin ' + $scope.user.firstname + ' ' + $scope.user.lastname + "! Kayıt yaptınız.";
        $scope.showName = 'Ad: ' + $scope.user.firstname; 
        $scope.showSurname = 'Soyad: ' + $scope.user.lastname;
        $scope.showEmail = 'Eposta: ' + $scope.user.email;
        $scope.showPassword = 'Parola: ' + $scope.user.password;
        $scope.showPhone = 'Telefon: ' + $scope.user.phone;
    }
}]);