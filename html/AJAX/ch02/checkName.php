<?php

$takenUsernames = array ('saadia', 'mishi');

sleep(2);

if (!in_array( $_REQUEST['username'], $takenUsernames )) {
	echo 'okay';
} else {
	echo 'denied';
}

?>
