import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
  FormGroup,
} from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation.service';

@Directive({
  selector: '[matchPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchPasswordDirective,
      multi: true,
    },
  ],
})
export class MatchPasswordDirective implements Validator {
  @Input('matchPassword') MatchPassword: string[] = [];

  constructor(private customValidator: CustomValidationService) {}

  validate(formGroup: FormGroup): ValidationErrors {
    return this.customValidator.MatchPassword(
      this.MatchPassword[0],
      this.MatchPassword[1]
    )(formGroup);
  }
}
