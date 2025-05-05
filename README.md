![NPM Version](https://img.shields.io/npm/v/slugify-lib)
# slugify-lib

Library to convert strings into slugs (URL-friendly strings). Removes accents, special characters, and converts to lowercase.

## Installation
```bash
npm install slugify-lib
```
or
```bash
yarn add slugify-lib
```

## Usage

```ts
import { slugify } from "slugify-lib";

const title = "¡Hola, mundo! Esto es una prueba.";
const slug = slugify(title);

console.log(slug);
```

You can also customize the separator:

```ts
const customSlug = slugify(title, "_");
console.log(customSlug);
```

- Converts to lowercase  
- Removes accents and diacritical marks  
- Replaces non-alphanumeric characters with the specified separator  
- Trims leading/trailing separators