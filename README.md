# Minecraft-CSS
Minecraft UI themed CSS framework.

## Project Structure:

```plaintext
/Minecraft.CSS
  ├── /dist
  │   └── minecraft-css-framework-v-1.0.0.css
  ├── /src
  │   ├── /base
  │   │   ├── _reset.css
  │   │   ├── _typography.css
  │   │   ├── _colors.css
  │   │   └── _variables.css
  │   ├── /components
  │   │   ├── _buttons.css
  │   │   ├── _cards.css
  │   │   ├── _forms.css
  │   │   ├── _modals.css
  │   │   └── _navigation.css
  │   ├── /layout
  │   │   ├── _grid.css
  │   │   └── _container.css
  │   ├── /utilities
  │   │   ├── _spacing.css
  │   │   ├── _typography.css
  │   │   ├── _visibility.css
  │   │   └── _colors.css
  │   └── /icons
  │       └── _icons.css
  ├── gulpfile.js
  └── index.html
  ```
---

## Getting Started:

1. **Installation**  
   Clone the repository:
   ```bash
   git clone https://github.com/Jiyath5516F/Minecraft-CSS.git
   ```

2. **Usage**  
   Include the compiled CSS file in your project:
   ```html
   <link rel="stylesheet" href="dist/minecraft-css-framework-v-1.0.0.css">
   ```

   **CDN will available soon**

3. **Customization**  
   Modify any source files in the `/src` directory to customize styles.
   
---

## How to Compile:

1. **Install required packages**
   ```bash
   npm install gulp gulp-concat gulp-postcss postcss cssnano postcss-safe-parser --save-dev
   ```

2. **Create gulpfile.js (in root dir)**  
   ```js
   const gulp = require('gulp');
   const concat = require('gulp-concat');
   const postcss = require('gulp-postcss');
   const cssnano = require('cssnano');
   const safeParser = require('postcss-safe-parser');
   
   gulp.task('styles', function() {
     const plugins = [
       cssnano({
         preset: ['default', {
           discardComments: { removeAll: true },
           normalizeWhitespace: false
         }]
       })
     ];
   
     return gulp.src('src/**/*.css')
       .pipe(concat('minecraft-css-framework-v-1.0.0.css'))
       .pipe(postcss(plugins, { parser: safeParser }))
       .pipe(gulp.dest('dist'));
   });
   
   gulp.task('default', gulp.series('styles'));
```

3. **Compile**  
   ```bash
   npx gulp
```

---
