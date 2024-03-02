import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  sectionRedierct: BehaviorSubject<number> = new BehaviorSubject<number>(0);
}
