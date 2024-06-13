---
outline: deep
---
# Easy Docs

## Introducción

Easy Docs es una herramienta diseñada para simplificar la generación de documentos en formato PDF a partir de componentes React. En muchos proyectos, la necesidad de crear documentos PDF, como informes o contratos, representa un desafío considerable. Easy Docs resuelve este problema al permitir que los desarrolladores creen documentos PDF directamente desde componentes React estilizados, eliminando la necesidad de estilizaciones inline. Además, nuestra solución es compatible con Docker, lo que facilita la integración en diversos entornos de desarrollo.

## Objetivo

El objetivo principal de Easy Docs es ofrecer una forma eficiente y sencilla de convertir componentes React en documentos PDF. Esto se logra a través de un endpoint que los desarrolladores pueden utilizar para enviar datos al template definido, generando así el documento deseado.

## Cómo Funciona

El proceso comienza con el desarrollo de un template en React específico para el documento PDF. Dentro de este template, podrás incorporar y estilizar componentes según sea necesario, además de definir propiedades que serán rellenadas con los datos proporcionados. Después de finalizar la creación del template, simplemente envía los datos al endpoint de Easy Docs. El sistema procesará estos datos y devolverá el documento PDF listo.

Para usar Easy Docs, simplemente ejecuta el contenedor Docker y accede al endpoint con los datos requeridos para la generación del documento. Con este enfoque, Easy Docs se posiciona como una solución práctica y versátil para la creación de documentos PDF en cualquier proyecto.