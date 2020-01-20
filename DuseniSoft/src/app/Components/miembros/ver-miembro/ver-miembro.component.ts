import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/Modelo/Member';
@Component({
  selector: 'app-ver-miembro',
  templateUrl: './ver-miembro.component.html',
  styleUrls: ['./ver-miembro.component.css']
})
export class VerMiembroComponent implements OnInit {


  miembro : Member;

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

}
