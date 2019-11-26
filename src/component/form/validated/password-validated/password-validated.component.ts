import { Component, Injector, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  AbstractValueAccessor,
  MakeProvider
} from "../../input/abstract-value-accessor.component";
import { ValidationService } from "../validation.service";

@Component({
  selector: "app-password-validated",
  templateUrl: "./password-validated.component.html",
  styles: [],
  providers: [MakeProvider(PasswordValidatedComponent)]
})
export class PasswordValidatedComponent extends AbstractValueAccessor {
  @Input() submitted: boolean;
  @Input() label = "Hasło";

  readonly config = {
    empty: this.translateService.instant("THE_PASSWORD_CANNOT_BE_EMPTY"),
    length: this.translateService.instant("THE_PASSWORD_CANNOT_BE_SHORT"),
    specialChar: this.translateService.instant(
      "THE_PASSWORD_MUST_CONTAIN_A_SPECIAL_MARK"
    ),
    digit: this.translateService.instant("PASSWORD_MUST_CONTAIN_DIGIT"),
    upperChar: this.translateService.instant(
      "THE_PASSWORD_MUST_CONTAIN_THE_CAPITAL_LETTER"
    ),
    lowerChar: this.translateService.instant(
      "THE_PASSWORD_MUST_CONTAIN_LOWER_LETTER"
    )
  };

  constructor(
    injector: Injector,
    public validationService: ValidationService,
    private translateService: TranslateService
  ) {
    super(injector);
  }
}
