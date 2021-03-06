/**
 * Created by Eryk Mariankowski on 04.07.2017.
 */
function isUndefined(arg) {
  return arg === void 0;
}

function instantiateArr(list, Type) {
  const resultList = [];
  for (const item of list) {
    resultList.push(new Type(item));
  }
  return resultList;
}

function copyParams(src, dest) {
  if (src) {
    for (const attr of Object.keys(src)) {
      if (src.hasOwnProperty(attr)) {
        dest[attr] = src[attr];
      }
    }
  }
}

export function deleteProps(obj, ...props) {
  props.forEach(value => {
    obj[value] = null;
    delete obj[value];
  });
}

export const throwIfMissing = p => {
  throw new Error(`Missing parameter: ${p}`);
};

export function shallowClone(clonedObject) {
  const newObject = Object.assign({}, clonedObject);
  for (const prop in clonedObject) {
    if (clonedObject.hasOwnProperty(prop)) {
      newObject[prop] = clonedObject[prop];
    }
  }
  return newObject;
}

export function download(file: File) {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(file, file.name);
  } else {
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(file);
    elem.download = file.name;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}


export {
  isUndefined,
  instantiateArr,
  copyParams,
};
