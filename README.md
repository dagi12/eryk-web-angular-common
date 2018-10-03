# eryk-web-angular-common
Common angular componets user by me across js projects.

## Cli update should fix
- form control, updateOn 'blur'

## Webstorm update should fix
- member ordering (arrow funcitons with member function tslint)
- new components are recognized immediately (angular framework service)
- <ng-content> tag is recognized

## Common pitfalls
- watch for polish signs in package.json
- add compileOnSave tsconfig.app.json

## Dependencies 
```json
{
  "ngx-ui-switch": "^1.4.4"
}
```

## Snippets
Decorator
```typescript
export function Validated() {
  return function <T extends Constructor<any>>(constructor: T) {
    return class extends constructor {

    };
  };
}
```

## Common errors
Forget to MakeProvider
```javascript
"Error: No value accessor for form control with unspecified name attribute"
```
Add MakeProvider to the component
```js
ERROR Error: No value accessor for form control with
```

