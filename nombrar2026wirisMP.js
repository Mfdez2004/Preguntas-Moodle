    function dibuja(canvasR, canvasStr, nonEditable, inpTxt, inpTxt10) {
        jQuery("*[name='elqueseoculta']").hide();
        jQuery("*[class='questiontestslink']").hide();
        //var formulaObj = jQuery('[id="formula-' + canvasStr + '"]');
        //var nombre = formulaObj.children()[0].name;
        //var inpTxt = jQuery("[name='" + nombre + "']");
        if (!nonEditable) {
            var rect = new fabric.Rect({
                left: 50,
                top: 100,
                width: 700,
                height: 50,
                stroke: "red",
                strokeWidth: 2,
                originX: "left",
                originY: "top",
                "selectable": false,
                rx: 20,
                ry: 20,
                fill: 'transparent',
                id: Date.now()
            });
            var textbox = new fabric.Textbox("Nombre de la sustancia", {
                left: rect.left + 20,
                top: rect.top + 10,
                width: rect.width - 45,
                height: 30,
                fontSize: 24,
                fill: "black",
                backgroundColor: "#ffffff",
                borderColor: "#9181fc",
                //@ts-ignore
                originalWidth: rect.width - 35,
                originalTop: rect.top + 30,
                padding: 5,
                hoverCursor: "pointer",
                id: Date.now()
            });
            textbox.on('moving', function() {
                textbox.left = rect.left + 20;
                textbox.top = rect.top + 10;
            });
            var firstTime11 = true;
            canvasR.on("mouse:down", function(options) {
                var editar = false;
                if (options.target && options.target.type === "textbox") {
                    let showControls = false;
                    editar = true;
                    rect.stroke = 'blue';
                    options.target.setControlsVisibility({
                        mtr: showControls,
                        tr: showControls,
                        tl: showControls,
                        bl: showControls,
                        br: showControls
                    });
                    textbox.left = rect.left + 20;
                    textbox.top = rect.top + 10;
                    if (firstTime11) {
                        textbox.text = '';
                        firstTime11 = false;
                    }
                    //console.log(options.target);
                    //options.target.setCoords();
                    canvasR.requestRenderAll();
                } else {
                    rect.stroke = 'red';
                }
                canvasR.requestRenderAll();
            });

            canvasR.on("key:down", function(options) {
                if (options.target && options.target.type === "textbox") {
                    let showControls = false;
                    rect.stroke = 'blue';
                }
            });


            canvasR.on("mouse:up", function() {
                //rect.stroke='red';
            });

            canvasR.on("text:changed", function(options) {
                var textbox = options.target;
                textbox.bringToFront();
                rect.stroke = 'blue';
                var texto = textbox.text;
                var texto2 = texto.split("(");
                var sep = "";
                var cola = "";
                if (texto2.length > 1) {
                    sep = "(";
                    cola = texto2[1];
                }
                texto = texto2[0].toLowerCase() + sep + cola;
                texto = texto.trim().replace(/\s\s+/g, ' ');
                texto = texto.replaceAll(" (", "(");
                const listaMal = ["cinc", "circonio", "telurio", "volframio"];
                const listaBien = ["zinc", "zirconio", "teluro", "wolframio"];
                for (let i=0; i<listaMal.length; i++) {
                    texto= texto.replace(listaMal[i], listaBien[i]);
                }
                //texto= texto.replace("cinc", "zinc");
                //texto= texto.replace("circonio", "zirconio");
                //texto= texto.replace("telurio", "teluro");
                //texto= texto.replace("volframio", "wolframio");
                //texto = texto.replaceAll(") ", ")");
                var regex = /[^a-zA-Z\(\)\[\] áéíóúÁÉÍÓÚñÑüÜ0-9\+\-]/g
                var texto2 = texto.replaceAll(regex, "");
                var prueba = texto.split(" ");
                const palabrasConTilde = ["Hidrógeno", "Nitrógeno ", "Oxígeno ", "Flúor ", "Neón ", "Fósforo ", "Argón ", "Níquel ", "Arsénico ", "Xenón ", "Radón ", "Ácido", "Óxido", "Peróxido", "Hidróxido", "clórico", "perclórico", "brómico", "perbrómico", "yódico", "peryódico", "sulfúrico", "selénico", "telúrico", "nítrico", "fosfórico", "arsénico", "carbónico", "silícico", "mangánico", "permangánico", "crómico", "dicrómico"];
                const palabrasTilde = ["Hidrogeno", "Nitrogeno", "Oxigeno", "Fluor", "Neon", "Fosforo", "Argon", "Niquel", "Arsenico", "Xenon", "Radon", "Acido", "Oxido", "Peroxido", "Hidroxido", "clorico", "perclorico", "bromico", "perbromico", "yodico", "peryodico", "sulfurico", "selenico", "telurico", "nitrico", "fosforico", "arsenico", "carbonico", "silicico", "manganico", "permanganico", "cromico", "dicromico"];
                var tilde = false;
                for (var a = 0; a < prueba.length; a++) {
                    for (var b = 0; b < palabrasTilde.length; b++) {
                        if (prueba[a] == palabrasTilde[b].toLowerCase()) {
                            tilde = true;
                        }
                    }
                }
                //console.log("Lleva tilde="+tilde);
                //console.log("Tecla: "+ options);
                inpTxt.value = texto2;
                inpTxt10.value = textbox.text;
                canvasR.renderAll();
            });



            //var canvas8 = new fabric.Canvas("canvas8");

            // Render the Textbox on Canvas

            //const canvas14ca = new fabric.Canvas("canvas14ca");
            canvasR.setDimensions({
                width: 800,
                height: 200
            });
            canvasR.uniformScaling = false;
            canvasR.preserveObjectStacking = true;
            let rectHeight = 50;

            rect.hasBorders = false;
            var firstTime = true;

            canvasR.add(rect);
            canvasR.add(textbox);
            textbox.hasBorders = false;
            textbox.setControlsVisibility({
                mtr: true,
                tr: true,
                tl: true,
                bl: true,
                br: true
            });
            //textbox.hasBorders=false;

            textbox.set({
                //@ts-ignore
                originalWidth: rect.width,
                originalHeight: 30,
                originalTop: 110
            });



            var lastTextboxY = textbox.top + textbox.getScaledHeight() + 30;




            fabric.IText.prototype.keysMap[13] = 'onEnterKeyPress';
            fabric.IText.prototype.onEnterKeyPress = (e) => {
                console.log('onEnterKeyPress', e);
                //canvas8.discardActiveGroup();
                // this.insertChars(e);
                // fabric.IText.insertChars(e);
                // return true;
                // return e;
                rect.stroke = 'red';
                canvasR.discardActiveObject();
                canvasR.renderAll();
            };
        }
        //}
    }

    function pintaVer(canvasR, canvasStr, inpTxt) {

        //        var t0 = 1661983200000; //segundos transcurridos desde epoch hasta 01/09/2022;
        //       var year = 31622400000; //aÃ±o bisiesto son 31622400000 ms
        //      var fecha = Date.now() - t0;
        //     var fechaTope = parseInt(jQuery('#t1').text()); //fechaTope=Date.parse("09/01/2024");
        //     var fechaMin = fechaTope - year; //
        //      if ((fecha > fechaTope) || (fecha < fechaMin) || (jQuery('#t1').length < 1) || isNaN(parseInt(jQuery('#t1').text()))) {
        //           throw "Error2";
        //       } else {
        jQuery("*[class='rightanswer']").hide();
        jQuery("*[class='outcome clearfix']").hide();
        canvasR.clear();
        canvasR.setDimensions({
            width: 800,
            height: 200
        });
        //var formulaObj = jQuery('[id="formula-' + canvasStr + '"]');
        //var nombre = formulaObj.children()[0].name;
        //var inpTxt = jQuery("[name='" + nombre + "']");
        text2 = "Respuesta correcta";
        color = 'green';
        //var resp = formulaObj.children()[2].value;
        var resp = inpTxt.value;
        var rect = new fabric.Rect({
            left: 50,
            top: 100,
            width: 400,
            height: 50,
            stroke: "red",
            strokeWidth: 2,
            originX: "left",
            originY: "top",
            "selectable": false,
            rx: 20,
            ry: 20,
            fill: 'transparent',
            id: Date.now()
        });
        var text1 = new fabric.Text(resp, {
            left: 70,
            top: 110,
            width: 355,
            height: 30,
            fontSize: 24,
            fill: "black",
            backgroundColor: "#ffffff",
            borderColor: "#9181fc",
            "selectable": false,
        });
        //text1.text = resp;
        text1.hasBorders = false;
        var txt2 = new fabric.Text(text2, {
            top: 30,
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
            "editable": false,
            fontSize: 20
        });
        txt2.hasBorders = false;
        canvasR.add(rect, text1, txt2);
        //     }
    }

    function pintaFal(canvasR, canvasStr, inpTxt, oxoName) {
        //var t0 = 1661983200000; //segundos transcurridos desde epoch hasta 01/09/2022;
        //var year = 31622400000; //aÃ±o bisiesto son 31622400000 ms
        //var fecha = Date.now() - t0;
        //var fechaTope = parseInt(jQuery('#t1').text()); //fechaTope=Date.parse("09/01/2024");
        //var fechaMin = fechaTope - year; //
        //if ((fecha > fechaTope) || (fecha < fechaMin) || (jQuery('#t1').length < 1) || isNaN(parseInt(jQuery('#t1').text()))) {
        //  throw "Error2";
        //} else {
        jQuery("*[class='rightanswer']").hide();
        jQuery("*[class='outcome clearfix']").hide();
        //var formulaObj = jQuery('[id="formula-' + canvasStr + '"]');
        //var nombre = formulaObj.children()[0].name;
        //var inpTxt = jQuery("[name='" + nombre + "']");
        var text2 = "Respuesta incorrecta.\nEl nombre correcto es...";
        var color = 'red';
        var cola = oxoName;
        text2 = text2 + cola;
        //var resp = inpTxt.value;//formulaObj.children()[2].value;
        var resp = (inpTxt && inpTxt.value) ? inpTxt.value : "";
        canvasR.setDimensions({
            width: 800,
            height: 200
        });

        var rect = new fabric.Rect({
            left: 50,
            top: 100,
            width: 400,
            height: 50,
            stroke: "red",
            strokeWidth: 2,
            originX: "left",
            originY: "top",
            "selectable": false,
            rx: 20,
            ry: 20,
            fill: 'transparent',
            id: Date.now()
        });
        var text1 = new fabric.Textbox("Nombre de la sustancia", {
            left: rect.left + 20,
            top: rect.top + 10,
            width: rect.width - 45,
            height: 30,
            fontSize: 24,
            fill: "black",
            backgroundColor: "#ffffff",
            borderColor: "#9181fc"
        });
        text1.text = resp ;
        var txt2 = new fabric.Text(text2, {
            top: 10,
            left: 30,
            originX: 'left',
            originY: 'top',
            stroke: 'black',
            fill: color,
            strokeUniform: true,
            fontFamily: 'Computer Modern',
            fontStyle: 'oblique',
            fontWeight: 'bold',
            "selectable": false,
            fontSize: 20
        });
        txt2.hasBorders = false;
        canvasR.add(rect, text1, txt2);
        //}
    }
