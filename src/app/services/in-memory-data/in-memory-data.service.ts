import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const data = {
      name: 'Srikanth Boddula',
      age: 27,
      email: 'boddulasrikanth45@gmail.com',
      mobile: '+917097703652',
      interests: 'Coding, reading books, swimming, trekking',
      description: `I'm passionate in developing web applications and help businesses thrive. I believe in hard work and being responsible. Hard work can makes lives better.`
    };
    return { myInfo: {success: true, data} };
  }
}
