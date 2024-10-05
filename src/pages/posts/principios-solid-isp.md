---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Principios SOLID - Interface Segregation Principle'
pubDate: 2024-09-29
description: 'Aprende el Principio de Segregación de Interfaces (ISP) dentro de los principios SOLID. Descubre cómo diseñar interfaces más específicas y optimizar tu código en desarrollo de software.'
subTitle: 'Principio de Segregación de Interfaces (ISP)'
keywords: 'ISP, Principio de Segregación de Interfaces, principios SOLID, interfaces, programación, código limpio, desarrollo de software, diseño de interfaces'
author: 'domin'
image:
    url: ''
    alt: ''
tags: ["principios-solid", "buenas-practicas", "codigo-limpio", 'ISP']
---

# Principio de Segregación de Interfaces (ISP).

## ¿Qué es?
El **Principio de Segregación de Interfaces** establece que el código no debe verse obligado a depender de métodos que no utiliza. Es decir, una clase no debe implementar una interfaz con métodos que no va a utilizar, sino que solo debe implementar las interfaces con los métodos indispensables.
## Ejemplo.
Alguna vez lo has visto o lo verás, una interfaz que tiene una serie de métodos y se implementa porque quizá son necesarios la gran mayoría pero alguno no, como por ejemplo una interfaz llamada `Animal`.
Esta interfaz implementa lo siguiente:
```php
interface Animal
{
    public function walk();
    public function fly();
    public function swim();
}
```

<br>

Luego ves por ejemplo que hay clases tipo `Dog` que implementan esta inteface pero que cuando llega la hora de implementar el método `fly` lanzan una excepción o hacen cualquier cosa para anular el método.
Obviamente los perros no pueden volar, bueno igual si le atas un jet pack si pero no es el caso más común.
<br>

## Refactor.
Este ejemplo tiene una fácil solución, pues podemos deshacer la interface `Animal` para hacer 3 interfaces distintas y así hacer que los diferentes tipos de animales implementen las que sean necesarías.
Podríamos hacer lo siguiente:

```php
interface Walker
{
    public function walk();
}

interface Flyer
{
    public function fly();
}

interface Swimmer
{
    public function swim();
}
```

<br>

De esta forma, por ejemplo, `Dog` podría implementar fácilmente dos de estas interfaces:
<br>


```php
class Dog implements Walker, Swimmer
{
    public function walk()
    {
    }

    public function swim()
    {
    }
}
```

<br>
Es más, luego imagina que es un Chihuahua 🐕 en cuestión, podrías hacer lo siguiente:
<br>
<br>

```php
class Chihuahua extends Dog implements Shaker
{
    public function shake()
    {
    }
}
```

## ¿Cómo lo detectamos?
Es fácil detectar que algo está mal con este principio, pues simplemente tenemos que estar alerta de que la interfaz no sea demasiado grande o, ya simplemente, de que los métodos que estén definidos en la interfaz no se estén usando.
### Métodos no utilizados o anulados.
Esto es una red flag 🚩 definitiva para detectar estos casos si hace falta, deben hacerse más interfaces para poder hacer que cada clase implemente solo lo necesario.

## Conclusión
En resumen, los métodos de interfaces que son anulados mediante Exceptions o cualquier otra forma, matan gatitos en cualquier parte del mundo cada 10 segundos.
Así que cada vez que veas algo así es que está mal implementado y requiere de un poco de cariño para solventarlo.