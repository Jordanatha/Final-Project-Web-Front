export class Food {
  	id: number;
	name: string;
	image:string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}