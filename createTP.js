    function createTp(canvasR, canvasStr, nonEditable) {
            var nomCanvas = [];
            var nomInput = [];
            var formulaObj = jQuery('[id="formula-' + canvasStr + '"]');
            var respuestaCorr = "";
            var nombre = formulaObj.children()[0].name;
            var inpTxt = jQuery("[name='" + nombre + "']");

            //results1 = document.getElementById('results-canvasR');
            var modeReview = nonEditable;
            var sera = new fabric.Text("Será...", {
                top: 30,
                left: 150,
                originX: 'left',
                originY: 'center',
                stroke: 'black',
                fill: '#196f3d',
                strokeUniform: true,
                fontFamily: 'Computer Modern',
                fontStyle: 'oblique',
                fontWeight: 'bold',
                "selectable": false,
                fontSize: 26
            });
            sera.hasBorders = false;
            canvasR.add(sera);
            if (inpTxt.attr("readonly") !== undefined) {
                modeReview = true;
                var correcto = false;
                var text2 = "Respuesta incorrecta. La fórmula correcta es ...";
                var color = 'red';
                var correccion = jQuery('[id="formula-' + canvasStr + '"]').parent().parent().parent()[0].lastChild.lastElementChild.children[0].firstChild.className;
                if (correccion == "correct") {
                    text2 = "Respuesta correcta";
                    color = 'green';
                    correcto = true;
                }
                var formulaObj = jQuery('[id="formula-' + canvasStr + '"]');;
                var resp = formulaObj.children()[0].value;
                //var resp = document.getElementById('formula').innerHTML
                var offset = 0;
                var tamano = 26;
                var arriba = 30;
                var izquierda = 250;
                parsetxt(resp);
                var txt2 = new fabric.Text(text2, {
                    top: 450,
                    left: 30,
                    originX: 'left',
                    originY: 'center',
                    stroke: 'black',
                    fill: color,
                    strokeUniform: true,
                    fontFamily: 'Computer Modern',
                    fontStyle: 'oblique',
                    fontWeight: 'bold',
                    "selectable": false,
                    fontSize: tamano
                });
                txt2.hasBorders = false;
                canvasR.add(txt2);
                if (correcto == false) {
                    var respCorr = String('{#form#}');
                    izquierda = 30 + txt2.width + 5;
                    console.log(izquierda);
                    arriba = 450;
                    offset = 0;
                    parsetxt(respCorr);
                }
                canvasR.renderAll();
            }

            function parsetxt(respuesta) {
                var text = respuesta;
                text = text.replaceAll("_", "");
                text = text.replaceAll("{", "}");
                text = text.split("}");
                if (text[text.length - 1] == "}") {
                    text = text.substring(0, text.length - 1);
                }
                var valor = "";
                for (var a = 0; a < text.length; a++) {
                    tamano = 22;
                    offset = 10;
                    valor = text[a];
                    if (isNaN(valor, 10)) {
                        tamano = 26;
                        offset = 0;
                    }
                    escribe(valor);
                }
                canvasR.renderAll();
            }

            function escribe(texto) {
                var txt = new fabric.Text(texto, {
                    top: arriba + offset,
                    left: izquierda,
                    originX: 'left',
                    originY: 'center',
                    stroke: 'black',
                    strokeUniform: true,
                    fontFamily: 'Computer Modern',
                    fontStyle: 'oblique',
                    fontWeight: 'bold',
                    "selectable": false,
                    fontSize: tamano
                });
                canvasR.add(txt);
                izquierda += txt.width;
            }
            if (modeReview != true) {
                var numeroZ2 = 4;
                numeroZ2--;
                var sumar = false;
                var car = 0;
                var valorAnt = 0;
                var valor = 0;
                var sumando = false;
                var respuesta = 'La respuesta es:';
                var userAns = '';
                var texto = '';
                var esSubIndex = false;
                var pulsacion = [],
                    pulsacion2 = [];
                var arriba = 30,
                    izquierda = 200;
                canvasR.selection = false;
                var izqda = 300;
                var altura = 425;
                var simbolos = ["1", "2", "3", "4", "5", "6", "7", "(", ")", "←"];
                var posicion4 = [];
                var pos = [
                    [izqda, altura - 55],
                    [izqda + 55, altura - 55],
                    [izqda + 55 * 2, altura - 55],
                    [izqda + 55 * 3, altura - 55],
                    [izqda + 55 * 4, altura - 55],
                    [izqda + 55 * 5, altura - 55],
                    [izqda + 55 * 6, altura - 55],
                    [izqda + 55 * 7, altura - 55],
                    [izqda + 55 * 8, altura - 55],
                    [izqda + 55 * 9, altura - 55],
                    [izqda + 55 * 10, altura - 55],
                ];
                for (var b = 1; b < 11; b++) {
                    simbolo = simbolos[b - 1];
                    CrearBotones(b, 'beige', b);
                }
                for (var a = 1; a < 89; a++) {
                    CrearElemento(a);
                }

                canvasR.renderAll();

                function borrar() {
                    if (pulsacion2.length > 0) {
                        var objs = canvasR._objects;
                        canvasR.remove(objs[objs.length - 1]);
                        izquierda = posicion4[posicion4.length - 1];
                        console.log(posicion4);
                        posicion4.pop();
                        //izquierda = posicion4[posicion4.length - 1];
                        pulsacion2.pop();
                        userAns = "";
                        for (var a = 0; a < pulsacion2.length; a++) {
                            userAns += pulsacion2[a];
                        }
                        //document.getElementById('formula').innerHTML = userAns;
                        inpTxt.val(userAns);
                        //console.log(posicion4);
                    }
                };

                function CrearBotones(num, color, numList) {

                    num--;
                    if (modeReview != true) {
                        var txt = new fabric.Text(simbolo, {
                            originX: 'center',
                            originY: 'center',
                            stroke: 'saddlebrown',
                            strokeUniform: true,
                            fontFamily: 'Computer Modern',
                            fontStyle: 'oblique',
                            fontSize: 26
                        });
                        const rectang = new fabric.Rect({
                            originX: 'center',
                            originY: 'center',
                            width: 50,
                            height: 50,
                            cornerStyle: 'circle',
                            rx: 10,
                            ry: 10,
                            stroke: 'saddlebrown',
                            strokeWidth: 3,
                            fill: color
                        });
                        var group2 = new fabric.Group([rectang, txt], {
                            left: pos[num][0],
                            top: pos[num][1],
                            tex2: simbolos[num],
                            orden: numList
                        });

                        canvasR.add(group2);
                        group2.lockRotation = true;
                        group2.lockScalingFlip = true;
                        group2.lockScalingX = true;
                        group2.lockScalingX = true;
                        group2.lockMovementX = true;
                        group2.lockMovementY = true;
                        group2.hasBorders = false;
                        group2.setControlsVisibility({
                            mt: false,
                            mb: false,
                            ml: false,
                            mr: false,
                            bl: false,
                            br: false,
                            tl: false,
                            tr: false,
                            mtr: false
                        });
                        group2.objectCaching = false;

                        group2.on('mousedown', anade2);


                        function anade2() {
                            valor = group2.tex2;
                            prev = '';
                            post = '';
                            prev2 = '';
                            post2 = '';
                            if (group2.orden <= 7) {
                                if (sumar = true) {
                                    car++;
                                    valor = parseInt(valor) + parseInt(valorAnt);
                                    valorAnt = valor;
                                    if (car > 1) {
                                        borrar()
                                    }

                                }
                                var prev = '<sub>';
                                var post = '</sub>';
                                var prev2 = '_{';
                                var post2 = '}';
                                sumar = true;
                            } else {
                                valorAnt = 0;
                                sumar = false;
                                car = 0;
                            }
                            //console.log(group2.orden);
                            if (group2.orden == 8 && group2.orden == 9) {
                                prev = '';
                                post = '';
                                prev2 = '';
                                post2 = '';
                                sumar = false;
                                console2.log(prev);
                            }
                            if (group2.orden == 10) {
                                borrar();
                                sumar = false;
                            } else {

                                texto += prev + valor + post;
                                userAns += prev2 + valor + post2;
                                pulsacion.push(prev + valor + post);
                                pulsacion2.push(prev2 + valor + post2);
                                inpTxt.val(userAns);
                                var tamano = 22,
                                    offset = +10;
                                if (group2.orden >= 8) {
                                    tamano = 26,
                                        offset = 0;
                                }

                                if (sumar) {
                                    valor = valor.toString();
                                }
                                var txt = new fabric.Text(valor, {
                                    top: arriba + offset,
                                    left: izquierda + sera.width + 5,
                                    originX: 'left',
                                    originY: 'center',
                                    stroke: 'black',
                                    strokeUniform: true,
                                    fontFamily: 'Computer Modern',
                                    fontStyle: 'oblique',
                                    fontWeight: 'bold',
                                    fontSize: tamano
                                });
                                canvasR.add(txt);
                                posicion4.push(izquierda);
                                izquierda += txt.width; //+5;
                                console.log(pulsacion2);
                                if (num == 7) {
                                    izquierda += 3;
                                }
                            };
                        }
                    }
                }

                function CrearElemento(Z) {
                    const colorH = 'darkorchid';
                    const colorHe = 'cyan';
                    const colorLi = 'orange';
                    const colorB = 'green';
                    const colorF = 'pink';
                    const colorC = 'purple';
                    const colorBe = 'moccasin';
                    const colorAl = '#daf87d';
                    const colorSc = '#ffff00';
                    const izqda = 10;
                    const altura = 10;
                    var simbolos = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "", "", ""];
                    var eValencia = [1, 2, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 3, 4, 5, 6, 7];
                    var pos = [
                        [izqda, altura],
                        [55 * 17 + izqda, altura],
                        [izqda, altura + 55],
                        [izqda + 55, altura + 55],
                        [55 * 12 + izqda, altura + 55],
                        [55 * 13 + izqda, altura + 55],
                        [55 * 14 + izqda, altura + 55],
                        [55 * 15 + izqda, altura + 55],
                        [55 * 16 + izqda, altura + 55],
                        [55 * 17 + izqda, altura + 55],
                        [izqda, altura + 55 * 2],
                        [izqda + 55, altura + 55 * 2],
                        [55 * 12 + izqda, altura + 55 * 2],
                        [55 * 13 + izqda, altura + 55 * 2],
                        [55 * 14 + izqda, altura + 55 * 2],
                        [55 * 15 + izqda, altura + 55 * 2],
                        [55 * 16 + izqda, altura + 55 * 2],
                        [55 * 17 + izqda, altura + 55 * 2],
                        [izqda, altura + 55 * 3],
                        [izqda + 55, altura + 55 * 3],
                        [55 * 2 + izqda, altura + 55 * 3],
                        [55 * 3 + izqda, altura + 55 * 3],
                        [55 * 4 + izqda, altura + 55 * 3],
                        [55 * 5 + izqda, altura + 55 * 3],
                        [55 * 6 + izqda, altura + 55 * 3],
                        [55 * 7 + izqda, altura + 55 * 3],
                        [55 * 8 + izqda, altura + 55 * 3],
                        [55 * 9 + izqda, altura + 55 * 3],
                        [55 * 10 + izqda, altura + 55 * 3],
                        [55 * 11 + izqda, altura + 55 * 3],
                        [55 * 12 + izqda, altura + 55 * 3],
                        [55 * 13 + izqda, altura + 55 * 3],
                        [55 * 14 + izqda, altura + 55 * 3],
                        [55 * 15 + izqda, altura + 55 * 3],
                        [55 * 16 + izqda, altura + 55 * 3],
                        [55 * 17 + izqda, altura + 55 * 3],
                        [izqda, altura + 55 * 4],
                        [izqda + 55, altura + 55 * 4],
                        [55 * 2 + izqda, altura + 55 * 4],
                        [55 * 3 + izqda, altura + 55 * 4],
                        [55 * 4 + izqda, altura + 55 * 4],
                        [55 * 5 + izqda, altura + 55 * 4],
                        [55 * 6 + izqda, altura + 55 * 4],
                        [55 * 7 + izqda, altura + 55 * 4],
                        [55 * 8 + izqda, altura + 55 * 4],
                        [55 * 9 + izqda, altura + 55 * 4],
                        [55 * 10 + izqda, altura + 55 * 4],
                        [55 * 11 + izqda, altura + 55 * 4],
                        [55 * 12 + izqda, altura + 55 * 4],
                        [55 * 13 + izqda, altura + 55 * 4],
                        [55 * 14 + izqda, altura + 55 * 4],
                        [55 * 15 + izqda, altura + 55 * 4],
                        [55 * 16 + izqda, altura + 55 * 4],
                        [55 * 17 + izqda, altura + 55 * 4],
                        [izqda, altura + 55 * 5],
                        [izqda + 55, altura + 55 * 5],
                        [55 * 2 + izqda, altura + 55 * 5],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [55 * 3 + izqda, altura + 55 * 5],
                        [55 * 4 + izqda, altura + 55 * 5],
                        [55 * 5 + izqda, altura + 55 * 5],
                        [55 * 6 + izqda, altura + 55 * 5],
                        [55 * 7 + izqda, altura + 55 * 5],
                        [55 * 8 + izqda, altura + 55 * 5],
                        [55 * 9 + izqda, altura + 55 * 5],
                        [55 * 10 + izqda, altura + 55 * 5],
                        [55 * 11 + izqda, altura + 55 * 5],
                        [55 * 12 + izqda, altura + 55 * 5],
                        [55 * 13 + izqda, altura + 55 * 5],
                        [55 * 14 + izqda, altura + 55 * 5],
                        [55 * 15 + izqda, altura + 55 * 5],
                        [55 * 16 + izqda, altura + 55 * 5],
                        [55 * 17 + izqda, altura + 55 * 5],
                        [izqda, altura + 55 * 6],
                        [izqda + 55, altura + 55 * 6]
                    ];

                    var colores = [colorH, colorHe, colorLi, colorBe, colorB, colorC, colorC, colorC, colorF, colorHe, colorLi, colorBe, colorAl, colorB, colorC, colorC, colorF, colorHe, colorLi, colorBe, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorAl, colorB, colorB, colorC, colorF, colorHe, colorLi, colorBe, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorAl, colorAl, colorB, colorB, colorF, colorHe, colorLi, colorBe, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorSc, colorAl, colorAl, colorAl, colorB, colorF, colorHe, colorLi, colorBe, colorSc, colorSc, colorSc, colorSc];
                    Z--;
                    simbolo = simbolos[Z];
                    numElec = eValencia[Z];
                    electrones = [];
                    //simbolo = "";
                    var txt = new fabric.Text(simbolo, {
                        originX: 'center',
                        originY: 'center',
                        stroke: 'black',
                        strokeUniform: true,
                        fontFamily: 'Computer Modern',
                        fontStyle: 'oblique',
                        fontWeight: 'bold',
                        fontSize: 26
                    });
                    const rectang = new fabric.Rect({
                        originX: 'center',
                        originY: 'center',
                        width: 50,
                        height: 50,
                        fill: colores[Z]
                    });
                    var colorFil = 'black';
                    var encuadrado = false;
                    if (numeroZ2 == Z) {
                        colorFil = 'red';
                        encuadrado = true;
                    }
                    encuadrado = false; //Me quita los encuadrados para no tener problemas 
                    if (encuadrado) {
                        const encuadra = new fabric.Rect({
                            originX: 'center',
                            originY: 'center',
                            width: 55,
                            height: 55,
                            fill: colorFil
                        });
                        encuadrado = false;
                        var group = new fabric.Group([rectang, txt, encuadra], {
                            left: pos[Z][0] - 2.5,
                            top: pos[Z][1] - 2.5
                        });
                    } else {
                        var group = new fabric.Group([rectang, txt], {
                            left: pos[Z][0],
                            top: pos[Z][1],
                            Natomico: Z + 1
                        });
                    }

                    canvasR.add(group);
                    group.on('mousedown', anade);

                    group.lockRotation = true;
                    group.lockScalingFlip = true;
                    group.lockScalingX = true;
                    group.lockScalingX = true;
                    group.lockMovementX = true;
                    group.lockMovementY = true;
                    group.hasBorders = false;
                    group.setControlsVisibility({
                        mt: false,
                        mb: false,
                        ml: false,
                        mr: false,
                        bl: false,
                        br: false,
                        tl: false,
                        tr: false,
                        mtr: false
                    });
                    group.objectCaching = false;

                    function anade() {
                        sumar = false;
                        car = 0;
                        valorAnt = 0;
                        texto = texto + simbolos[group.Natomico - 1];
                        userAns = userAns + simbolos[group.Natomico - 1];
                        pulsacion.push(simbolos[group.Natomico - 1]);
                        pulsacion2.push(simbolos[group.Natomico - 1]);
                        //document.getElementById('formula').innerHTML = texto;
                        var txt = new fabric.Text(simbolos[group.Natomico - 1], {
                            top: arriba,
                            left: izquierda + sera.width + 5,
                            originX: 'left',
                            originY: 'center',
                            stroke: 'black',
                            strokeUniform: true,
                            fontFamily: 'Computer Modern',
                            fontStyle: 'oblique',
                            fontWeight: 'bold',
                            fontSize: 26
                        });
                        canvasR.add(txt);
                        inpTxt.val(userAns);
                        posicion4.push(izquierda);
                        izquierda += txt.width;
                        console.log(izquierda);
                    };
                }
            }
    };
