import faker from 'faker';
import { Markable } from './Map';

export class User implements Markable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'green';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
        <div>
            <h1>Name: ${this.name}</h1> 
            <h3>Location: { lat: ${this.location.lat}, lng: ${this.location.lng}}</h3>
        </div>
    `;
  }
}
