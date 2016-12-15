<?php

// Notice以外のすべてのエラーを表示
error_reporting(E_ALL & ~E_NOTICE);

try {
	// データベースに接続
	$db = new PDO('mysql:host=localhost;dbname=angular;charset=utf8', 'web_minatoro_works', 'bsX9VrZG4gfGs9tB8yE4');

	//HTTPメソッドによって処理を分岐
	switch ($_SERVER['REQUEST_METHOD']){
		// HTTP GETの場合
		case 'GET':
			// URLがresourse.phpの場合、全てのデータを取得
			if (is_null($_SERVER['PATH_INFO'])) {
				$stt = $db->query('SELECT * FROM books ORDER BY published DESC');
				print_r(json_encode($stt->fetchAll(PDO::FETCH_ASSOC)));

			// URLがresourse.php/isbnの場合、指定されたデータを取得
			} else {
				$stt = $db->prepare('SELECT * FROM books WHERE isbn = ?');
				$stt->bindValue(1, explode('/', $_SERVER['PATH_INFO'])[1]);
				$stt->execute();
				if ($row = $stt->fetch(PDO::FETCH_ASSOC)) {
					print_r(json_encode($row));
				}
			}
			break;
		// HTTP POST の場合、ポストデータを持豚データを登録
		case 'POST':
			$input = file_get_contents('php://input');
			$decoded = json_decode($input);
			$stt = $db->prepare('INSERT INTO books (isbn, title, price, publish, published) VALUE (?, ?, ?, ?, ?)');
			$stt->bindValue(1, $decoded->isbn);
			$stt->bindValue(2, $decoded->title);
			$stt->bindValue(3, $decoded->price);
			$stt->bindValue(4, $decoded->publish);
			$stt->bindValue(5, $decoded->published);
			$stt->execute();
			print_r ($input);
			break;
		case 'PUT':
			$input = file_get_contents('php://input');
			$decoded = json_decode($input);
			$stt = $db->prepare('UPDATE books SET title = ?, price = ?, publish = ?, published = ? WHERE isbn = ?');
			$stt->bindValue(1, $decoded->title);
			$stt->bindValue(2, $decoded->price);
			$stt->bindValue(3, $decoded->publish);
			$stt->bindValue(4, $decoded->published);
			$stt->bindValue(5, $decoded->isbn);
			$stt->execute();
			print_r($input);
			break;
		case 'DELETE':
			$isbn = explode('/', $_SERVER['PATH_INFO'])[1];
			$stt = $db->prepare('DELETE FROM books WHERE isbn = ?');
			$stt->bindValue(1, $isbn);
			$stt->execute();
			print_r($isbn);
			break;
		default:
			break;
	}
}catch(PDOException $e){
	die($e->getMessage());
}
$db = null;
?>