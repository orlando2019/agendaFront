import { Categoria } from './categoria';

export class Contacto {
	id: number;
	nombre: string;
	telefono: number;
	email: string;
	direccion: any;
	imagen: any;
	cotegorias: Categoria[];
}