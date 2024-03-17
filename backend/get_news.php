<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$host = 'localhost';
$db_user = 'root';
$db_pass = null;
$db_name = 'newsdb';

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);

if ($mysqli->connect_error) {
    die('Connection Failed: ' . $mysqli->connect_error);
}
$query = $mysqli->prepare('SELECT * FROM news');
$query->execute();
$query->store_result();
$num_rows = $query->num_rows();

if ($num_rows == 0) {
    echo $response['status'] = 'error';
} else {
    $news=[];
    $query->bind_result($id, $title, $description, $publication_date);
    while ($query->fetch()) {
        $news[] = [
            'id' => $id,
            'title' => $title,
            'description' => $description,
            'publication_date' => $publication_date
        ];
    }
    $response['status'] = 'success';
    $response['news'] = $news;
   
}
echo json_encode($response);