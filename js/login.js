function loginKontrol() {
    const email = document.getElementById("email").value.trim();
    const sifre = document.getElementById("sifre").value.trim();
    const hataMesaji = document.getElementById("hataMesaji");

    hataMesaji.textContent = "";

    if (email === "" || sifre === "") {
        hataMesaji.textContent = "E-posta ve şifre alanları boş bırakılamaz.";
        return false;
    }

    const mailKontrol = /^[a-zA-Z0-9._-]+@ogr\.sakarya\.edu\.tr$/;

    if (!mailKontrol.test(email)) {
        hataMesaji.textContent = "E-posta @ogr.sakarya.edu.tr uzantılı olmalıdır.";
        return false;
    }

    return true;
}

window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const hata = params.get("hata");
    const hataMesaji = document.getElementById("hataMesaji");

    if (hata === "1") {
        hataMesaji.textContent = "E-posta veya şifre hatalıdır. Lütfen tekrar deneyiniz.";
    }

    if (hata === "2") {
        hataMesaji.textContent = "Alanlar boş bırakılamaz.";
    }
};