import { Component } from '@angular/core';
import { UpgradeModule } from "@angular/upgrade/static";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private upgrade: UpgradeModule) { }
  ngOnInit() {
    this.upgrade.bootstrap(document.body, ['phonecatApp']);
  }
  
  title = 'ng10-ng-js';
}
