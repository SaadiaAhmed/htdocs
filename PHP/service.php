<?php
if($_POST){	
//mysql_connect('127.0.0.1', 'root','')
//OR die('could not connect to database');
//mysql_select_db('runner_info');

//echo "connected!";
if ($_POST['action'] == 'addRunner') {
	$fname = htmlspecialchars($_POST['txtFirstName']);
	$lname = htmlspecialchars($_POST['txtLastName']);
	$gender = htmlspecialchars($_POST['ddlGender']);
	$minutes = htmlspecialchars($_POST['txtMinutes']);
	$seconds = htmlspecialchars($_POST['txtSeconds']);

	if(preg_match ('/[^\w\s]/i', $fname) || preg_match('/[^\w\s]/i', $lname) ){
	fail('Invalid name provided');
	}

	if(empty($fname) || empty($lname)){

	fail('Please enter a first and last name.');
	}

	if(empty($gender) ){
	fail('Please select a gender.');
	}

	$time = $minutes.":".$seconds;


	$query = "INSERT INTO runners SET first_name = '$fname', last_name= '$lname', gender = '$gender', finish_time = '$time' ";


	$results = db_connection($query);

	//$runners=array();

	if ($results){
	$msg = "Runner: ".$fname." ".$lname." added successfully" ;

success($msg);
	}
	

	else { fail('Insert Failed.'); } 

	exit;

}
}

if($_GET){
if ($_GET['action'] == 'getRunners'){

	
		$query = "SELECT first_name, last_name, gender, finish_time FROM runners order by finish_time ASC";	

		$results = db_connection($query);

		$runners = array();


		while($row = mysql_fetch_array($results, MYSQL_ASSOC)) {
		//print_r($row);
		array_push($runners, array('fname'=> $row['first_name'],'lname'=> $row['last_name'], 'gender'=> $row['gender'], 'time'=> $row['finish_time']));
		}
		
		echo json_encode(array("runners" => $runners));
		exit;
}

}


//});	
//}

function db_connection($query){
	mysql_connect('127.0.0.1', 'root','')
	OR die('could not connect to database');
	mysql_select_db('runner_info');

	//echo "connected!";

return mysql_query($query);

}

function fail($message) {
die(json_encode(array('status' => 'fail', 'message' => $message)));
}

function success($message) {
die(json_encode(array('status' => 'success', 'message' => $message)));
}





?>