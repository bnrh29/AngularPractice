angular.module('myApp', [])
    .controller('MyController', ['$scope', '$timeout', '$log', '$q', function ($scope, $timeout, $log, $q) {
        var asyncProcess = function (value) {
            var deferred = $q.defer();
            $timeout(
                function () {
                    deferred.notify('asyncProcess');           // 通知
                    if (value === undefined || value === '') {
                        deferred.reject('入力値が空です');      // 失敗
                    } else {
                        deferred.resolve('入力値は' + value);   // 成功
                    }
                }, 1000
            )
            return deferred.promise;
        }

        $q.all([
            asyncProcess('トクジロウ'),
            asyncProcess('ニザブロウ'),
            asyncProcess('リンリン')
        ]).then(
            function (o_resolve) {
                console.log(o_resolve);
            },
            function (o_reject) {
                console.log(o_reject)
            }
        )
    }])