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



