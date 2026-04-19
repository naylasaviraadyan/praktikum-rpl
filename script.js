// =======================
// INDEX → DASHBOARD
// =======================
function sapa() {
    var nama = document.getElementById("nama").value;

    if (nama === "") {
        alert("Masukkan nama dulu Nay!");
    } else {
        localStorage.setItem("nama", nama);
        window.location.href = "dashboard.html";
    }
}

// =======================
// KEMBALI KE INDEX
// =======================
function kembali() {
    window.location.href = "index.html";
}

// =======================
// TAMPILKAN NAMA DI DASHBOARD
// =======================
document.addEventListener("DOMContentLoaded", function () {

    if (window.location.pathname.includes("dashboard.html")) {
        var nama = localStorage.getItem("nama") || "User";
        var el = document.getElementById("welcome");

        if (el) {
            el.innerText = "Halo " + nama + " 👋";
        }
    }

    // =======================
    // TAMPILKAN STRUK
    // =======================
    if (window.location.pathname.includes("struk.html")) {
        var data = JSON.parse(localStorage.getItem("strukData")) || [];
        var total = localStorage.getItem("total") || 0;

        var hasil = "";

        data.forEach(function (item) {
            hasil += item + "<br>";
        });

        var hasilEl = document.getElementById("hasil");
        var totalEl = document.getElementById("total");

        if (hasilEl) hasilEl.innerHTML = hasil;
        if (totalEl) totalEl.innerText = total;
    }

});

// =======================
// PROSES BELANJA → STRUK
// =======================
function proses() {
    var harga = {
        nasi: 15000,
        mie: 12000,
        ayam: 18000,
        soto: 14000,
        bakso: 13000,
        esteh: 5000,
        jeruk: 7000
    };

    var total = 0;
    var data = [];

    for (var item in harga) {
        var input = document.getElementById(item);

        if (input) {
            var jumlah = parseInt(input.value) || 0;

            if (jumlah > 0) {
                var subtotal = jumlah * harga[item];
                total += subtotal;

                data.push(item.toUpperCase() + " x " + jumlah + " = Rp" + subtotal);
            }
        }
    }

    if (data.length === 0) {
        alert("Pilih menu dulu Nay!");
        return;
    }

    localStorage.setItem("strukData", JSON.stringify(data));
    localStorage.setItem("total", total);

    window.location.href = "struk.html";
}