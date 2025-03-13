# Librería

Este proyecto contiene la libreira web components

## Requisitos
Antes de comenzar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (normalmente incluido con Node.js)

## Instalación
Clona este repositorio y accede al directorio del proyecto:
```sh
git clone https://github.com/jaimebp07/lit-components
cd lit-components
```

Luego, instala las dependencias del proyecto:
```sh
npm install
```

## Construcción del Proyecto
Para generar los archivos en dist y poder probar en local:
```sh
npm run start:dev
```
Esto generará la carpeta `dist/` con los archivos necesarios para ejecutar el demo.

## Ejecución del Demo
Para servir los archivos generados en `dist/`, usa el siguiente comando:
```sh
npx http-server dist -p 3000
```
Esto iniciará un servidor en el puerto `3000`. Abre tu navegador y visita:
```
http://localhost:3000
```

Si ves una pantalla en blanco, revisa la consola del navegador (`F12` > Consola) para detectar posibles errores.

## Contribución
Si encuentras un problema o tienes sugerencias de mejora, siéntete libre de abrir un _issue_ o enviar un _pull request_.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

