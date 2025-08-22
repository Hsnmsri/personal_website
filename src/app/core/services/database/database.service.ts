import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Database from '../../models/Database.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private databaseUrl: string = "/assets/database/db.json";
  private database: BehaviorSubject<Database | null> = new BehaviorSubject<Database | null>(null)

  constructor() {
    this.loadDatabase();
  }

  /**
   * Get database file
   * @returns
   */
  private async loadDatabase(): Promise<void> {
    try {
      const database = await axios.get('/assets/database/db.json');

      if (!database.data) {
        return;
      }

      this.database.next(database.data as Database);
    } catch (error) {
      return;
    }
  }

  /**
  * Observable stream of database
  */
  getDatabase$(): Observable<Database | null> {
    return this.database.asObservable();
  }
}
