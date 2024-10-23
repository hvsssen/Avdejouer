import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  favoriteMessage: string | null = null; // Use a property to hold the message

  constructor() {}

  ngOnInit(): void {
    this.checkLikedStatus();
  }

  save(): void {
    localStorage.setItem("liked", "true"); // Store as a string
    this.favoriteMessage = "Merci d'avoir aimé nos produits!"; // Update the message
  }

  checkLikedStatus(): void {
    // Check local storage for 'liked' status
    if (localStorage.getItem('liked') === 'true') {
      this.favoriteMessage = "Merci d'avoir aimé nos produits!";
    }
  }
}
