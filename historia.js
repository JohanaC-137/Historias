var app = new Vue({
	el: "#app",
	data:{
	    input: "",
	    historias: [
	        {escritor: "Josefa", texto:'Josefa dice "Ágil e intrépida como un guaren de acequia” “hay cosas que uno no sabe cómo chucha pasan. Pero pasan"'},
	        {escritor: "Josefa", texto:'Josefa dice "¡Dime algo! -lo miré -Aweonao."'},
	        {escritor: "Martina", texto:'Martina dice "El primer amor, es amor; el segundo amor, es despecho; el tercero, el cuarto, el quinto y los siguientes, son deporte."'},
	        {escritor: "Martina", texto:'Martina dice "En resumen, estaba entera pitiá, estaba más loca que evangélica en tienda de panderos."'}
	        ],
	    },
	    computed: {
	        historiasJosefa (){
	            return this.historias.filter(historia => historia.escritor.includes("Josefa"))
	        },
	        historiasMartina (){
	            return this.historias.filter(historia => historia.escritor.includes("Martina"))
	        },
	        busqueda () {
	            return this.historias.filter(historia => historia.texto.toLowerCase().includes(this.input.toLowerCase()))
	        }
	    },
	})           
