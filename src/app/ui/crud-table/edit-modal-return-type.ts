/**
 * Created by Eryk Mariankowski on 10.03.2017.
 */


declare type EditModalReturnType = 'UPDATE' | 'DEACTIVATE' | 'ACTIVATE' | 'DELETE' | 'SAVE_ACTIVATE';

export class EditModalResult {

  constructor(public returnType: EditModalReturnType, public result?) {
  }

}
