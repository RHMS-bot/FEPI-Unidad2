[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

# Recurso Didáctico Digital para la asignatura de Formulación y Evaluación de Proyectos Informáticos

This work is licensed under a [GPL v3](https://www.gnu.org/licenses/gpl-3.0) software license and a
[Creative Commons Attribution-NonCommercial-NoDerivs 4.0 International License][cc-by-nc-sa] content license.

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

## Reglas para el tipo de ramas

Los tipos de ramas se clasificarán de la siguiente manera:

- `feature`: Para incorporar nuevas características al recurso.
- `hotfix`: Para arreglos rápidos desde el recurso desplegado.
- `bugfix`: Para arreglos desde el desarrollo del recurso.
- `release`: Para el despliegue de una nueva versión del recurso.

## Comandos para git

Para poder crear una branch desde develop (desde la terminal), se debe asegurar que se encuentra uno en develop, para esto escribir:

```bash
git branch
```

Después debes actualizar develop:

```bash
git pull
```

El comando para crear la branch es:

```bash
git checkout -b branch_type/short_user_name-short_description`
```

Una vez que tengas los cambios commiteados, puedes hacer push con:

```bash
git push -u origin branch_type/short_user_name-short_description`
```
## Despliegue en GitHub Pages

Para poder desplegar los cambios que se han hecho en `develop` para GitHub pages, es necesario que estos cambios estén en `master`, para esto, debes crear un merge request desde develop a master (recomiendo hacerlo desde el dashboard de GitHub), una vez que el merge se ha hecho (JAMÁS BORRAR LA RAMA DEVELOP EN EL MERGE REQUEST, ¡¡¡¡¡JAMÁS!!!!!) desde la terminal, debes cambiarte a la branch `master` y una vez que te encuentres en dicha rama, debes realizar un deploy con el siguiente comando:

## NG

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
