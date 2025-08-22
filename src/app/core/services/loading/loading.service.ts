import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private visibility: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  /**
   * Set new visibility status for loading
   * @param newState Loading visibility new state as boolean
   */
  setVisibility(newState: boolean) {
    this.visibility.next(newState);
  }

  /**
   * Get loading visibility
   * @returns Observable for loading visibility
   */
  getVisibility(): Observable<boolean> {
    return this.visibility.asObservable();
  }
}
