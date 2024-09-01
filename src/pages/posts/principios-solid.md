---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Principios SOLID'
pubDate: 2024-08-10
description: '¿Qué son los principios SOLID?'
author: 'domin'
image:
    url: ''
    alt: ''
tags: ["principios-solid", "buenas-practicas", "codigo-limpio"]
---

<div class="p-4 mb-4 text-sm text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-gray-400" role="alert">
    <div class="pl-4">
        <h2 class="text-2xl font-bold mb-4">Índice</h2>
        <ol class="list-decimal ml-6 space-y-2">
            <li>
                <a href="#qué-son-los-principios-solid" class="text-gray-gray hover:text-gray-800">
                    ¿Qué son los principios SOLID?
                </a>
                <ol class="list-decimal ml-6 space-y-2">
                    <li>
                        <a href="#single-responsibility-principle" class="text-gray-600 hover:text-gray-800">
                            Single Responsibility Principle (SRP)
                        </a>
                    </li>
                    <li>
                        <a href="#openclose-principle" class="text-gray-600 hover:text-gray-800">
                            Open/Close Principle (OCP)
                        </a>
                    </li>
                    <li>
                        <a href="#liskov-substitution-principle" class="text-gray-600 hover:text-gray-800">
                            Liskov Substitution Principle (LSP)
                        </a>
                    </li>
                    <li>
                        <a href="#interface-segregation-principle" class="text-gray-600 hover:text-gray-800">
                            Interface Segregation Principle (ISP)
                        </a>
                    </li>
                    <li>
                        <a href="#dependency-inversion-principle" class="text-gray-600 hover:text-gray-800">
                            Dependency Inversion Principle (DIP)
                        </a>
                    </li>
                </ol>
            </li>
        </ol>
    </div>
</div>

# [¿Qué son los principios SOLID?](#qué-son-los-principios-solid)
Los principios **SOLID** son reglas para escribir código de programación que sea fácil de entender, mantener y extender.

En el entorno profesional del software añadir funcionalidades nuevas puede ser un auténtico drama si el código no está bien planteado desde un inicio.

Los principios **SOLID** vienen para intentar solventar este problema, si nos dignamos a seguirlos, ¡claro!.

¿Y qué es **SOLID**? ¡Lo he leído como 5 veces ya!

**SOLID** es un acrónimo que representa los principios que a continuación vamos a desglosar.

## [Single Responsibility Principle](#single-responsibility-principle)
El **SRP** (Principio de Responsabilidad Única) dice que cada parte del código, por ejemplo, una clase, debe tener una única responsabilidad o razón para cambiar.

**Solo debe tener un único propósito o tarea y además hacerlo bien.**

Por ejemplo, una clase que se encarga de calcular el total de una factura además también tiene una función que "imprime" esta factura incumpliría el **SRP** ya que está haciendo dos cosas distintas.

Para cumplir el **SRP** debemos separar estas funcionalidades en clases distintas.

## [Open/Close Principle](#open-close-principle)
**El código ya escrito debe estar abierto a la extensión pero no a la modificación.**
Es decir, debes poder añadir funcionalidades nuevas pero **NO** modificar el código existente.
- **Abierto**: Puedes agregar nuevas funcionalidades sin modificar el código que ya existe, por ejemplo derivando clases o implementando interfaces.
- **Cerrado**: No debes modificar el código que ya está en funcionamiento para agregar nuevas funcionalidades. Al cumplir esto te aseguras de que la funcionalidad actual se mantenga estable.

Por ejemplo para cumplir este principio **Open/Close** tendríamos que poder crear nuevas clases extendiendo de una clase base sin tener que modificar la clase original.
Esto evitaría fallos en el código que ya está funcionando y facilita el mantenimiento ya que la clase original está intacta.

## [Liskov Substitution Principle](#liskov-substitution-principle)
Las partes intercambiables deben poder funcionar correctamente cuando se reemplaza una por otra.

¿Qué significa esto?

Que **cualquier instancia de una clase derivada debe poder usarse en el lugar de una instancia de su clase base sin alterar el correcto funcionamiento de la aplicación.**

## [Interface Segregation Principle](#interface-segregation-principle)
El Principio de Segregación de Interfaces (ISP) dice que **es mejor tener muchas interfaces pequeñas y específicas, en lugar de una grande que haga de todo.**

Así las clases solo implementan lo que realmente usan y no tienen que cargar con métodos que no usan. 

Un ejemplo rápido sería crear una interfaz para un empleado de un restaurante de comida rápida, se podrían implementar en ella los métodos tomar pedidos, cobrar, preparar la comida, entregar pedidos a domicilio...

Pero salta a la vista que un solo empleado no debería hacer todas esas tareas, por lo que quedaría una interfaz sobredimensionada con métodos que en algunos casos no se van a utilizar.

**Por ello la mejor opción es crear intefaces con solo los métodos que realmente se van a utilizar.**

## [Dependency Inversion Principle](#dependency-inversion-principle)
Este principio dice que en lugar de inyectar dependencias con un tipo concreto se deben inyectar con abstracciones (interfaces o clases abstractas base).
Un módulo de alto nivel no debe depender de módulos de bajo nivel, si no de abstracciones (interfaces o clases abstractas).

Es decir, Inyectar como dependencia la clase `Coche` que implementa la interfaz `Vehículo` no sería lo más correcto, si no que sería mejor inyectar como tipo de dependencia una instancia que implemente la interfaz `Vehículo`.

En las siguientes publicaciones veremos con más detalle cada principio con ejemplos incluídos, ¡nos leemos!