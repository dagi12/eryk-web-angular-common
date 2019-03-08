import {ModalOverlay} from 'ngx-modialog';


ModalOverlay.prototype.setClickBoundary = function (element) {
  const _this = this;
  let /** @type {?} */ target;
  const /** @type {?} */ elListener = function (event) {
    return target = (event.target);
  };
  const /** @type {?} */ docListener = function (event) {
    if (_this.dialogRef.context.isBlocking || !_this.dialogRef.overlay.isTopMost(_this.dialogRef)) {
      return;
    }
    let /** @type {?} */ current = event.target;
    // on click, this will hit.
    if (current === target) {
      return;
    }
    // on mouse down -> drag -> release the current might not be 'target', it might be
    // a sibling or a child (i.e: not part of the tree-up direction). It might also be a release
    // outside the dialog... so we compare to the boundary element
    do {
      if (current === element) {
        return;
      }
    } while (current.parentNode && (current = current.parentNode));
    _this.dialogRef.dismiss();
  };
  if (!(typeof document === 'undefined' || !document)) {
    this.dialogRef.onDestroy.subscribe(function () {
      const containers = document.getElementsByTagName('bs-modal-container');
      const container = containers[containers.length - 1];
      element.removeEventListener('click', elListener, false);
      element.removeEventListener('touchstart', elListener, false);
      container.removeEventListener('click', docListener, false);
      container.removeEventListener('touchend', docListener, false);
    });
    setTimeout(function () {
      const containers = document.getElementsByTagName('bs-modal-container');
      const container = containers[containers.length - 1];
      element.addEventListener('mousedown', elListener, false);
      element.addEventListener('touchstart', docListener, false);
      container.addEventListener('click', docListener, false);
      container.addEventListener('touchend', docListener, false);
    });
  }
};
