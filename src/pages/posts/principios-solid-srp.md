---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Principios SOLID - Single Responsibility Principle (SRP)'
pubDate: 2024-08-11
description: 'Conoce el Principio de Responsabilidad Única (SRP), uno de los cinco principios SOLID. Aprende cómo mejorar la claridad, mantenibilidad y testabilidad de tu código dividiendo responsabilidades en clases especializadas.'
keywords: 'principio SRP, SOLID, Responsabilidad Única, código limpio, desarrollo software, buenas prácticas, arquitectura software, mantenibilidad, clases en programación'
subTitle: 'Una clase, una responsabilidad. Mejora la claridad y mantenibilidad del código.'
author: 'domin'
image:
    url: ''
    alt: ''
tags: ["principios-solid", "buenas-practicas", "codigo-limpio", 'single-responsibility-principle']
---

# Single Responsibility Principle (SRP) - Principio de Responsabilidad Única.

## ¿Qué es?
El **SRP** es uno de los cinco principios **SOLID** de la programación orientada a objetos. Este principio dice que una clase de tener una responsabilidad y por lo tanto una razón para cambiar.
Esto entre otras cosas, facilita:
- La reutilización del código.
- Facilidad para testear.
- Código más sencillo de entender y mantener.
## Ejemplo.
Imagina que trabajas en una tienda muy grande como un empleado polifacético.
Haces de todo: repones productos en las estanterías, atiendes a los clientes, cobras en la caja, revisas el stock, haces pedidos, cuadras las cuentas, contactas con distribuidores etc. 

Es bastante probable que exista un empleado con estas tareas, quizá en tiendas pequeñas, pero en una tienda grande se tiende a distribuir las tareas para ganar eficiencia y organización.
Por ejemplo:
<ul class="list-disc pl-4 space-y-2 text-gray-700">
    <li class="text-base">Cajero/a.</li>
    <li class="text-base">Reponedor/a.</li>
    <li class="text-base">Vendedor/a.</li>
</ul>

Repartir las tareas de esta forma también hace que las personas cometan menos fallos.

En la programación pasa algo similar. Si tienes una clase que hace de todo, como tu rol en la tienda, al final se vuelve un punto de fallo único y puede llegar a ser un auténtico caos.

Si algo va mal o hay que cambiar algo, todo el sistema se ve afectado y vulnerable a posibles fallos. Corregir un pequeño problema puede volverse complicado y costoso.

Por eso tu clase **`SuperDependiente`** no debería poder implementar los métodos **Atender**, **Reponer** y **Cobrar**, **CuadrarCuentas**, **RevisarStock**... quedaría algo así:

```php
class SuperDependiente {
    public function atenderCliente() { /* ... */ }
    public function reponerProductos() { /* ... */ }
    public function cobrar() { /* ... */ }
    public function revisarStock() { /* ... */ }
    public function hacerPedidos() { /* ... */ }
    public function cuadrarCuentas() { /* ... */ }
}

$empleadoEjemplar = new SuperDependiente();
```


## Refactor.
Si refactorizamos para cumplir el **SRP** quedaría algo así:

```php
class Vendedor {
    public function atenderCliente() { /* ... */ }
}

class Reponedor {
    public function reponerProductos() { /* ... */ }
}

class Cajero {
    public function cobrar() { /* ... */ }
}

class GestorInventario {
    public function hacerPedidos() { /* ... */ }
}
```
<br>
Con este refactor ganamos:

- **Mantenibilidad**: Es más fácil mantener clases con una sola responsabilidad.
- **Legibilidad**: Código más fácil de entender.
- **Testabilidad**: Código más fácil de testear.

## ¿Cómo lo detectamos?

- **Por el nombre**: Nombres tipo `validateAndProcess` ya se delatan ellos mismos, otros como `Manager`, `Processor`, `Handler` o similares pueden ser sospechosos también de tener más de una responsabilidad.
- **Clases grandes**: Muchos métodos o muy largos pueden estar diciendo que no cumple el **SRP**.
- **Muchas dependencias**: Si tiene un montón de dependencias puede ser también una señal de que no estamos cumpliendo el SRP.
- **Dificil testeo**: Cuando se complica hacer un test también es una señal de que no estamos cumpliendo el SRP.