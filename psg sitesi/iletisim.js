document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engeller

    
    var email = document.getElementById('email').value;
    var isim = document.getElementById('isim').value;
    var telefon = document.getElementById('telefon').value;
    var baslik = document.getElementById('baslik').value;
    var mesaj = document.getElementById('mesaj').value;

    
    if (telefon.length !== 11 || telefon[0] !== '0') {
        if (telefon.length !== 11 && telefon[0] !== '0') {
            alert('Telefon numarası 0 la baslamalı ve aynı zamanda 11 hane olmalıdır');
        }
        else if (telefon[0] !== '0') {
            alert('Telefon numarası 0 la baslamalıdırR');
        }
        else {
            alert('.Telefon numarası 11 haneli olmalıDIR');
        }
    }
    // Diğer alanlar
    else if (email === '' || isim === '' || baslik === '' || mesaj === '') {
        alert('Lütfen tüm alanları doldurun.');
    } else {
        alert('Mesajınız başarıyla gönderildi.');
       
    }
});