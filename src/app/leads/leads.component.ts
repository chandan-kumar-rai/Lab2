import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'myleads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {
  @Input() LeadsData;
  @Input() ShowLeads;
  constructor() { }
  ngOnInit() {}

}
