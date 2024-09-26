---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Principios SOLID - Sustitución de Liskov'
pubDate: 2024-09-26
description: 'Principio de sustitución de Liskov'
author: 'domin'
image:
    url: ''
    alt: ''
tags: ["principios-solid", "buenas-practicas", "codigo-limpio", 'liskov']
---

# Principio de Sustitución de Liskov.

## ¿Qué es?
El principio de **Sustitución de Liskov** dice que se debe poder reemplazar un objeto de una clase base con una subclase sin afectar al funcionamiento del programa.

> **Las subclases no deben alterar la conducta esperada de la clase base.**

## Ejemplo.
Imagina que tenemos una serie de clases que extienden de **Vehículo**, clase que implementa un método llamado `arrancarMotor`.

```php
class Vehiculo
{
    public function arrancarMotor()
    {
        return "rumm rumm";
    }
}
```
<br>
Implementamos esta subclase, la cuál sería correcta:
<br><br>

```php
class Camión extends Vehiculo
{
    public function arrancarMotor()
    {
    }
}
```

<br>
Todo perfecto porque un camión tiene un motor también, pero imagína que tenemos el siguiente caso:
<br><br>


```php
class Bicicleta extends Vehiculo
{
    public function arrancarMotor()
    {
        throw new Exception("¡Aquí no tenemos motor!");
    }
}
```

En este caso incumpliríamos el principio del LSP porque `Bicicleta` no puede sustituir a `Vehiculo` sin romper la lógica. Porque las bicicletas clásicas no tienen motor, lo que no sigue la lógica de la clase base.

## Refactor.
Para arreglar esta situación en lugar de extender `Bicicleta` de `Vehiculo` deberíamos tener una clase base llamada `VehiculoDeMotor` de la que deben extender únicamente los vehiculos que dispongan de motor.

De esta forma, si reemplazamos la clase base por una subclase o a la inversa, no habrá problemas. Pues tanto clase como subclases comparten la misma lógica.

## ¿Cómo lo detectamos?
- Si la subclase no utiliza métodos de la clase base o lanzan excepciones en su lugar, es una señal clara.