# adaptflex

> The adaptive ReasonML Design System

[Quickstart](#quickstart) |
[Documentation](https://nunes22.github.io/adaptflex) |
[What is included](#what-is-included)

## Quickstart

Install it with Yarn or NPM:

```
yarn add @nunes22/adaptflex
```

On your `bsconfig.json`

```json
"bs-dependencies": ["@nunes22/adaptflex"]
```

On your root compnent:

```reasonml
open Nunes22Adaptflex;

[@react.component]
let make = () => {
  <ThemeContext value=Theme.rainbow>
    <Button> "Hello World!"->React.string </Button>
  </ThemeContext>;
};

```

## What is included

### 📦 Components

| Feature    | Category | Description | Unit Tests | Visual Regression Tests |
| ---------- | -------- | ----------- | ---------- | ----------------------- |
| Button     |          |             | ❌         | ❌                      |
| Table      |          |             | ❌         | ❌                      |
| Card       |          |             | ❌         | ❌                      |
| DataGrid   |          |             | ❌         | ❌                      |
| InlineForm |          |             | ❌         | ❌                      |
| Input      |          |             | ❌         | ❌                      |
| OffCanvas  |          |             | ❌         | ❌                      |
| Inline     |          |             | ❌         | ❌                      |
| Stack      |          |             | ❌         | ❌                      |
| Toolbar    |          |             | ❌         | ❌                      |
| Typography |          |             | ❌         | ❌                      |
