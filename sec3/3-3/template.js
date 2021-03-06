/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', [])
/*
	.run(['$templateCache', function($templateCache){
		$templateCache.put('templates/execution.html', '<dl><dt>マルカート</dt><dd>ひとつひとつの音をはっきりと演奏する</dd><dt>ストリンジェンド</dt><dd>だんだんせきこんで</dd><dt>レガート</dt><dd>音の間を切れ目なくなめらかに演奏する</dd><dt>トレモロ</dt><dd>急速に反復して演奏する</dd></dl>');
		$templateCache.put('templates/tempo.html', '<dl><dt>アッチェレランド</dt><dd>だんだんはやく</dd><dt>リタルダンド</dt><dd>だんだんおそく</dd><dt>ピュウ モッソ</dt><dd>今までよりもはやく</dd><dt>テンポ ルバート</dt><dd>はやさを柔軟に伸縮させて</dd></dl>');
	}])
*/
	.run(['$templateRequest', function($templateRequest){
		$templateRequest('templates/execution.html');
		$templateRequest('templates/tempo.html');
	}])
	.controller('MyController', ['$scope', '$templateCache', function($scope, $templateCache) {
		// テンプレート情報（オプションラベルと読込先URL）を準備
		$scope.templates = [
			{title: 'execution', url: 'templates/execution.html'},
			{title: 'tempo', url: 'templates/tempo.html'}
		]

		// テンプレートを読み込んだ際に実行されるコード
		$scope.onload = function(){
			console.log($scope.template);
			console.log($templateCache.get($scope.template))
		}
	}])
