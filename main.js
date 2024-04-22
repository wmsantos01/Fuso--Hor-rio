// Mapeamento dos fusos horários das principais capitais do mundo em relação ao UTC
const fusoHorariosCapitais = {
    'Brasília': -3, 
    'Paris': 1, 
    'Nova York': -5, 
    'Londres': 0, 
    'Tóquio': 9, 
    'Sydney': 10, 
    'Pequim': 8 
};

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Obter a capital
    const capital = frm.inCapital.value.trim(); 
    const horaBrasil = Number(frm.inHoraBrasil.value);

    if (capital in fusoHorariosCapitais) {
        const fusoHora = fusoHorariosCapitais[capital];
        // Fuso horário do Brasil
        const fusoBrasil = fusoHorariosCapitais['Brasília']; 

      // Diferença entre o fuso horário do Brasil e da capital
        const diferenca = fusoHora - fusoBrasil;

        // Calcular a hora na capital desejada
        let horaCapital = horaBrasil + diferenca;
        if (horaCapital >= 24) {
            horaCapital -= 24;
        } else if (horaCapital < 0) {
            horaCapital += 24;
        }

        resp.innerText = "O Horário na capital " + capital + " é: " + horaCapital.toFixed(2);
    } else {
        resp.innerText = "Capital não encontrada no banco de dados.";
    }
});
