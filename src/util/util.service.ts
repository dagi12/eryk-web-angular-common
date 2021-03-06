import {isUndefined} from './JsHelper';

export function requiredProps(...props) {
  for (const item of props) {
    if (isUndefined(item)) {
      throw new Error('attribute is required');
    }
  }
}

function _addZero(item) {
  if (item < 10) {
    return '0' + item;
  }
  return item;
}

export /*@ngInject*/function urlEncodedTransformer(obj) {
  const str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return str.join('&');
}

function _prepareDate(date) {
  const day = date.getDate(), month = date.getMonth() + 1, year = date.getFullYear(), hours = date.getHours();
  return year + '-' + _addZero(month) + '-' + _addZero(day) + '-' + _addZero(hours) + ':00';
}

export function mergeObjects(obj1, obj2, leftToRight) {
  const mergeResult = {};
  if (leftToRight) {
    for (const attrname in obj1) {
      if (obj1.hasOwnProperty(attrname)) {
        obj2[attrname] = obj1[attrname];
      }
    }
    return;
  }
  for (const attrname in obj1) {
    if (obj1.hasOwnProperty(attrname)) {
      mergeResult[attrname] = obj1[attrname];
    }
  }
  for (const attrname in obj2) {
    if (obj2.hasOwnProperty(attrname)) {
      mergeResult[attrname] = obj2[attrname];
    }
  }
  return mergeResult;
}

export function getUrl(fileName) {
  return fileName.replace(/^.*[\\\/]/, '');
}

export class UtilService {

  static addToObjectWithPrefix(prefix, srcObj, destObj) {
    let oldName;
    let newName;
    if (prefix) {
      for (const attrName in srcObj) {
        if (srcObj.hasOwnProperty(attrName)) {
          oldName = UtilService.copy(attrName);
          newName = prefix + oldName[0].toUpperCase() + oldName.substring(1);
          destObj[newName] = srcObj[oldName];
        }
      }
    }
  }

  static copy(primitive) {
    return (function (i) {
      return i;
    }(primitive));
  }


  static prepareDate(date) {
    if (date) {
      return _prepareDate(new Date(date));
    }
    return null;
  }

  static isNumber(val) {
    return /^\d+$/.test(val);
  }

  static getNestedProp(obj, desc) {
    const arr = desc.split('.');
    while (arr.length && obj) {
      const prop = arr.shift();
      if (typeof obj[prop] === 'function') {
        obj = obj[prop]();
      } else {
        obj = obj[prop];
      }
    }
    return obj;
  }

  static deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  static cloneArr(arr) {
    const clonedArr = [];
    for (const item of arr) {
      clonedArr.push(this.deepClone(item));
    }
    return clonedArr;
  }

  static shallowCloneArr(arr) {
    const clonedArr = [];
    for (const item of arr) {
      clonedArr.push(Object.assign({}, item));
    }
    return clonedArr;
  }

}

export function isPreviewOrEdit(mode) {
  return mode === 2 || mode === 3;
}

export function serializeParams(obj: any): string {
  let str = '';
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (str !== '') {
        str += '&';
      }
      str += key + '=' + encodeURIComponent(obj[key]);
    }
  }
  return str;
}
