window.onload = function init(){
};
var pontO = 0;
var pontX = 0;
var win = false;
var adicionado = false;
var opUser;
var opComp;
var Ocupadas = new Array(); 
function X_ou_O(op){
    var Selecao = document.getElementById("Sltc");
    Selecao.innerHTML = null;
    Tabuleiro = document.getElementById("Tabuleiro");
    var Linha;
    for(var i = 1; i <= 3; i++){
        Tabuleiro.innerHTML += "<tr id='L" + i + "'>"
        for(var j = 1; j <= 3; j++){
            var pos = i + "" + j;
            document.getElementById("L"+i).innerHTML += "<td class='celula' id="+pos+" onclick='Jogada("+pos+")'>.</td>"; 
        };
    };
    opUser = op;

    document.getElementById('Sltc').innerHTML += "<div id='placarX'>Pontos de X : <a id='pontosX'></a></div>"
    document.getElementById('Sltc').innerHTML += "<div id='placarO'>Pontos de O : <a id='pontosO'></a></div>"

    if(opUser == 'X'){
        opComp = 'O';
    }else if(opUser == 'O'){
        opComp = 'X';
        JogadaPc()
    };

    loadCSS("main.css")
}; 
var ganhou = false;
var cont = 0 ;


function Jogada(id_celula){
    
    var celula = document.getElementById(id_celula).innerHTML
    adicionado = false;
    if(celula == "."){
        document.getElementById(id_celula).innerHTML = opUser;
        document.getElementById(id_celula).style.color = "red";
        cont++;
        var a = id_celula.toString().split("")
        a[0] = Number(a[0])
        a[1] = Number(a[1])
        Acabou(opUser);
        
        if(ganhou ==false){
            JogadaPc()
        };
    }else if(celula == 'X' || celula == 'O'){
        alert("Casa Ocupada amigão!");
    };
};

var ponto_Comp;

function JogadaPc(){
    if(ganhou == false){
        adicionado = false
        while(adicionado == false){
            var l = randomico()
            var c = randomico()
            var casa = l+""+c;
            var celula = document.getElementById(casa).innerHTML ;
            if(celula == "."){
                cont++;
                
                document.getElementById(casa).innerHTML = opComp;
                document.getElementById(casa).style.color = "red";
                adicionado = true;
            };
        };
        Acabou(opComp)
    };
};

function loadCSS(url) {
    var lnk = document.createElement('link');
    lnk.setAttribute('type', "text/css" );
    lnk.setAttribute('rel', "stylesheet" );
    lnk.setAttribute('href', url );
    document.getElementsByTagName("head").item(0).appendChild(lnk);
};
function randomico(){
    var rand;
    rand = Math.floor(Math.random()*(3)+1);
    return rand;
};

function Acabou(op){

    var Q11 = document.getElementById("11");
    var Q12 = document.getElementById("12");
    var Q13 = document.getElementById("13");
    var Q21 = document.getElementById("21");
    var Q22 = document.getElementById("22");
    var Q23 = document.getElementById("23");
    var Q31 = document.getElementById("31");
    var Q32 = document.getElementById("32");
    var Q33 = document.getElementById("33");
    
    if((Q12.innerHTML == op)&&(Q11.innerHTML == Q12.innerHTML) && (Q12.innerHTML == Q13.innerHTML)){
        Q11.style.background = "green";
        Q12.style.background = "green";
        Q13.style.background = "green";
        ganhou = true
    };
    if((Q22.innerHTML == op)&&(Q21.innerHTML == Q22.innerHTML)&&(Q22.innerHTML == Q23.innerHTML)){
        Q21.style.background = "green";
        Q22.style.background = "green";
        Q23.style.background = "green";
        ganhou = true
    };
    if((Q32.innerHTML == op)&&(Q31.innerHTML == Q32.innerHTML)&&(Q32.innerHTML == Q33.innerHTML)){
        Q31.style.background = "green";
        Q32.style.background = "green";
        Q33.style.background = "green";
        ganhou = true
    };
    if((Q21.innerHTML == op)&&(Q11.innerHTML == Q21.innerHTML)&&(Q21.innerHTML == Q31.innerHTML)){
        Q11.style.background = "green";
        Q21.style.background = "green";
        Q31.style.background = "green";
        ganhou = true
    };
    if((Q22.innerHTML == op)&&(Q12.innerHTML == Q22.innerHTML)&&(Q22.innerHTML == Q32.innerHTML)){
        Q12.style.background = "green";
        Q22.style.background = "green";
        Q32.style.background = "green";
        ganhou = true
    };
    if((Q23.innerHTML == op)&&(Q13.innerHTML == Q23.innerHTML)&&(Q23.innerHTML == Q33.innerHTML)){
        Q13.style.background = "green";
        Q23.style.background = "green";
        Q33.style.background = "green";
        ganhou = true
    };
    if((Q22.innerHTML == op)&&(Q11.innerHTML == Q22.innerHTML)&&(Q22.innerHTML == Q33.innerHTML)){
        Q11.style.background = "green";
        Q22.style.background = "green";
        Q33.style.background = "green";
        ganhou = true
    };
    if((Q22.innerHTML == op)&&(Q13.innerHTML == Q22.innerHTML)&&(Q22.innerHTML == Q31.innerHTML)){
        Q13.style.background = "green";
        Q22.style.background = "green";
        Q31.style.background = "green";
        ganhou = true
    };
    if(ganhou==true){
        if(op == 'X'){
            pontX+=1;
            document.getElementById('pontosX').innerHTML = pontX;
        }else if(op == 'O'){
            pontO+=1;
            document.getElementById('pontosO').innerHTML = pontO;
        }
        for(var i = 1; i <= 3; i++){
            for(var j = 1; j <= 3; j++){
                var pos = i + "" + j;
                document.getElementById(pos).setAttribute("onclick","");
            };
        };
        document.getElementById('Sltc').innerHTML += "<div id='Botao'></div>";
        document.getElementById('Botao').innerHTML =  "<button onclick='NovoJogo()' id='jogarDnv'>Jogar novamente</div>";
    };
};

function NovoJogo(){
    for(var i = 1; i <= 3; i++){
        for(var j = 1; j <= 3; j++){
            var pos = i + "" + j;
            document.getElementById(pos).setAttribute("onclick","Jogada("+i+""+j+")");
            document.getElementById(pos).innerHTML = ".";
            document.getElementById(pos).style.background = "rgb(56, 93, 255)";
            document.getElementById(pos).style.color = "rgb(56, 93, 255)";
            ganhou = false;
        };
    };
}