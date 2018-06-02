$(function(){
  console.log("jQuery dziła!");



/* $('body').text("Ala ma kota") */

let content = "Państwo przyjezdni? Bardzo sie cieszę! Bo ja znam Gdynię jak własną kieszeń ja poprowadzę,państwo pozwolą... tu skwer kościuszko a tam jest molo. w prawo jest bulwar,zaraz pokażę czy chcą się państwo przejść po bulwarze? dziś jest pogoda i nie ma fali,a czasem fala o bulwar wali.prawda jak ładnie przyjdżmy tu jutro aby się przyjrzec łodziom i kutrom.a dzisiaj chodżmy pod kapitanat tam są wielkie statki prosze pana.o,widzą państwo to są nadbrzeża,a elewator to tamta wieża to jest największy portowy basen ja tu po lekcjach przychodzę czasem, patrzę jak dżwigi ładują skrzynie.ja bardzo kocham tę naszą Gdynię."

$('textarea').change(validate);

function validate(){
	let currentVal = $(this).val();
	console.log(currentVal);
}
})
