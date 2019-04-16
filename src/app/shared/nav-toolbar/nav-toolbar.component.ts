import { Component } from "@angular/core";

import { Router } from "@angular/router";

@Component({
  selector: "app-nav-toolbar",
  styleUrls: ["./nav-toolbar.component.sass"],
  templateUrl: "./nav-toolbar.component.html"
})
export class NavToolbarComponent {
  protected userConnected: boolean = false;

  public constructor(private router: Router) {}

  protected redirect(link: string) {
    this.router.navigateByUrl(link);
  }
}
