<?php
date_default_timezone_set('Asia/Jakarta');
session_start();

// $conn = mysqli_connect('localhost', 'id9638862_root', 'root1234', 'id9638862_rumahsakit');
$conn = mysqli_connect('localhost', 'root', '', 'rumahsakit');

if (!$conn) {
    die("Error koneksi: " . mysqli_error($conn));
}

function base_url($url = null)
{
    // $base = "http://awalberbagi.000webhostapp.com";
    $base = "http://localhost/simrs";
    if ($url != null) {
        return $base . "/" . $url;
    } else {
        return $base;
    }
}
