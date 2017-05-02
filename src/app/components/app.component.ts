import { Component, OnInit } from '@angular/core';
import { SecretService } from '../services/secret.service';
import { AdalService } from 'ng2-adal/core';

@Component({
  selector: 'my-app',
  templateUrl: './templates/app.component.html'
})
export class AppComponent implements OnInit {
  name = 'Angular and Typescript quickstart';

  constructor(
    private adalService: AdalService,
    private secretService: SecretService) {
    this.adalService.init(this.secretService.adalConfig);
  }

  ngOnInit(): void {
    this.adalService.handleWindowCallback();
    this.adalService.getUser();
  }
}
