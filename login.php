<?php
$email = $_POST["email"] ?? "";
$sifre = $_POST["sifre"] ?? "";

/*
    Örnek kontrol:
    E-posta: feyza.alagoz@ogr.sakarya.edu.tr

    Şifre: B251210012

*/

$dogruEmail = "feyza.alagoz@ogr.sakarya.edu.tr";
$dogruSifre = "B251210012";

if ($email == $dogruEmail && $sifre == $dogruSifre) {
    echo "<!DOCTYPE html>";
    echo "<html lang='tr'>";
    echo "<head>";
    echo "<meta charset='UTF-8'>";
    echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
    echo "<title>Başarılı Giriş</title>";
    echo "<style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f6f8;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }

            .kutu {
                background-color: white;
                padding: 40px;
                border-radius: 15px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                text-align: center;
                width: 400px;
            }

            h1 {
                color: #2c3e50;
                margin-bottom: 15px;
            }

            p {
                color: #555;
                font-size: 18px;
            }

            a {
                display: inline-block;
                margin-top: 20px;
                padding: 10px 20px;
                background-color: #2c3e50;
                color: white;
                text-decoration: none;
                border-radius: 8px;
            }

            a:hover {
                background-color: #1a252f;
            }
          </style>";
    echo "</head>";
    echo "<body>";
    echo "<div class='kutu'>";
    echo "<h1>Giriş Başarılı</h1>";
    echo "<p>Hoşgeldiniz " . htmlspecialchars($sifre) . "</p>";
    echo "<a href='hakkinda.html'>Hakkında Sayfasına Git</a>";
    echo "</div>";
    echo "</body>";
    echo "</html>";
} else {
    header("Location: login.html");
    exit();
}
?>