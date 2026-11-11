---
sidebar_label: DB1 Way
sidebar_position: 1
---

# Forma DB1

La principal medida de progreso es el software funcionando, como dice el Manifiesto Ágil. La deuda técnica lleva a una baja capacidad de entrega, y la prevención viene de dos pilares conectados: **buenas métricas de código** y **aplicación de las mejores prácticas**.

![Deuda técnica](/img/docs/Technical-Debt-1024x535.png)

## Pilar procesos

Los procesos son la forma en que el equipo desarrolla software, en cinco frentes:

- gestión de build & release;
- calidad del código;
- gestión de pruebas;
- monitoreo de aplicaciones;
- desarrollo seguro.

## Pilar métricas

Las métricas dicen dónde poner esfuerzo. Se miden con SonarQube (análisis estático) en los indicadores:

- cobertura de código;
- mantenibilidad;
- densidad de duplicación;
- confiabilidad;
- seguridad;
- revisión de seguridad.

## Cálculo de la salud de ingeniería

- Cada proceso sugerido "concluido" por el equipo puntúa.
- Cada métrica saludable puntúa; cuanto más cerca de la clasificación "A" de SonarQube, más puntos.
- Cada pilar tiene un máximo de 100 puntos.
- La salud de ingeniería es el punto medio (promedio) de los dos pilares.

| Salud | Clasificación |
|---|---|
| >=80% | Saludable |
| >=60% & &lt;80% | Degradado |
| &lt;60% | Insalubres |

El promedio es un indicador que puede ser ingenuo: el equipo debe detallar y combinar los indicadores para un análisis crítico.

HealthPanel, un producto interno de DB1, guarda los procesos y las métricas de todas las bases de código de cada equipo. Todo ingeniero líder, al comenzar con un equipo, aplica las mejores prácticas, gestiona la deuda técnica y es responsable de mantener la salud de ingeniería lo más alta posible.

## Por qué

El código malo lleva a un mal mantenimiento, que lleva a más tiempo y más dinero. El código malo es más caro y perjudica el time to market. Los clientes pagan a DB1 para ser eficiente.

![Tiempo de lectura versus tiempo de escritura de código](/img/docs/Uncle-Bob-Quote-Reading-v-Writing-Time.png)
