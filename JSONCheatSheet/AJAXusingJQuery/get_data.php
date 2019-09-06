<?php
	if(isset($_GET['offset']) && isset($_GET['limit'])){
	$servername = "localhost";
	$username = "testuser";
	$password = "testuser1";
	$dbname = "blog";

	$limit = $_GET['limit'];
	$offset = $_GET['offset'];
	
    $connection = mysqli_connect($servername, $username, $password, $dbname);

	$data = mysqli_query($connection, "SELECT * FROM `posts` LIMIT {$limit} OFFSET {$offset}");
	
	while($row = mysqli_fetch_array($data)) {
		echo '<div class="blog-post"><h1>' . $row['id'].'</h1><p>' . $row['post'] . '</p></div>';	
	}
	}
?>
