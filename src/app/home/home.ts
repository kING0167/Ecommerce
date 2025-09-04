import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home{
  products = [
    {id: 1, name: "Monstera Deliciosa (Swiss Cheese Plant)", price: 15, location: "SM Baguio", image: "assets/monsteraD.webp"},
    {id: 2, name: "Fiddle Leaf Fig (Ficus Lyrata)", price: 25, location: "SM San Fernando", image: "assets/fiddle.webp"},
    {id: 3, name: "Snake Plant (Sansevieria)", price: 10, location: "SM Baguio", image: "assets/snakePlant.jpg"},
    {id: 4, name: "Pothos (Epipremnum Aureum)", price: 5, location: "SM Tarlac", image: "assets/photos.pjpeg"},
    {id: 5, name: "Calathea Orbifolia", price: 18, location: "SM Clark", image: "assets/calathea.webp"},
    {id: 6, name: "ZZ Plant (Zamioculcas zamiifolia)", price: 20, location: "SM Nueva Ecija", image: "assets/zzplant.jpg"},
    {id: 7, name: "Spider Plant (Chlorophytum comosum)", price: 5, location: "SM Pangasinan", image: "assets/spiderplant.webp"},
    {id: 8, name: "Peace Lily (Spathiphyllum)", price: 15, location: "SM Urdaneta", image: "assets/peaceLily.jpg"},
    {id: 9, name: "Rubber Plant (Ficus elastica)", price: 15, location: "SM Pampanga", image: "assets/rubberplant.jpg"},
    {id: 10, name: "Aloe Vera", price: 5, location: "SM Clark", image: "assets/aloeVera.webp"},
    {id: 11, name: "Lavender", price: 10, location: "SM Tarlac", image: "assets/lavender.webp"},
    {id: 12, name: "Philodendron Birkin", price: 22, location: "SM Baguio", image: "assets/philodendron.jpg"},
    {id: 13, name: "Bird of Paradise (Strelitzia)", price: 30, location: "SM Pampanga", image: "assets/birdParadise.webp"},
    {id: 14, name: "Chinese Evergreen (Aglaonema)", price: 12, location: "SM Clark", image: "assets/aglaonema.jpg"},
    {id: 15, name: "Boston Fern (Nephrolepis exaltata)", price: 8, location: "SM San Fernando", image: "assets/fern.webp"},
    {id: 16, name: "Jade Plant (Crassula ovata)", price: 14, location: "SM Pangasinan", image: "assets/jade.webp"},
    {id: 17, name: "Bamboo Palm (Chamaedorea)", price: 18, location: "SM Urdaneta", image: "assets/bambooPalm.jpg"},
    {id: 18, name: "English Ivy (Hedera helix)", price: 9, location: "SM Clark", image: "assets/ivy.jpg"},
    {id: 19, name: "Dumb Cane (Dieffenbachia)", price: 16, location: "SM Baguio", image: "assets/dieffenbachia.webp"},
    {id: 20, name: "Orchid (Phalaenopsis)", price: 25, location: "SM Tarlac", image: "assets/orchid.jpg"},
    {id: 21, name: "Succulent Assorted Pack", price: 12, location: "SM Nueva Ecija", image: "assets/succulent.jpg"},
    {id: 22, name: "Cactus Collection", price: 10, location: "SM Pampanga", image: "assets/cactus.webp"},
    {id: 23, name: "Herb Mix (Basil, Mint, Parsley)", price: 15, location: "SM San Fernando", image: "assets/herbs.jpg"},
    {id: 24, name: "Money Tree (Pachira aquatica)", price: 28, location: "SM Baguio", image: "assets/moneytree.webp"},
    {id: 25, name: "Areca Palm", price: 20, location: "SM Pangasinan", image: "assets/arecaPalm.webp"},
    {id: 26, name: "Anthurium", price: 18, location: "SM Urdaneta", image: "assets/anthurium.jpg"},
    {id: 27, name: "Dracaena Marginata", price: 22, location: "SM Clark", image: "assets/dracaena.webp"},
    {id: 28, name: "Croton (Codiaeum variegatum)", price: 16, location: "SM Pampanga", image: "assets/croton.webp"},
    {id: 29, name: "Banana Plant (Musa)", price: 35, location: "SM Nueva Ecija", image: "assets/bananaPlant.avif"},
    {id: 30, name: "Philodendron Selloum", price: 24, location: "SM Tarlac", image: "assets/philodendronSelloum.webp"}
  ];
}
