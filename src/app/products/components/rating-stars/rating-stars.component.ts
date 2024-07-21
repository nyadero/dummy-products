import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css']
})
export class RatingStarsComponent implements OnInit{
  maxStars: number = 5;
  stars!: number[];
  @Output() valueChange = new EventEmitter<number>();
  @Input() selectedValue: number = 0;
  @Input() isNewRating: boolean = false;
  @Input() currentRating!: number;

  constructor() {
    this.stars = Array(this.maxStars).fill(0).map((x, i) => i + 1);
  }

  ngOnInit(): void {
    if (this.isNewRating) {
      this.selectedValue = this.currentRating;
    }
  }

  rate(value: number) {
    this.selectedValue = value;
    this.valueChange.emit(this.selectedValue);
  }

  
}