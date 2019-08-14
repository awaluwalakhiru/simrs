<?php
require_once "config/config.php";
if (isset($_SESSION['user'])) {
    header("location:" . base_url('dashboard/data.php') . "");
    exit();
} else {
    header("location:" . base_url('auth/login.php') . "");
    exit();
}
