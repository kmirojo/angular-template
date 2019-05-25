import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/info-equipo.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root'
})
export class InfoPaginaService {

	info: InfoPagina = {};
	cargada = false;
	equipo: any[];
	user_img: any;

	constructor(private http: HttpClient, private sanitizer: DomSanitizer) {

		this.cargarInfo();
		this.cargarEquipo();

	}

	private cargarInfo(){
		// Leer el archivo JSON con 'http' -> (Servicio para lectura de json)
		this.http.get('assets/data/data-pagina.json')
			.subscribe((resp: InfoPagina) => {
				this.cargada = true;
				this.info = resp
				console.log(resp);
			})
	}

	private cargarEquipo(){
		// Leer el archivo JSON con 'http' -> (Servicio para lectura de json)
		this.http.get('https://angular-template-ee667.firebaseio.com/equipo.json')
			.subscribe((resp:any[]) => {
				this.equipo = resp;
			})
	}
}
