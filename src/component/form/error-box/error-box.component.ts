import { Component, Input, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-error-box",
  templateUrl: "./error-box.component.html",
  styleUrls: ["./error-box.component.css"]
})
export class ErrorBoxComponent implements OnInit {
  @Input() message = this.translateService.instant("THE_FIELD_CANNOT_BE_EMPTY");
  @Input() error: boolean;

  ngOnInit() {}
  constructor(private translateService: TranslateService) {}
}
