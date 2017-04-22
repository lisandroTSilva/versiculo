var recognition = new webkitSpeechRecognition();

// var speechRecognitionList = new SpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);
// recognition.grammars = speechRecognitionList;

recognition.continuous = true;
recognition.lang = 'pt-BR';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

recognition.start();

recognition.onresult = function (event) {
    var result = event.results[event.results.length - 1];
    var transcript = event.results[event.results.length - 1][0].transcript;
    buscaVersiculo(transcript);
}

var livros = {
    
"gênesis": "gn",
    "êxodo": "ex",
    "levítico": "lv",
    "números": "nm",
    "deuteronômio": "dt",
    "josué": "js",
    "juízes": "jz",
    "rute": "rt",
    "1 samuel": "1sm",
    "2 samuel": "2sm",

    "primeira samuel": "1sm",
    "primeiro samuel": "1sm",
    "segunda samuel": "2sm",
    "segundo samuel": "2sm",

    "1 reis": "1rs",
    "2 reis": "2rs",
    "1 crônicas": "1cr",
    "2 crônicas": "2cr",
    "esdras": "ed",
    "neemias": "ne",
    "ester": "et",
    "jó": "jó",
    "salmo": "sl",
    "salmos": "sl",
    "provérbios": "pv",
    "eclesiastes": "ec",
    "cânticos": "ct",
    "isaías": "is",
    "jeremias": "jr",
    "lamentações": "lm",
    "ezequiel": "ez",
    "daniel": "dn",
    "oséias": "os",
    "joel": "jl",
    "amós": "am",
    "obadias": "ob",
    "jonas": "jn",
    "miquéias": "mq",
    "naum": "na",
    "habacuque": "hc",
    "sofonias": "sf",
    "ageu": "ag",
    "zacarias": "zc",
    "malaquias": "ml",

    "mateus": "mt",
    "marcos": "mc",
    "lucas": "lc",
    "joão": "jo",
    "atos": "atos",
    "romanos": "rm",
    "1 coríntios": "1co",
    "2 coríntios": "2co",
    "gálatas": "gl",
    "efésios": "ef",
    "filipenses": "fp",
    "colossenses": "cl",
    "1 tessalonicenses": "1ts",
    "2 tessalonicenses": "2ts",
    "1 timóteo": "1tm",
    "2 timóteo": "2tm",
    "tito": "tt",
    "filemom": "fm",
    "hebreus": "hb",
    "tiago": "tg",
    "1 pedro": "1pe",
    "2 pedro": "2pe",
    "1 joão": "1jo",
    "2 joão": "2jo",
    "3 joão": "3jo",
    "judas": "jd",
    "apocalipse": "ap"
}

function buscaVersiculo(pedido) {
    console.log(pedido);
    var regex = /Abrir\s*([a-zA-Z\s]*)\s*(\d*)\s*(Versículo|)\s*(\d*)/i;
    var m;
    if ((m = regex.exec(pedido)) !== null) {
        var livro = livros[m[1].toLowerCase().trim()];
        var capitulo = m[2];
        var versiculo = m[4];
        console.log("https://www.bibliaonline.com.br/acf/" + livro + "/" + capitulo + "/" + versiculo);

        if (livro != undefined && livro.length > 0 && $.isNumeric(capitulo) && $.isNumeric(versiculo)) {

            $('#versiculo').remove();
            $('<iframe />')
                .css({ 'position': 'absolute', 'left': '0', 'right': '0', 'top': '0', 'bottom': '0', 'width': '100%', 'height': '300px' })
                .attr('id', "versiculo")
                .attr('src', "https://www.bibliaonline.com.br/acf/" + livro + "/" + capitulo + "/" + versiculo)
                .appendTo($('body'));
        }
    }
    console.log(m);
}