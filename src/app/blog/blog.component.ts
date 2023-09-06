import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  jokes: any = [];
  locations: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get_jokes().subscribe(
      (data) => {
        this.jokes = data;
      },
      (error) => console.log(error)
    );

    this.apiService.get_locations().subscribe(
      (data) => {
        this.locations = data;
      },
      (error) => console.log(error)
    );
  }
}
