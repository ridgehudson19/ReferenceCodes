
<?php
//insert.php
if(isset($_POST["subject"]))
{
 include("connect.php");
 $subject = mysqli_real_escape_string($connect, $_POST["subject"]);
 $comment = mysqli_real_escape_string($connect, $_POST["comment"]);
 $query = "
 INSERT INTO comments(comment_subject, comment_text, comment_status)
 VALUES ('$subject', '$comment',0)
 ";
 mysqli_query($connect, $query);
}
?>
