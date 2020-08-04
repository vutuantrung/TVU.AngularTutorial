import { Injectable } from '@angular/core';

// This decorator is used only if this service had dependencies in its contructor
// Ex: constructor(someService: SomeService) { }
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
