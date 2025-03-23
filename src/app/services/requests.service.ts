import { Injectable, signal } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environment/environment.dev';
import { from, map, Observable } from 'rxjs';

import { Requests } from '../types/supabase.interfaces';
import { Database } from '../types/database';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  // supabase = createClient<Database>(
  //   environment.supabaseUrl,
  //   environment.supabaseKey
  // );
  public requestsSignal = signal<Requests[]>([]);

  // getRequests(): Observable<Requests[]> {
  //   const promise = this.supabase.from('posts').select('*');
  //   return from(promise).pipe(
  //     map((response) => {
  //       return response.data ?? [];
  //     })
  //   );
  // }
}
