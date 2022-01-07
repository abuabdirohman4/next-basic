## References Project

Source of Learn [NextJS Basix](https://buildwithangga.com/kelas/nextjs-basic)

### Configuration of Eslint
- [Eslint Plugin Prawito](https://github.com/yannickcr/eslint-plugin-react)
Added Rule
```
"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
"react/react-in-jsx-scope": "off"
```

[ESLint in VSCode not fixing on save](https://stackoverflow.com/questions/62277286/eslint-in-vscode-not-fixing-on-save)

```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"]
 }
 ```