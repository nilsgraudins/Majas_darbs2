// function checkAnagram(word1, word2) {

//     if (word1.toLowerCase().split("").sort().join("") === word2.toLowerCase().split("").sort().join("")) {
//         return 'true';
//     } else {
//         return 'false';
//     }
// }


// console.log(checkAnagram('ADmpSma', 'mamapsd'));

$('#btn2').on('click', function(){
    $('.changable-paragraph').text('baz');
    $('.changable-paragraph').css('color', 'red');
});

function changeText() {
    
    if(document.getElementById('change').innerHTML == 'foo'){
        document.getElementById('change').innerHTML = 'baz';
    }else{
        document.getElementById('change').innerHTML = 'foo';
    }

}
function changeText2(){

    if(document.getElementById('btn2').innerHTML == 'foo'){

        document.getElementById('btn2').innerHTML = 'bar';

    }else if(document.getElementById('btn2').innerHTML == 'bar'){

        document.getElementById('btn2').innerHTML = 'baz';
        
    }else
        document.getElementById('btn2').innerHTML = 'foo';
    
}