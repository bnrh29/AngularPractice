<?php
$data['name'] = $_POST['name'];

if(empty($data['name'])){
	header('HTTP/1.1 500 Internal Server Error');
}else{
	print('こんにちは、' . $data['name'] .'さん！');
}
?>