import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationData } from '../../interface/pagination-data.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute
  ){}

  @Input() paginationData!: PaginationData;
  @Output() pageChange = new EventEmitter<number>();
  @Input() path!: string;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log({params});
    });
  }

  get totalPages(): number {
    return Math.ceil(this.paginationData.total / this.paginationData.limit);
  }

  get currentPage(): number {
    return Math.floor(this.paginationData.skip / this.paginationData.limit) + 1;
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  getPageNumberChunks(): number[][] {
    const pageSize = 5; // Set the chunk size as per your requirement
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
  
    const chunks = [];
    const midPoint = Math.floor(pageSize / 2);
  
    let start = currentPage - midPoint;
    if (start < 1) {
      start = 1;
    }
  
    let end = start + pageSize;
    if (end > totalPages + 1) {
      end = totalPages + 1;
      start = Math.max(end - pageSize, 1);
    }
  
    chunks.push(Array.from({ length: end - start }, (_, j) => start + j));
  
    return chunks;
  }

  onNext(): void {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  onPrevious(): void {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }
}
