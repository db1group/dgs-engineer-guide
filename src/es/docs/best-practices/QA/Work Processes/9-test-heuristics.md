# Heurísticas de Pruebas

La heurística de pruebas de software es un enfoque sistemático para identificar y diseñar casos de prueba basados en principios generales y conocimientos adquiridos a través de la experiencia, apoyándose en patrones comunes y técnicas de resolución de problemas.

Involucra el uso de reglas prácticas y directrices para guiar el proceso de prueba y la selección de casos de prueba relevantes. La heurística de pruebas de software ayuda a encontrar defectos de manera más eficiente, identificar áreas críticas del sistema y mejorar la cobertura de pruebas.

Este documento tiene como objetivo proporcionar algunos consejos sobre cómo probar diversas partes de un software (dependiendo del CONTEXTO de cada producto) utilizando la heurística.

## Archivos y Rutas en el Sistema
- Nombre Largo (>255 caracteres)
- Caracteres Especiales en el Nombre (espacio * ? / \ | < > , . ( ) [ ] { } ; : ‘ “ !@ # $ % ^ &)
- Nombre Inexistente
- Nombre Ya Existente
- Sin Espacio en disco
- Espacio Mínimo en disco
- Protegido contra Escritura
- No Disponible
- Bloqueado
- En Máquina Remota
- Corrompido
- Temporización, Hora y Fecha
- Timeouts
- Diferencia de Hora entre Máquinas
- Cruzando Zonas Horarias
- Días Siempre Inválidos (30 de febrero, 31 de septiembre)
- 29 de febrero en Años No Bisiestos y Bisiestos
- Diferentes Formatos (5 de junio de 2001; 06/05/2001; 06/05/01; 06-05-01; 6/5/2001 12:34)
- Cambios de Horario de Verano
- Ajuste del Reloj hacia Atrás o hacia Adelante

## Números
- Valores límites inferiores y superiores
- Partición de equivalencia
- 0, null, vacío
- Notación científica
- Negativos
- Porcentajes/decimales (0.001, 100.11, etc.)
- Separación por coma
- Formato europeo/americano (1.500,36/1,566.99)
- Ceros a la izquierda
- Redondeo matemático
- Cálculos
- Validación de Edad, suma de fechas, etc.
- Máscaras y formato

## Cadenas
- Largo (255, 256, 257, 1000, 1024, 2000, 2048 o más caracteres)
- Caracteres acentuados (àáâãäåçèéêëìíîðñòôõöö, etc.)
- Caracteres asiáticos
- Delimitadores comunes y caracteres especiales (“ ‘ ` | / \ , ; : & < > ^ * ? Tab)
- Null, vacío
- Espacio único, múltiples espacios, espacio al principio
- Caracteres de fin de línea, salto de línea, etc.
- Inyección de SQL con todas las acciones de inserts, búsqueda, actualización, etc.
- Límites superiores e inferiores
- Concatenación
- Errores de escritura
- Prestar atención a abreviaturas en nombres o caracteres únicos
- Mayúsculas y minúsculas
- Violación de dominios específicos, como dirección de correo electrónico, etc.

## Navegación en Sistemas WEB
- Prestar atención a la heurística de "Archivos..., Hora y Fecha..., Números y Cadenas"
- Volver (Navegador) y atajos de teclado, botones ofrecidos por el sistema
- Actualizar
- Favoritar URL
- Seleccionar páginas favoritas cuando no esté conectado
- Acceder a menús restringidos por URL
- Accesos múltiples
- Prestar atención a rutas mostradas como "migas de pan"
- Funcionamiento de botones
- Redirección de enlaces y botones
- Resoluciones mínimas y máximas
- Diferentes navegadores
- Posicionamiento, alineación de elementos
- Colores, fuentes, estandarización de estilo de escritura o tamaño de elementos
- Tipos de Menús por formato de datos
- Sesión Expirada
- Pop-Ups y Ventanas Nuevas
- Permisos en alertas y modales

## Navegación en APP
- Prestar atención a la heurística de "Archivos..., Hora y Fecha..., Números y Cadenas"
- Volver por gesto/botón nativo del dispositivo y botones ofrecidos por el sistema
- Actualizar (Deslizar hacia abajo)
- Accesos múltiples
- Diferentes plataformas y dispositivos (iOS, Android, Móvil, Tableta)
- Actualizaciones automáticas
- Notificaciones Push
- Ingreso
- Prestar atención a rutas mostradas como "migas de pan"
- Funcionamiento de botones
- Redirección de enlaces y botones
- Resoluciones mínimas y máximas
- Posicionamiento, alineación de elementos
- Colores, fuentes, estandarización de estilo de escritura o tamaño de elementos
- Tipos de Menús por formato de datos
- Teclado abierto por tipo de menú (numérico, alfanumérico)
- Teclado superpuesto a campos de entrada
- Cerrar APP por funciones nativas del dispositivo, navegar entre APPs
- Permiso para funciones del dispositivo (Cámara, Ubicación, Calendario, etc...)

## API
- Prestar atención a la heurística de "Archivos..., Hora y Fecha..., Números y Cadenas"
- Estado y mensajes del Código
- Rendimiento y Carga
- Métodos
- Integración de base de datos e interfaz
- Formato de datos
- Autenticación
- Documentación
- CRUD - Crear, Leer, Actualizar, Eliminar

## Base de Datos
- Prestar atención a la heurística de "Archivos..., Hora y Fecha..., Números y Cadenas"
- Sensible a mayúsculas
- CRUD - Crear, Leer, Actualizar, Eliminar
- Flujo de datos dentro del sistema
