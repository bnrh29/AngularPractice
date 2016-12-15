angular.module('myApp', [])
    .factory('$exceptionHandler', ['$window', '$log', function($window, $log){
        console.log(1);
        return function(exception, cause) {
            $window.alert('ページで不明なエラーが発生しました。\r' + '時間をおいてから、再度アクセスしてください。');
            $log.error(exception);
            console.log(3);
        }
    }])
    .controller('MyController', ['$scope', function($scope){
        console.log(2);
        throw new Error('エラーが発生しました。')
    }])