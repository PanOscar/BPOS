/**
 * @author Oskar Bergmann
 * @copyright NIE usuwaj tego komentarza! (Do NOT remove this comment!)
 */


var wynik=0;
var klucz = new Array('0','3','1','1','3','2','0',);
function CheckQuestion(q){
	var pytchecked = $("input[name='pytanie"+q+"']:checked").val();
	if (klucz[q - 1] == pytchecked){
		++wynik;
	}
	$(".question[question='"+q+"']").addClass("hidden");
	q++;
	$(".question[question='"+q+"']").removeClass("hidden");
	$("span#wynik").html(wynik);
}