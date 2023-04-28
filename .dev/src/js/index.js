$("#startBtn").click(function () {
	$(this).closest(".holder").hide()
	$(this).parent().parent().parent().parent().find(".questions")
	$(".questions").find("#question-1")
	$("#question-1").fadeIn().css("display", "flex")
})
var steps = 1
$(".questions__option").click(function () {
	removeCurrentStep()
	if (steps < 10) {
		steps++
		showCurrentStep()

		if (steps > 1) {
			$(this).closest("#prev").css("display", "block")
		}
	} else {
		var id = $(this).attr("id")
		showResults(id)
	}
})

$("#prev button").click(function () {
	removeCurrentStep()
	steps--
	showCurrentStep()
})

removeCurrentStep = function () {
	$(`#question-${steps}`).hide()
}
showCurrentStep = function () {
	$(`#question-${steps}`).fadeIn().css("display", "flex")
}
resetSteps = function () {}

showResults = function (id) {
	$(".results__item h1").text(dados[id].titulo)
	$(".results__item img").attr("src", dados[id].imagem)
}

dados = {
	airFryer: {
		titulo: "Air Fryer Forno de 12 L Mondial",
		imagem: "/res/img/assets/img_1.png",
	},
	pipoqueira: {
		titulo: "Pipoqueira Elétrica Mondial",
		imagem: "/res/img/assets/img.png",
	},
	churrasqueira: {
		titulo: "Churrasqueira Elétrica ou Grill Mondial",
		imagem: "/res/img/assets/img_14.png",
	},
	liquidificador: {
		titulo: "Multiprocessador ou Liquidificador Mondial",
		imagem: "/res/img/assets/img_13.png",
	},
}
