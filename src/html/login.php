<?php
	header("Content-type: text/html; charset=utf-8");	//注册的php
	$userPhone = $_POST['userPhone'];
	$userYZM = $_POST['userYZM'];
	$userPass = $_POST['userPass'];
	$con = mysql_connect("localhost","root","baining");
	if(!$con){
		echo "注册失败:服务器连接有问题".mysql_error();
	}else{
		mysql_select_db("baihuaguan",$con);
		$str="insert into logIn(userPhone,userYZM,userPass) values('".$userPhone."','".$userYZM."','".$userPass."')";
		$count = mysql_query($str,$con); 		
		mysql_close($con);
		if($count==1){
			sleep(2);
			header('Location: entry.html');
		}else{
			echo "注册失败";
		}
			
	}
?>