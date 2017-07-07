<?php
	$userName= $_POST['userName'];
	$userPass= $_POST['userPass'];
	$con = mysql_connect("localhost","root","baining");
	if(!$con){
		die("连接失败".mysql_error());
	}else{
		mysql_select_db("baihuaguan",$con);
		$str="select * from logIn where userName='".$userName."' and userPass='".$userPass."'";
		$result = mysql_query($str,$con); 
		$rowCount = mysql_num_rows($result);
		mysql_close($con);
		echo $rowCount;
				
?>