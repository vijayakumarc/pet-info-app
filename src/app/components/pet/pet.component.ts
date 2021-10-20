import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { petInterface } from 'src/app/pet-interface';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  title:string = 'pet component title'
  constructor() { }
  @Input() pet:petInterface;

  @Output() onAddFavorite: EventEmitter<petInterface> = new EventEmitter();
  @Output() onDeletePet: EventEmitter<petInterface> = new EventEmitter();
  ngOnInit(): void {
  }

  onFavorite(){
    console.log("favorite");
    // this.pet.favorite = !this.pet.favorite

    this.onAddFavorite.emit()
  }
  onDelete(pet){
    // console.log("first",pet);
    // console.log('second',this.pet);
    this.onDeletePet.emit(pet)
  }
}
