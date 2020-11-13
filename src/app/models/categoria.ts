import { Contacto } from './contacto';

export class Categoria {
	id: number;
	titulo: string;
	created_at: string;
	updated_at: string;
	contactos: Contacto[];
}