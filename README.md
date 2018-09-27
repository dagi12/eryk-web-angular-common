# eryk-web-angular-common
Common angular componets user by me across js projects.

# Common pitfalls
- watch for polish signs in package.json
- add compileOnSave tsconfig.app.json

# Dependencies 
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
