---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Principios SOLID - Dependency Inversion Principle'
pubDate: 2024-10-05
description: 'Descubre el Principio SOLID de Inversión de Dependencias (DIP) explicado con ejemplos. Aprende cómo detectar y corregir un mal uso del principio en tu código para mejorar su flexibilidad y mantenimiento.'
subTitle: 'Inversión de Dependencias'
keywords: 'DIP, programación, solid, Principios SOLID, Dependency Inversion Principle, Inversión de Dependencias, desarrollo, php, Interfaces, Abstracciones'
author: 'domin'
image:
    url: ''
    alt: ''
tags: ["principios-solid", "buenas-practicas", "codigo-limpio", 'dependency-inversion']
---

# Principio SOLID de Inversión de Dependencias (DIP)
El principio de **Inversión de Dependencias** (**Dependency Inversion Principle - DIP**) es el quinto y último de los principios **SOLID**.
Este principio nos ayudará a crear sistemas más flexibles y fáciles de mantener al desacoplar dependencias entre clases de alto nivel y clases de bajo nivel.

## ¿Qué es?
El principio de **Inversión de Dependencias**, que a partir de ahora lo llamaremos **DIP**, dice que:
- Los módulos de alto nivel no deben depender de los módulos de bajo nivel. Deben depender de abstracciones como **Interfaces** o clases **Abstractas**.
- Las abstracciones no deben depender de los detalles. Los detalles deben depender de las abstracciones.

Esto quiere decir que las clases más importantes (las de alto nivel) no deben tener dependencias directas de clases concretas (de bajo nivel), sino que ambas deben depender de una interfaz o abstracción común.
Esto permite cambiar las implementaciones concretas sin afectar al funcionamiento de la lógica principal.

## Ejemplo
Supongamos que tenemos un sistema de Notificaciones, y de momento vamos a enviar estas notificaciones vía email pero hay planes para implementar en el futuro, notificaciones vía SMS.

```php
class EmailService
{
    public function sendEmail($message)
    {
    }
}
```

```php
class Notification
{
    private EmailService $emailService;

    public function __construct(EmailService $emailService)
    {
        $this->emailService = $emailService;
    }

    public function send($message)
    {
        $this->emailService->sendEmail($message);
    }
}
```
<br>

Hasta aquí, ¿qué tal? todo mal, ¿verdad?
El problema que nos encontramos es que la clase `Notification` depende directamente de `EmailService`, una implementación muy concreta.
Si más adelante queremos enviar los mensajes SMS vamos a tener que modificar la clase `Notification`, rompiendo el principio de versión de dependencias.

## Refactor
Vamos a aplicar el DIP, a ver cómo nos queda el código.

```php
Interface NotificationService
{
    public function send($message);
}
```

```php
class EmailService implements NotificationService
{
    public function send($message)
    {
    }
}
```

```php
class Notification
{
    private NotificationService $notificationService;

    public function __construct(NotificationService $notificationService)
    {
        $this->notificationService = $notificationService;
    }

    public function send($message)
    {
        $this->notificationService->send($message);
    }
}
```

<br>

De esta forma ahora podremos implementar cualquier medio de notificaciones:

```php
$emailService = new EmailService();

$notification = new Notification($emailService);
$notification->send("¡Tienes una notification por email!");
```

<br>

Ahora implementar otros medios de notification sería tan fácil como:

```php
class SMSService implements NotificationService
{
    public function send($message)
    {
    }
}
```

<br>

Y ahora haciendo solo:

```php
$smsService = new SMSService();

$notification = new Notification($smsService);
$notification->send("¡Tienes una notification por SMS!");
```

<br>

¡Ya lo tendríamos!

## ¿Cómo lo detectamos?
Para detectar que no se está cumpliendo el **DIP** podemos fijarnos en las siguientes señales:
- La clase depende de una clase concreta en lugar de una abstracción. (Como el ejemplo que hemos visto).
- Al cambiar una clase de bajo nivel como un servicio, también tienes que modificar clases de alto nivel.
- El código es menos reutilizable porque al final dependes fuertemente de implementaciones muy especificas.