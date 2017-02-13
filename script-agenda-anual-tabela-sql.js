//<![CDATA[
var $i = 0;
// Script em JavaScript #
// Author: RELTON FIDELIS ME
// License: GPL - https://www.gnu.org/licenses/gpl-3.0.en.html
// Descrição do Script:
// Imprime um log no console dos navegadores
// O log gera uma agenda anual com horários disponíveis para 
// agendamento de consultas em Clínicas Odontológicas
// ** src.reltonfidelis.com.br/js/js-calendario-anual
// Variaveis
var meses = ["Janeiro", "Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var qtdDiasMes = [ 31,			28,		31,		30,		31,		30,		31,		30,		31,		31,			30,			31	];
var qtdDiasAno = 0;
var msg = "";
var msgDias = "";

for (i = 0; i < 12; i++) { 
	qtdDiasAno+=qtdDiasMes[i];
    
	// Mostra o mes e a quantidade de dias
	msg = "O Mês de " + meses[i] + " tem " +qtdDiasMes[i]+ " Dias";
	console.log("#");
	console.log(msg);
	console.log("#");
		// Faz um loop na quantidade de dias
		for (j=1; j <= qtdDiasMes[i]; j++){
		console.log("-------------------------------------");
		msg = "Dia " + j + " de " + meses[i] + " de 2017";
		console.log(msg);
		console.log("-------------------------------------");				
			// Mostra os Horarios disponiveis
			for (hora=0; hora <= 2; hora++){
			//msg = "Agendar às " + hora + " : 00 ";
			//console.log(msg);
					if(hora == 0){
						hora = '00';
						
					}
				// Mostra os Horarios disponiveis - Tempo de Consulta
				for (minuto = 5; minuto < 59; minuto+=10){
				msg = "Agendar às " + hora + " : " + minuto;
				console.log(msg);

				}
			}

		}

	
}

//]]>