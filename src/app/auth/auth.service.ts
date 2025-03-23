import { Injectable, signal } from '@angular/core';
import { AuthResponse, createClient } from '@supabase/supabase-js';
import { environment } from '../../environment/environment.dev';
import { from, map, Observable } from 'rxjs';
import { User } from '../types/supabase.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  isSignedIn = signal<Boolean>(false);

  register(
    email: string,
    password: string,
    username: string,
    role: string,
    birthday: number,
    address: string,
    gender: string
  ): Observable<AuthResponse> {
    const promise = this.supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          gender,
          role,
          birthday,
          address,
        },
      },
    });

    return from(promise);
  }

  signIn(email: string, password: string): Observable<AuthResponse> {
    const promise = this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    this.isSignedIn.set(true);
    // console.log(this.isSignedIn());
    return from(promise);
  }

  signOut(): void {
    this.isSignedIn.set(false);
    console.log(this.isSignedIn());
    this.supabase.auth.signOut();
  }


  getSession(): Observable<boolean> {
    return from(this.supabase.auth.getSession()).pipe(
      map(({ data }) => {
        const isSignedIn = !!data.session;
        this.isSignedIn.set(isSignedIn);
        return isSignedIn;
      })
    );
  }
  // getUser(): Observable<User> {
  //     const promise = this.supabase.auth.getUser();
  //     return from(promise).pipe(
  //       map((response) => {
  //         return response.data.user || null;
  //       })
  //     );
  //   }
}
