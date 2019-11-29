import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mydashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mydashboard:any;
  constructor() { 
    this.mydashboard={};
  }

  ngOnInit() {
    this.mydashboard={
      leads:{
        leadsCount:5,
        showLeads:true,
        leadsList:[
          {'leadId':101, 'name':"Chandan",'email':"cc@jlc",'phone':1234, 'status':"New"},
          {'leadId':102, 'name':"Kumar",'email':"ku@jlc",'phone':5678, 'status':"New"},
          {'leadId':103, 'name':"Rai",'email':"rai@jlc",phone:11223, status:"New"},
          {'leadId':104, 'name':"Manish",'email':"mani@jlc",'phone':32145, 'status':"New"},
          {'leadId':105, 'name':"Raj",'email':"raj@jlc",'phone':67890, 'status':"New"},
        ]
      },

      enrollments:{
        enrollmentCount:9,
        showEnrollments:true,
        enrollmentsList:[
          {'sid':101, 'sname':"Chandan", 'email':"cc@jlc", 'phone':1234, 'course':"Java", 'feepaid':10000, 'feebal':10000},
          {'sid':102, 'sname':"Kumar", 'email':"cc@jlc", 'phone':4321, 'course':"Java", 'feepaid':10000, 'feebal':10000},
          {'sid':103, 'sname':"Rai", 'email':"cc@jlc", 'phone':4433, 'course':"Java", 'feepaid':10000, 'feebal':10000},
          {'sid':104, 'sname':"Manoj", 'email':"cc@jlc", 'phone':55432, 'course':"Java", 'feepaid':10000, 'feebal':10000},
          {'sid':105, 'sname':"Ramesh", 'email':"cc@jlc", 'phone':6789, 'course':"Java", 'feepaid':10000, 'feebal':10000},
          {'sid':106, 'sname':"Dinesh", 'email':"cc@jlc", 'phone':9087, 'course':"Java", 'feepaid':10000, 'feebal':10000},
          {'sid':107, 'sname':"Vikash", 'email':"cc@jlc", 'phone':6543, 'course':"Java", 'feepaid':10000, 'feebal':10000},
          {'sid':108, 'sname':"Puneet", 'email':"cc@jlc", 'phone':7634, 'course':"Java", 'feepaid':10000, 'feebal':10000},
          {'sid':109, 'sname':"Push", 'email':"cc@jlc", 'phone':9056, 'course':"Java", 'feepaid':10000, 'feebal':10000},
        ]
      }
    }
  }

}
