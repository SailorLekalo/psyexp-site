
<?php
    $_POST = json_decode(file_get_contents("php://input"), true);
    $data = $_POST['data'];
    $file = fopen("localrating.txt", "a");
    fwrite($file, $data . "\n");
    fclose($file);
?>
