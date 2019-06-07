// Sis ir viens variants ar jQuery!!!

$('#btn1').click(function () {
    var $changed = $('#change');
    if ($changed.text == 'foo') {
        $changed.text('baz');
    } else {
        $changed.text('foo');
    }
});

// Sis ir otrs variants ar parasto (Vanilla JS) JavaScript.
document.querySelector('#btn2').addEventListener('click', function () {
    var butt = document.querySelector('#btn2');
    if (butt.innerText == 'foo') {
        butt.innerText = 'bar';
    } else if (butt.innerText == 'bar') {
        butt.innerText = 'baz';
    } else {
        butt.innerText = 'foo';
    }

});

function checkAnagramm(w1, w2) {
    if (w1.toLowerCase().split("").sort().join("") == w2.toLowerCase().split("").sort().join("")) {
        return 'true';
    } else {
        return 'false';
    }
};
console.log(checkAnagramm('ABeCDw', 'Wcabed'));