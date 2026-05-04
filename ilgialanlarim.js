// Sayfa açıldığında seçtiğim kitaplar API üzerinden getirilir.
document.addEventListener("DOMContentLoaded", function () {
    seciliKitaplariGetir();
});


// Sayfa ilk açıldığında gösterilecek kitaplar
function seciliKitaplariGetir() {

    const sonucAlani = document.getElementById("sonucAlani");

    const seciliKitaplar = [
        "Devlet Plato",
        "Suç ve Ceza Dostoyevski",
        "Beyaz Geceler Dostoyevski",
        "Yeraltından Notlar Dostoyevski",
        "Gurur ve Önyargı Jane Austen",
        "İnsan Neyle Yaşar Tolstoy"
    ];

    sonucAlani.innerHTML = `
        <div class="yukleniyor">
            Seçilen kitaplar yükleniyor...
        </div>
    `;

    sonucAlani.innerHTML = "";

    seciliKitaplar.forEach(function (kitapAdi) {
        fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(kitapAdi)}`)
            .then(function (cevap) {
                return cevap.json();
            })
            .then(function (veri) {

                // Kapak görseli olan ilk kitabı seçiyoruz.
                const kitap = veri.docs.find(function (kitap) {
                    return kitap.cover_i;
                });

                if (!kitap) {
                    return;
                }

                const baslik = kitap.title ? kitap.title : "Başlık bilgisi bulunamadı";
                const yazar = kitap.author_name ? kitap.author_name[0] : "Yazar bilgisi bulunamadı";
                const yil = kitap.first_publish_year ? kitap.first_publish_year : "Yayın yılı bulunamadı";
                const kapakUrl = `https://covers.openlibrary.org/b/id/${kitap.cover_i}-M.jpg`;

                sonucAlani.innerHTML += `
                    <div class="kitap-karti">
                        <img src="${kapakUrl}" alt="${baslik} kitap kapağı">
                        <div class="kitap-bilgi">
                            <h3>${baslik}</h3>
                            <p><strong>Yazar:</strong> ${yazar}</p>
                            <p><strong>İlk Yayın Yılı:</strong> ${yil}</p>
                        </div>
                    </div>
                `;
            })
            .catch(function (hata) {
                console.log("Hata:", hata);
            });
    });
}


// Kullanıcı isterse inputa kitap adı yazıp farklı kitap da arayabilir.
function kitapAra() {

    const input = document.getElementById("kitapInput");
    const sonucAlani = document.getElementById("sonucAlani");

    const aramaKelimesi = input.value.trim();

    if (aramaKelimesi === "") {
        sonucAlani.innerHTML = `
            <div class="uyari-kutusu">
                Lütfen aramak istediğiniz kitabın adını yazınız.
            </div>
        `;
        return;
    }

    sonucAlani.innerHTML = `
        <div class="yukleniyor">
            Kitap bilgileri yükleniyor...
        </div>
    `;

    fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(aramaKelimesi)}`)
        .then(function (cevap) {
            return cevap.json();
        })
        .then(function (veri) {

            sonucAlani.innerHTML = "";

            const kitaplar = veri.docs
                .filter(function (kitap) {
                    return kitap.cover_i;
                })
                .slice(0, 6);

            if (kitaplar.length === 0) {
                sonucAlani.innerHTML = `
                    <div class="uyari-kutusu">
                        Aradığınız kitapla ilgili kapak görseli olan sonuç bulunamadı.
                    </div>
                `;
                return;
            }

            kitaplar.forEach(function (kitap) {

                const baslik = kitap.title ? kitap.title : "Başlık bilgisi bulunamadı";
                const yazar = kitap.author_name ? kitap.author_name[0] : "Yazar bilgisi bulunamadı";
                const yil = kitap.first_publish_year ? kitap.first_publish_year : "Yayın yılı bulunamadı";
                const kapakUrl = `https://covers.openlibrary.org/b/id/${kitap.cover_i}-M.jpg`;

                sonucAlani.innerHTML += `
                    <div class="kitap-karti">
                        <img src="${kapakUrl}" alt="${baslik} kitap kapağı">
                        <div class="kitap-bilgi">
                            <h3>${baslik}</h3>
                            <p><strong>Yazar:</strong> ${yazar}</p>
                            <p><strong>İlk Yayın Yılı:</strong> ${yil}</p>
                        </div>
                    </div>
                `;
            });
        })
        .catch(function (hata) {
            sonucAlani.innerHTML = `
                <div class="uyari-kutusu">
                    Kitap bilgileri alınırken bir hata oluştu.
                </div>
            `;

            console.log("Hata:", hata);
        });
}