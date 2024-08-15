---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Principios SOLID'
pubDate: 2024-08-10
description: '¿Qué son?'
author: 'domin'
image:
    url: ''
    alt: ''
tags: ["principios-solid", "buenas-practicas", "codigo-limpio"]
---

# [#](#-qué-son-los-principios-solid) ¿Qué son los principios SOLID?
Los principios **SOLID** son reglas para escribir código de programación que sea fácil de entender y mantener y extender.

A menudo en el entorno profesional del software añadir funcionalidades nuevas puede ser un auténtico drama si el código no está bien orquestado desde un inicio.

Los principios **SOLID** vienen para solventar este problema.

**SOLID** es un acrónimo del cuál obtenemos este desglose, el cuál vamos a resumir en este post de una forma muy breve y luego de forma individual vamos a verlos más en profundidad.

## S - Single Responsibility Principle (SRP) - Principio de Responsabilidad Única
El **SRP** dice que cada parte del código, por ejemplo, una clase, debe tener una única responsabilidad.

**Solo debe hacer una cosa y además, hacerlo bien.**

## O - Open/Close Principle (OCP) - Principio de Abierto/Cerrado
**El código ya escrito está abierto a la extensión pero no a la modificación.**
Es decir, debes poder añadir funcionalidades nuevas pero NO modificar el código existente.
- **Abierto**: Puedes agregar nuevas funcionalidades sin modificar el código que ya existe.
- **Cerrado**: No puedes modificar las funciones que ya están en funcionamiento.

Por ejemplo en una clase lo ideal sería poder crear nuevas extendiendo sin tener que modificar la clase original esto evitaría fallos en el código que ya está funcionando y facilita el mantenimiento.

## L - Liskov Substitution Principle (LSP) - Principio de Sustitución de Liskov
Las partes intercambiables deben poder funcionar correctamente cuando se reemplaza por otra.

¿Qué significa esto?

Que **cualquiera de las clases derivadas debe poder usarse en el lugar de sus clases base sin provocar errores.**

## I - Interface Segregation Principle (ISP) - Principio de Segregación de Interfaces
El Principio de Segregación de Interfaces (ISP) dice que **es mejor tener muchas interfaces pequeñas y específicas, en lugar de una grande que haga de todo.**

Así las clases solo implementan lo que realmente usan y no tienen que cargar con métodos que no usan. 

Un ejemplo rápido sería crear una interfaz para un empleado de un restaurante de comida rápida, se podrían implementar en ella los métodos tomar pedidos, cobrar, preparar la comida, entregar pedidos a domicilio...
Pero salta a la vista que un solo empleado no debería hacer todas esas tareas, por lo que quedaría una interfaz sobredimensionada con métodos que en algunos casos no se van a utilizar.

**Por ello la mejor opción es crear intefaces con solo los métodos que realmente se van a utilizar.**

## D - Dependency Inversion Principle (DIP) - Principio de Inversión de Dependencias
Este principio dice que en lugar de inyectar dependencias con un tipo concreto se deben inyectar con abstracciones (interfaces o clases abstractas base).
Es decir, Inyectar como dependencia la clase `Coche` que implementa la interfaz `Vehículo` no sería lo más correcto, si no que sería mejor inyectar como tipo de dependencia la interfaz `Vehículo`.