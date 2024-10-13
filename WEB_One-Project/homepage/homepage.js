window.onload = function() {
    var meuNome = "Sabrina Ramos";
    var minhaCidadeCurso = "SP/ADS Mackenzie";

    function getGreeting() {
        var currentDate = new Date();
        var currentHour = currentDate.getHours();

        if (currentHour >= 6 && currentHour < 12) {
            return "Bom dia!";
        } else if (currentHour >= 12 && currentHour < 18) {
            return "Boa tarde!";
        } else {
            return "Boa noite!";
        }
    }

    var diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    var diaSemana = diasSemana[new Date().getDay()];

    var saudacao = getGreeting();

    var mensagem = saudacao + "\n";
    mensagem += "Hoje é " + diaSemana + "\n";
    mensagem += "Sou a " + meuNome + "\n";
    mensagem += " De " + minhaCidadeCurso;

    alert(mensagem);
}