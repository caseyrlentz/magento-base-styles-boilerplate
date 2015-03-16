## Magento Base Styles Boilerplate

This project is designed to streamline the process of setting up Magento's base styles. 

### Setup

**1. Install Magento**

**2. Create file structure**

```
/
|
|-- /app
|   `-- /design
|       `-- /frontend
|           `-- /PACKAGE
|               `-- /THEME
|                   |-- /etc
|                   |   `-- theme.xml
|                   `-- /layout
|                       `-- local.xml
|-- /gulp
|   |-- gulpfile.js
|   |-- package.json
|   `-- readme
`-- /skin
    `-- /frontend
        `-- /PACKAGE
            `-- /THEME
                |-- /css
                |-- /fonts
                `-- /src
                    `-- /scss
                        |-- /imports
                        |   |-- _extends.scss
                        |   `-- _variables.scss
                        |-- _imports.scss
                        |-- account.scss
                        |-- base.scss
                        |-- buttons.scss
                        |-- cart.scss
                        |-- footer.scss
                        |-- forms.scss
                        |-- header.scss
                        |-- product.scss
                        |-- reset.scss
                        |-- sprites.scss
                        `-- typography.scss
```

**3. Setup Gulp**

Refer to the documentation in /gulp/readme for details.

**4. Update `_variables.scss`**

Create the theme's color palette and update declared variable values. 

When adding new variable declarations, be mindful to use abstract variable names. `$bg-btn-white` is no longer useful when the color needs to be changed. `$bg-btn-primary` is descriptive and accounts for future changes. 

**5. Update `typography.scss`**

Base64 fonts can be added at the bottom of `typography.scss`. When possible, use a common `font-family` name at various `weights` instead of a naming convention like: `font-family: 'Example-Bold'`. 

**6. `_imports.scss`

The contents of `_imports.scss` should be included at the top of every stylesheet that is added to the theme. In order to ensure that styles are not duplicated across every stylesheet, only **variables and placeholder selectors** can be used within the contents of `_imports.scss`.
