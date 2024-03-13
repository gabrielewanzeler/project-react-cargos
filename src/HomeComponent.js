import React from 'react';
import './HomeComponent.css';

function HomeComponent (){
    var mediaSalarios = 0;
    var listaTrabalhadores = [];

    class Trabalhador {
        constructor(nome, horasTrabalhadas, cargo, localTrabalho, salario) {
            this.nome = nome;
            this.horasTrabalhadas = horasTrabalhadas;
            this.cargo = cargo;
            this.localTrabalho = localTrabalho;
            this.salario = salario;
        }
    }
    
    const calcularSalario = () => {
        var nome = document.getElementById("nome").value;
        var horasTrabalhadas = parseFloat(document.getElementById("horas").value);
        var cargo = document.getElementById("cargo").value.toLowerCase();
        var localTrabalho = document.getElementById("localTrabalho").value.toLowerCase();
        var salario = 0;
    
        var tabelaSalarios = {
            "escritorio": {
                "gerente": 60,
                "supervisor": 45
            },
            "fabrica": {
                "gerente": 65,
                "supervisor": 40,
                "operador": 30
            }
        };
    
        if (localTrabalho in tabelaSalarios && cargo in tabelaSalarios[localTrabalho]) {
            var valorHora = tabelaSalarios[localTrabalho][cargo];
            salario = valorHora * horasTrabalhadas;
        }
    
        var novoTrabalhador = new Trabalhador(nome, horasTrabalhadas, cargo, localTrabalho, salario);
        listaTrabalhadores.push(novoTrabalhador);
        
        document.getElementById("output").style.display = "block";
        exibirListaTrabalhadores();

    };
    
    const exibirListaTrabalhadores = () => {
        var outputDiv = document.getElementById("output");
        outputDiv.innerHTML = "";
    
        listaTrabalhadores.forEach(trabalhador => {
            outputDiv.innerHTML += "<div>";
            outputDiv.innerHTML += "<p>Nome: " + trabalhador.nome + "</p>";
            outputDiv.innerHTML += "<p>Salário: $" + trabalhador.salario.toFixed(2) + "</p>";
            outputDiv.innerHTML += "</div>";
        });
    };
    
    const exibirDadosColetados = () => {
        var dadosDiv = document.getElementById("dadosColetados");
        dadosDiv.innerHTML = "";
    
        var totalSalarios = 0;
            for (var i = 0; i < listaTrabalhadores.length; i++) {
                totalSalarios += listaTrabalhadores[i].salario;
            }
        var totalFuncionarios = listaTrabalhadores.length;
        
        mediaSalarios = totalSalarios / totalFuncionarios;
    
        var qtdGerentes = listaTrabalhadores.filter(trabalhador => trabalhador.cargo === 'gerente').length;
    
        var qtdSupervisoresFabrica = listaTrabalhadores.filter(trabalhador => trabalhador.cargo === 'supervisor' && trabalhador.localTrabalho === 'fabrica').length;
        var percentSupervisoresFabrica = 0
        percentSupervisoresFabrica = (qtdSupervisoresFabrica / totalFuncionarios) * 100;
    
        var menorSalarioOperadores = 0;
        var operadores = listaTrabalhadores.filter(trabalhador => trabalhador.cargo === 'operador');
        if (operadores.length > 0) {
            menorSalarioOperadores = operadores.reduce((min, trabalhador) => Math.min(min, trabalhador.salario), operadores[0].salario);
        }

        var maiorSalarioOperadores = 0;
        if (operadores.length > 0) {
            maiorSalarioOperadores = operadores.reduce((max, trabalhador) => Math.max(max, trabalhador.salario), operadores[0].salario);
        }

        dadosDiv.innerHTML += "<p>Valor médio dos salários da empresa: $" + mediaSalarios.toFixed(2) + "</p>";
        dadosDiv.innerHTML += "<p>Quantidade de Gerentes na empresa: " + qtdGerentes + "</p>";
        dadosDiv.innerHTML += "<p>Porcentagem de Supervisores de Fábrica: " + percentSupervisoresFabrica.toFixed(2) + "%</p>";
        dadosDiv.innerHTML += "<p>Menor salário dos Operadores: $" + menorSalarioOperadores.toFixed(2) + "</p>";
        dadosDiv.innerHTML += "<p>Maior salário dos Operadores: $" + maiorSalarioOperadores.toFixed(2) + "</p>";
    };
    
    
    const mostrarDadosColetados = () => {
        exibirDadosColetados();
        
        document.getElementById("dadosColetados").style.display = "block";
    };

return (
    <div className="App">
        <div className="container">
        <div id="inputForm">
        <div className="tabela">
            <h2>Tabela de valor por hora trabalhada:</h2>
            <table>
                <tr>
                    <th>Local de Trabalho</th>
                    <th>Cargo</th>
                    <th>Valor da Hora</th>
                </tr>
                <tr>
                    <td>Escritório</td>
                    <td>Gerente</td>
                    <td>$60</td>
                </tr>
                <tr>
                    <td>Escritório</td>
                    <td>Supervisor</td>
                    <td>$45</td>
                </tr>
                <tr>
                    <td>Fábrica</td>
                    <td>Gerente</td>
                    <td>$65</td>
                </tr>
                <tr>
                    <td>Fábrica</td>
                    <td>Supervisor</td>
                    <td>$40</td>
                </tr>
                <tr>
                    <td>Fábrica</td>
                    <td>Operador</td>
                    <td>$30</td>
                </tr>
            </table>
        </div>

            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome"/><br/><br/>
            <label htmlFor="horas">Horas Trabalhadas:</label>
            <input type="number" id="horas"/><br/><br/>
            <label htmlFor="cargo">Cargo:</label>
            <input type="text" id="cargo"/><br/><br/>
            <label htmlFor="localTrabalho">Local de Trabalho:</label>
            <input type="text" id="localTrabalho"/><br/><br/>
            <button onClick={calcularSalario}>Calcular Salário</button>
        </div>
        </div>
            <div id="output" className="hide">
            {/* Aqui será exibido o resultado */}
            </div>
        <div className="two">
            <button className="bt" onClick={mostrarDadosColetados}>Visualizar Dados</button>
            <div className="dados">
            <div id="dadosColetados" style={{display: "none"}}></div>
            </div>
        </div>
    </div>
    );
}

export default HomeComponent;