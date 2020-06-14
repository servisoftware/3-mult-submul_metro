function showValues (meter){

		m =  parseFloat(meter);
		// CALCULAR VALORES

		//Multiplos
		var dam = m / Math.pow(10, 1);
		var hm  = m / Math.pow(10, 2);
		var km  = m / Math.pow(10, 3);
		var em  = m / Math.pow(10, 6);
		var gm  = m / Math.pow(10, 9);

		//Submultipo
		var dm  = m * Math.pow(10, 1);
		var cm  = m * Math.pow(10, 2);
		var mm  = m * Math.pow(10, 3);
		var µm  = m * Math.pow(10, 6);
		var nm  = m * Math.pow(10, 9);


		// PRESENTAR VALORES

		//metro
		$("#m").val(m);
		
		//Multiplos
		$("#gm").val(gm);
		$("#em").val(em);
		$("#km").val(km);
		$("#hm").val(hm);
		$("#dam").val(dam);

		$("#dm").val(dm);
		$("#cm").val(cm);
		$("#mm").val(mm);
		$("#µm").val(µm);
		$("#nm").val(nm);

}


$(function(){
	$("#calcular").click(function(){
		//calculo de multiplos y submultiplos
		var valor   = parseFloat($("#valor").val());
		var unidad = $("#unidad").val();

		console.log(valor + " - " + unidad);

		if (unidad == "gm"){
			m =  valor * Math.pow(10, 9);
		}
		if (unidad == "em"){
			m =  valor * Math.pow(10, 6);
		}
		if (unidad == "km"){
			m =  valor * Math.pow(10, 3);
		}
		if (unidad == "hm"){
			m =  valor * Math.pow(10, 2);
		}
		if (unidad == "dam"){
			m =  valor * Math.pow(10, 1);
		}
		if (unidad == "m"){
			m =  valor ;
		}
		if (unidad == "dm"){
			m =  valor / Math.pow(10, 1);
		}
		if (unidad == "cm"){
			console.log(unidad);
			m =  valor / Math.pow(10, 2);
		}
		if (unidad == "mm"){
			m =  valor / Math.pow(10, 3);
		}
		if (unidad == "µm"){
			m =  valor / Math.pow(10, 6);
		}
		if (unidad == "nm"){
			m =  valor / Math.pow(10, 9);
		}

		showValues (m);

	})
});
