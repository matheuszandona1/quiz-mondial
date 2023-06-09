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
	$(".results").show()
	$(".results__title").text(dados[id].titulo)
	$(".results__img img").attr("src", dados[id].imagem)
	$(".results__desc").html(dados[id].desc)
}

dados = {
	airFryer: {
		titulo: "Canjica",
		imagem: "/res/img/assets/canjica.png",
		desc: "Você é uma pessoa doce e acolhedora, assim como um belo prato de canjica! Com a panela elétrica da Mondial, você pode preparar uma canjica perfeita sem muito esforço e ainda surpreender todos na festa junina. <br><br>E que tal considerar uma canjica diferente? Veja nossa receita de Canjica Salgada com Calabresa e surpreenda os convidados!",
	},
	pipoqueira: {
		titulo: "Pipoqueira Elétrica Mondial",
		imagem: "/res/img/assets/img.png",
		desc: "Sua mãe deve ser mais caseira e adorar os momentos de lazer em casa em frente à TV: no final de semana, no dia de folga ou no feriadão. Uma <b>pipoqueira elétrica</b> pode ser uma ótima opção, permitindo que ela prepare pipocas fresquinhas e deliciosas para sessões de entretenimento em casa. Outra opção muito boa aqui é uma panela elétrica de fondue para curtir os dias mais frios.<br><br>E se ela adora tomar um café fresquinho nesses momentos, pense numa cafeteira bacana, como a máquina de café expresso da Mondial.",
	},
	churrasqueira: {
		titulo: "Churrasqueira Elétrica ou Grill Mondial",
		imagem: "/res/img/assets/img_14.png",
		desc: "Sua mãe provavelmente adora fazer churrascos e desfrutar de momentos ao ar livre com amigos e familiares. Uma <b>churrasqueira elétrica ou grill da Mondial</b>  podem ser o presente ideal, permitindo que ela prepare carnes suculentas sem precisar de muito espaço ou carvão. <br><br>Outros itens que complementam o churrasco são o multiprocessador da Mondial, para fazer aquele vinagrete e demais molhos para acompanhar.",
	},
	liquidificador: {
		titulo: "Multiprocessador ou Liquidificador Mondial",
		imagem: "/res/img/assets/img_13.png",
		desc: `Sua mãe provavelmente é adepta de um estilo de vida saudável e gosta de preparar comidinhas nutritivas. Um <b>multiprocessador ou liquidificador da Mondial</b> podem ajudá-la na preparação de sucos e no processamento de ingredientes para várias receitas. E se ela for uma musa fitness, o blender seria perfeito para bater o pré ou pós-treino.<br><br>No <b><a href="https://www.emondial.com.br" target="_blank">site da Mondial,</a></b> você encontra todas essas opções! `,
	},
}
