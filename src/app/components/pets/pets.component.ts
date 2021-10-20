import { Component, OnInit } from '@angular/core';
// import { fakeData } from 'src/app/fake-data';
import { petInterface } from 'src/app/pet-interface';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets:petInterface [] = []
  constructor(private petService:PetService) { }

  ngOnInit(): void {
    this.petService.getPets().subscribe(pet => this.pets = pet)
  }

  addFavorite(pet:petInterface){
    pet.favorite = !pet.favorite;
    this.petService.updatePetFav(pet).subscribe();
  }

  deletePet(pet){
    this.petService.deletePet(pet).subscribe( () =>
    (this.pets = this.pets.filter( item => item.id !== pet.id)));
  }

  addPet(pet:petInterface){
   this.petService.addPet(pet).subscribe(pet => this.pets.push(pet))
  }
}
