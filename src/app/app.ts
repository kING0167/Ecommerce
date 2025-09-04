import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterModule, CommonModule, RouterLink],  
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
}
