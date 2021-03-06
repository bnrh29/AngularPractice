/**
 * Created by Hironobu.Abe on 2016/10/06.
 */

angular.module('myApp', ['ngResource'])
	.controller('MyController', ['$scope', '$resource', function($scope, $resource){
		var Book = $resource(
			'resource.php/:isbn',
			{isbn: '@isbn'},
			{update: {method:'PUT'}}
		);

		$scope.books = Book.query();

		$scope.oninsert = function () {
			Book.save(
				$scope.book,
				function () {
					$scope.books = Book.query();
				}
			);
		}

		$scope.onedit = function (isbn) {
			$scope.book = Book.get({isbn: isbn});
		}

		$scope.onupdate = function () {
			Book.update(
				$scope.book,
				function () {
					$scope.books = Book.query();
				}
			);
		}

		$scope.ondelete = function (isbn) {
			Book.delete(
				{isbn: isbn},
				function () {
					$scope.books = Book.query();
				}
			);
		}
	}]);
