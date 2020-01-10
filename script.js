var question = prompt ("Проблемы?", "да/нет" );
if (question == "да") {
	var question2 = prompt ("ты тут замешан?",)
	if (question2 == "да") {
		alert ("ты идиот!")
		var question4 = prompt ("кто нибудь об этом знает?")
		if (question4 == "нет") {
			alert ("концы в воду!")
			alert ("Нет проблем!")
		} else {
			alert ("трижды идиот!")
			var question5 = prompt ("можешь на кого-нибудь это свалить?")
			if (question5 == "нет") {
				alert ("трижды идиот!")
			} else {
				alert ("Нет проблем!")
			}
		}
	} else {
		var question3 = prompt ("на тебя это повесили?",)
		if (question3 == 'да'){
			alert ("трижды идиот!")
			var question5 = prompt ("можешь на кого-нибудь это свалить?")
			if (question5 == "нет") {
				alert ("так найди лоха!")
			} else {
				alert ("Нет проблем!")
			}
		} else {
			alert ("сиди тихо!")
			alert ("Нет проблем!")
		}
	}
} else if (question == "нет") {
	alert ("ну и не парься!")
} else {
	alert ("Трудно ответить нормально?")
}



