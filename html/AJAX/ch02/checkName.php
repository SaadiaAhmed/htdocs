<?php

$takenUsernames = array ('Bill', 'Ted');

sleep(2);

if (!in_array( $_REQUEST['username'], $takenUsernames )) {
	echo 'okay';
} else {
	echo 'denied';
}

?>
