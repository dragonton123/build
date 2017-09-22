<?php
$host = "mysql.hostinger.in"; // ชื่อ host หรือ ip ที่ใช้
	$userhost = "u368033079_root"; // ชื่อ user ที่ใช้ในการล็อกอิน
	$passhost = "123456"; // password ที่ใช้ในการล็อกอิน
	$database = "u368033079_test"; // ชื่อ Database
	$conn = mysqli_connect($host,$userhost,$passhost,$database);
	if(!$conn){
		echo "ไม่สามารถเชื่อมต่อฐานข้อมูลได้";
	}
	mysqli_set_charset($conn,"utf8");
	$sql = "SELECT *FROM data1 ";
	$res = mysqli_query($conn,$sql);
	$num_rows = mysqli_num_rows($res);

			if($num_rows > 0){
				while($result = mysqli_fetch_array($res)){
					$rows[]=$result;
				}

        header('Content-Type': 'application/x-www-form-urlencoded');
				header('Content-Type: application/json');
				header('Access-Control-Allow-Origin: *');
				header("Content-Type: application/json;charset=utf-8");

				$data = json_encode($rows,JSON_UNESCAPED_UNICODE);
				$totaldata = sizeof($rows);
				$results = '{"results":'.$data.'}';

				}else{
				$results = '{"results":""}';
				//$results = '{"results":""}'; แก้เป็นตัวนี้ถึงจะสามารถใช้ myDataArray.length == 0 ได้ ใน ionic ตอนไม่มีข้อมูล
				}

echo $data;
  ?>
