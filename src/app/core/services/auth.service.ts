import { inject, Injectable } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { from, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  fireBaseAuth = inject(Auth);

  register(email: string, username: string, password: string): Observable<void>{
    const promise = createUserWithEmailAndPassword(this.fireBaseAuth, email, password).then((response) => updateProfile(response.user, {displayName: username}))
  
    return from(promise)
  }
}