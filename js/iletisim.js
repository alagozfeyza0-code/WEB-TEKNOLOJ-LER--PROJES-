function nativeKontrol() {
    const adsoyad = document.getElementById("adsoyad").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefon = document.getElementById("telefon").value.trim();
    const konu = document.getElementById("konu").value.trim();
    const sehir = document.getElementById("sehir").value;
    const mesaj = document.getElementById("mesaj").value.trim();
    const sonucMesaji = document.getElementById("sonucMesaji");

    const cinsiyetSecildiMi = document.querySelector('input[name="cinsiyet"]:checked');
    const ilgiSecildiMi = document.querySelectorAll('input[name="ilgi[]"]:checked');

    const emailKontrol = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonKontrol = /^[0-9]+$/;

    if (adsoyad === "") {
        sonucMesaji.innerHTML = "Ad soyad alanı boş bırakılamaz.";
        sonucMesaji.style.color = "red";
        return;
    }

    if (email === "") {
        sonucMesaji.innerHTML = "E-posta alanı boş bırakılamaz.";
        sonucMesaji.style.color = "red";
        return;
    }

    if (!emailKontrol.test(email)) {
        sonucMesaji.innerHTML = "Lütfen geçerli bir e-posta adresi giriniz.";
        sonucMesaji.style.color = "red";
        return;
    }

    if (telefon === "") {
        sonucMesaji.innerHTML = "Telefon alanı boş bırakılamaz.";
        sonucMesaji.style.color = "red";
        return;
    }

    if (!telefonKontrol.test(telefon)) {
        sonucMesaji.innerHTML = "Telefon alanına sadece rakam girilmelidir.";
        sonucMesaji.style.color = "red";
        return;
    }

    if (konu === "") {
        sonucMesaji.innerHTML = "Konu alanı boş bırakılamaz.";
        sonucMesaji.style.color = "red";
        return;
    }

    if (sehir === "") {
        sonucMesaji.innerHTML = "Lütfen bir şehir seçiniz.";
        sonucMesaji.style.color = "red";
        return;
    }

    if (!cinsiyetSecildiMi) {
        sonucMesaji.innerHTML = "Lütfen cinsiyet seçiniz.";
        sonucMesaji.style.color = "red";
        return;
    }

    if (ilgiSecildiMi.length === 0) {
        sonucMesaji.innerHTML = "Lütfen en az bir ilgi alanı seçiniz.";
        sonucMesaji.style.color = "red";
        return;
    }

    if (mesaj === "") {
        sonucMesaji.innerHTML = "Mesaj alanı boş bırakılamaz.";
        sonucMesaji.style.color = "red";
        return;
    }

    sonucMesaji.innerHTML = "Native JavaScript kontrolü başarılı. Form gönderilebilir.";
    sonucMesaji.style.color = "green";
}

function vueKontrol() {
    const adsoyad = document.getElementById("adsoyad").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefon = document.getElementById("telefon").value.trim();
    const konu = document.getElementById("konu").value.trim();
    const sehir = document.getElementById("sehir").value;
    const mesaj = document.getElementById("mesaj").value.trim();
    const sonucMesaji = document.getElementById("sonucMesaji");

    const cinsiyetSecildiMi = document.querySelector('input[name="cinsiyet"]:checked');
    const ilgiSecildiMi = document.querySelectorAll('input[name="ilgi[]"]:checked');

    const emailKontrol = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonKontrol = /^[0-9]+$/;

    const app = Vue.createApp({
        data() {
            return {
                adsoyad: adsoyad,
                email: email,
                telefon: telefon,
                konu: konu,
                sehir: sehir,
                mesaj: mesaj,
                cinsiyetSecildiMi: cinsiyetSecildiMi,
                ilgiSayisi: ilgiSecildiMi.length
            };
        },
        methods: {
            kontrolEt() {
                if (this.adsoyad === "") {
                    return "Ad soyad alanı boş bırakılamaz.";
                }

                if (this.email === "") {
                    return "E-posta alanı boş bırakılamaz.";
                }

                if (!emailKontrol.test(this.email)) {
                    return "Lütfen geçerli bir e-posta adresi giriniz.";
                }

                if (this.telefon === "") {
                    return "Telefon alanı boş bırakılamaz.";
                }

                if (!telefonKontrol.test(this.telefon)) {
                    return "Telefon alanına sadece rakam girilmelidir.";
                }

                if (this.konu === "") {
                    return "Konu alanı boş bırakılamaz.";
                }

                if (this.sehir === "") {
                    return "Lütfen bir şehir seçiniz.";
                }

                if (!this.cinsiyetSecildiMi) {
                    return "Lütfen cinsiyet seçiniz.";
                }

                if (this.ilgiSayisi === 0) {
                    return "Lütfen en az bir ilgi alanı seçiniz.";
                }

                if (this.mesaj === "") {
                    return "Mesaj alanı boş bırakılamaz.";
                }

                return "Vue.js kontrolü başarılı. Form gönderilebilir.";
            }
        }
    });

    const sonuc = app.mount(document.createElement("div")).kontrolEt();

    sonucMesaji.innerHTML = sonuc;

    if (sonuc.includes("başarılı")) {
        sonucMesaji.style.color = "green";
    } else {
        sonucMesaji.style.color = "red";
    }
}