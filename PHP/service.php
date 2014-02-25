<?php

mysql_connect('127.0.0.1', 'root','logan123')
OR die('could not connect to database');
mysql_select_db('runner_info');

echo "connected!";
?>