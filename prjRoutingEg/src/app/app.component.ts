import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prjRoutingEg';
  loginsessionuser;
  loginsessionadmin;
  adminemail;
  username;

  ngOnInit() {

    let checklogin = sessionStorage.getItem('email')
    //not empty
    if (checklogin && checklogin == 'admin@gmail.com') //enter role in api 
    {
      this.router.navigate(['admin']);
    } else if (checklogin && checklogin == 'anu@gmail.com') {
      this.router.navigate(['department']);
    } else {
      this.router.navigate(['home']);
    }
  }
  constructor(private router: Router) {

  }
  //part of angular life cycle hook,callback method that performs change -detection
 ngDoCheck() {
    if (sessionStorage.getItem('email')) //localStorage.getItem('email'))
    {
      this.username = sessionStorage.getItem('email');
      if (this.username == 'admin@gmail.com') {
        this.loginsessionadmin = true;
        //this.adminemail=true;
      } else {
        this.loginsessionuser = true;
      }

    } else {
      this.loginsessionadmin = false;
      this.loginsessionuser = false;
    }
  }

 logOff() {

    //localStorage.clear();
    //this.loginsession=false;
    sessionStorage.clear();
    this.loginsessionadmin = false;
    this.loginsessionuser = false;
    this.router.navigate(['/home']);

  }
}
