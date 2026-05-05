<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>İletişim Formu Sonucu</title>

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
            <a href="ilgi-alanlarim.html">İlgi Alanlarım</a>
            <a href="iletisim.html">İletişim</a>
            <a href="login.html">Login</a>
        </nav>
    </header>

    <section class="hero">
        <h1>İLETİŞİM FORMU BİLGİLERİ</h1>
        <p>Gönderdiğiniz form bilgileri başarıyla alınmıştır.</p>
    </section>

    <main class="container">
        <section class="sonuc-kutusu">

            <h2>Form Bilgileriniz</h2>

            <p><strong>Ad Soyad:</strong> 
                <?php echo $_POST["adsoyad"] ?? ""; ?>
            </p>

            <p><strong>E-posta:</strong> 
                <?php echo $_POST["email"] ?? ""; ?>
            </p>

            <p><strong>Telefon:</strong> 
                <?php echo $_POST["telefon"] ?? ""; ?>
            </p>

            <p><strong>Konu:</strong> 
                <?php echo $_POST["konu"] ?? ""; ?>
            </p>

            <p><strong>Şehir:</strong> 
                <?php echo $_POST["sehir"] ?? ""; ?>
            </p>

            <p><strong>Cinsiyet:</strong> 
                <?php echo $_POST["cinsiyet"] ?? ""; ?>
            </p>

            <p><strong>İlgi Alanları:</strong></p>

            <?php
            if (isset($_POST["ilgiler"])) {
                echo "<ul>";
                foreach ($_POST["ilgiler"] as $ilgi) {
                    echo "<li>" . $ilgi . "</li>";
                }
                echo "</ul>";
            } else {
                echo "<p>İlgi alanı seçilmedi.</p>";
            }
            ?>

            <p><strong>Mesaj:</strong> 
                <?php echo $_POST["mesaj"] ?? ""; ?>
            </p>

            <a href="iletisim.html" class="geri-don">Forma Geri Dön</a>

        </section>
    </main>

    <footer>
        <p>© 2026 Feyza - Web Teknolojileri Projesi</p>
    </footer>

</body>
</html>