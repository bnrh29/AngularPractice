angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        var elem = angular.element(document.getElementById('r1'));
        $scope.r1text = rgbTo16(elem.css("background-color")); 
    }])

function rgbTo16(color) {
    return (function (r, g, b) {
        return '#' + (function (n) {
            return new Array(7 - n.length).join('0') + n;
        })((r << 16 | g << 8 | b).toString(16));
    }).apply(this, color.match(/\d+/g));
}
