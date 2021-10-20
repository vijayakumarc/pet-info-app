import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { fakeData } from '../fake-data';
import { petInterface } from '../pet-interface';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  url = "https://615c35d8c298130017735fdc.mockapi.io/pets"
  constructor(private http:HttpClient) { }

  getPets():Observable<petInterface[]>{
    // const pets = of(fakeData)
    // return pets;

    return this.http.get<petInterface[]>(this.url)
  }

  updatePetFav(pet:petInterface):Observable<petInterface>{
    const updatedURL =  `${this.url}/${pet.id}`
    return this.http.put<petInterface>(updatedURL,pet)
  }

  deletePet(pet:petInterface):Observable<petInterface>{
    const deleteURL = `${this.url}/${pet.id}`;    
    return this.http.delete<petInterface>(deleteURL)
  }

  addPet(pet:petInterface):Observable<petInterface>{
    return this.http.post<petInterface>(this.url,pet)
  }
}
