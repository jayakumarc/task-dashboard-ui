import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.scss']
})
export class EntityDetailComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  approve(approve: boolean): void {
    this.http.put(
      `/workflow-service/api/process-entities/${this.id}`,
      { "approved": approve }
    ).subscribe();
  }

}
