<?php
$dogruEmail = "feyza.alagoz@ogr.sakarya.edu.tr";
$dogruSifre = "B251210012";

$email = $_POST["email"] ?? "";
$sifre = $_POST["sifre"] ?? "";

if ($email == "" || $sifre == "") {
    header("Location: login.html?hata=2");
    exit();
}

if ($email != $dogruEmail || $sifre != $dogruSifre) {
    header("Location: login.html?hata=1");
    exit();
}

$ogrenciNo = $sifre;
?>

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Sonucu</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="navbar">
        <div class="logo">Web Projem</div>

        <nav>
            <a href="index.html">Hakkında</a>
            <a href="ozgecmis.html">Özgeçmiş</a>
            <a href="sehrim.html">Şehrim</a>
            <a href="mirasimiz.html">Mirasımız</a>
            <a href="ilgialanlarim.html">İlgi Alanlarım</a>
            <a href="iletisim.html">İletişim</a>
            <a href="login.html">Login</a>
        </nav>
    </header>

    <section class="hero">
        <h1>LOGIN SONUCU</h1>
        <p>Kullanıcı giriş kontrolü başarıyla tamamlandı.</p>
    </section>

    <main class="container">
        <section class="login-kutusu">
            <h2>Giriş Başarılı</h2>

            <p>
                Hoşgeldiniz 
                <strong><?php echo $ogrenciNo; ?></strong>
            </p>

            <a href="index.html" class="geri-don">Ana Sayfaya Git</a>
        </section>
    </main>

    <footer>
        <p>© 2026 Feyza - Web Teknolojileri Projesi</p>
    </footer>

</body>
</html>