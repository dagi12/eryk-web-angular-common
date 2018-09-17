import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class MyToastService {

  constructor(private toastrService: ToastrService) {
  }

  success(msg: string) {
    this.toastrService.success(msg, null, {});
  }

  error(msg: string) {
    this.toastrService.error(msg, null, {});
  }

}
