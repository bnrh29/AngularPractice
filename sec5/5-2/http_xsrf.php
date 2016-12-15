<?php
$str = sha1(uniqid(mt_rand(), true));
setcookie('CSRF-TOKEN', $str);
?>
<!DOCTYPE html>
<html ng-app="myApp">
<head>
<meta charset="UTF-8" />
<title>AngularJS</title>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script src="http_xsrf.js"></script>
</head>
<body ng-controller="MyController">

<form name="myForm" novalidate>
<label for="name">名前：</label>
<input id="name" name="name" type="text" ng-model="name" />
<button ng-click="onclick()" >送信</button>
</form>

<div>{{result}}</div>

</body>
</html>
