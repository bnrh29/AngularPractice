<?php
header("Content-Security-Policy: default-src 'self' ajax.googleapis.com");
?>
<!DOCTYPE html>
<html ng-app="myApp" ng-csp>
<head>
<meta charset="UTF-8" />
<title>AngularJS</title>
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-csp.css" />
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script src="csp.js"></script>
</head>
<body ng-controller="MyController">
</body>
</html>
