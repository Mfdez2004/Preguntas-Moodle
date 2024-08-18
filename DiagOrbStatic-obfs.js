    //Este primer script oculará todos los elementos html cuyo nombre sea "elquesoculta"
function DiagOrbStatic(conf, canvasR, electronElegido){
    $(document).ready(function() {
        jQuery("*[name='elqueseoculta']").hide();
        jQuery("*[class='questiontestslink']").hide();
        jQuery("*[class='outcome clearfix']").hide();
        var t0 = 1661983200000; //segundos transcurridos desde epoch hasta 01/09/2022;
        var year = 31622400000; //aÃ±o bisiesto son 31622400000 ms
        var fecha = Date.now() - t0;
        var fechaTope = parseInt(jQuery('#t1').text()); //fechaTope=Date.parse("09/01/2024");
        var fechaMin = fechaTope - year; //
        if ((fecha > fechaTope) || (fecha < fechaMin) || (jQuery('#t1').length < 1) || isNaN(parseInt(jQuery('#t1').text()))) {
            throw "Error2";
        } else {
            // Initiate a Canvas instance
            //var canvasR = new fabric.StaticCanvas("canvasR");
            var electrones = [];
            //var electronElegido = -1;
            const pos = [0, 10, 100, 110, 200, 210, 250, 260, 300, 310, 400, 410, 500, 510, 550, 560, 600, 610, 700, 710, 750, 760, 800, 810, 850, 860, 900, 910, 1000, 1010];
            //const conf = eval('{#configur#}');
            const electronesTotales = conf.length;
            // Initiate a Rect instance
            const orX = 25;
            const orY = 100;
            const txt1s = new fabric.Text('1s', {
                top: orY - 40,
                left: 10 + orX,
                stroke: 'black',
                strokeUniform: true,
                fontFamily: 'Computer Modern',
                fontStyle: 'oblique',
                fontWeight: 'bold',
                fontSize: 26
            });
            const rec1s = new fabric.Rect({
                top: orY,
                left: orX,
                width: 50,
                height: 50,
                fill: '#FFEFD5',
                stroke: '#993300',
                strokeWidth: 3
            });
            const txt2s = new fabric.Text('2s', {
                top: orY - 40,
                left: 10 + orX + 100,
                stroke: 'black',
                strokeUniform: true,
                fontFamily: 'Computer Modern',
                fontStyle: 'oblique',
                fontWeight: 'bold',
                fontSize: 26
            });
            const rec2s = new fabric.Rect({
                top: orY,
                left: 100 + orX,
                width: 50,
                height: 50,
                fill: '#FFEFD5',
                stroke: '#993300',
                strokeWidth: 3
            });
            const txt2p = new fabric.Text('2p', {
                top: orY - 40,
                left: 10 + orX + 250,
                stroke: 'black',
                strokeUniform: true,
                fontFamily: 'Computer Modern',
                fontStyle: 'oblique',
                fontWeight: 'bold',
                fontSize: 26
            });
            const rec2p = new fabric.Rect({
                top: orY,
                left: 200 + orX,
                width: 150,
                height: 50,
                fill: '#FFEFD5',
                stroke: '#993300',
                strokeWidth: 3
            });
            const lin2p1 = new fabric.Line([250 + orX, orY, 250 + orX, orY + 50], {
                stroke: '#993300',
                strokeWidth: 3
            });
            const lin2p2 = new fabric.Line([300 + orX, orY, 300 + orX, orY + 50], {
                stroke: '#993300',
                strokeWidth: 3
            });
            const txt3s = new fabric.Text('3s', {
                top: orY - 40,
                left: 10 + orX + 400,
                stroke: 'black',
                strokeUniform: true,
                fontFamily: 'Computer Modern',
                fontStyle: 'oblique',
                fontWeight: 'bold',
                fontSize: 26
            });
            const rec3s = new fabric.Rect({
                top: orY,
                left: 400 + orX,
                width: 50,
                height: 50,
                fill: '#FFEFD5',
                stroke: '#993300',
                strokeWidth: 3
            });
            const txt3p = new fabric.Text('3p', {
                top: orY - 40,
                left: 10 + orX + 550,
                stroke: 'black',
                strokeUniform: true,
                fontFamily: 'Computer Modern',
                fontStyle: 'oblique',
                fontWeight: 'bold',
                fontSize: 26
            });
            const rec3p = new fabric.Rect({
                top: orY,
                left: 500 + orX,
                width: 150,
                height: 50,
                fill: '#FFEFD5',
                stroke: '#993300',
                strokeWidth: 3
            });
            const lin3p1 = new fabric.Line([550 + orX, orY, 550 + orX, orY + 50], {
                stroke: '#993300',
                strokeWidth: 3
            });
            const lin3p2 = new fabric.Line([600 + orX, orY, 600 + orX, orY + 50], {
                stroke: '#993300',
                strokeWidth: 3
            });

            const txt3d = new fabric.Text('3d', {
                top: orY - 40,
                left: 10 + orX + 800,
                stroke: 'black',
                strokeUniform: true,
                fontFamily: 'Computer Modern',
                fontStyle: 'oblique',
                fontWeight: 'bold',
                fontSize: 26
            });
            const rec3d = new fabric.Rect({
                top: orY,
                left: 700 + orX,
                width: 250,
                height: 50,
                fill: '#FFEFD5',
                stroke: '#993300',
                strokeWidth: 3
            });
            const lin3d1 = new fabric.Line([750 + orX, orY, 750 + orX, orY + 50], {
                stroke: '#993300',
                strokeWidth: 3
            });
            const lin3d2 = new fabric.Line([800 + orX, orY, 800 + orX, orY + 50], {
                stroke: '#993300',
                strokeWidth: 3
            });
            const lin3d3 = new fabric.Line([850 + orX, orY, 850 + orX, orY + 50], {
                stroke: '#993300',
                strokeWidth: 3
            });
            const lin3d4 = new fabric.Line([900 + orX, orY, 900 + orX, orY + 50], {
                stroke: '#993300',
                strokeWidth: 3
            });

            const txt4s = new fabric.Text('4s', {
                top: orY - 40,
                left: 10 + orX + 1000,
                stroke: 'black',
                strokeUniform: true,
                fontFamily: 'Computer Modern',
                fontStyle: 'oblique',
                fontWeight: 'bold',
                fontSize: 26
            });
            const rec4s = new fabric.Rect({
                top: orY,
                left: 1000 + orX,
                width: 50,
                height: 50,
                fill: '#FFEFD5',
                stroke: '#993300',
                strokeWidth: 3
            });
            const electron1 = new fabric.Polyline([{
                x: 0,
                y: 20
            }, {
                x: 10,
                y: 0
            }, {
                x: 10,
                y: 40
            }], {
                top: orY + 5,
                left: orX + 5,
                stroke: 'black',
                strokeWidth: 4,
                fill: 'transparent'
            });

            // Render the Rect in canvas

            canvasR.add(txt1s, rec1s, txt2s, rec2s, txt2p, rec2p, lin2p1, lin2p2, txt3s, rec3s, txt3p, rec3p, lin3p1, lin3p2, txt3d, rec3d, lin3d1, lin3d2, lin3d3, lin3d4, txt4s, rec4s);
            var colorL = '';
            var rotacion = 0;
            var derecha = 0;
            for (var i = 0; i < electronesTotales; i++) {
                colorL = 'black';
                if (i == electronElegido) {
                    colorL = 'red';
                }
                if (conf[i] == 1) {
                    rotacion = (i) % 2 * 180;
                    arriba = orY + 50 - (i + 1) % 2 * 45;
                    derecha = orX + 5 + pos[i] + (i) % 2 * 30;
                    anadeElectronDef(i, colorL, rotacion, arriba, derecha);
                }
                if (conf[i] == -1) {
                    rotacion = (i + 1) % 2 * 180;
                    arriba = orY + 50 - (i) % 2 * 45;
                    derecha = orX + 20 + pos[i] + (i + 1) % 2 * 5;
                    anadeElectronDef(i, colorL, rotacion, arriba, derecha);
                }
            }

            function anadeElectronDef(i, colorL, rotacion, arriba, derecha) {
                var electron = new fabric.Polyline(
                    [{
                            x: 0,
                            y: 20
                        },
                        {
                            x: 10,
                            y: 0
                        },
                        {
                            x: 10,
                            y: 40
                        }
                    ], {
                        top: arriba,
                        left: derecha,
                        stroke: colorL,
                        strokeWidth: 4,
                        fill: 'transparent',
                        angle: rotacion,
                        index: i
                    });
                canvasR.add(electron);
                electrones.push(electron);
            }

        }
    })
}

