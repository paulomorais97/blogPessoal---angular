import { Component, OnInit } from '@angular/core';
import {faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
import{faLinkedin} from '@fortawesome/free-brands-svg-icons'
import{faFacebook} from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faGithub = faGithub
  faLinkedin = faLinkedin
  faFacebook = faFacebook
  faInstagram = faInstagram


  constructor() { }

  ngOnInit(): void {
  }

}
