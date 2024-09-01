---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Principios SOLID - Open/Closed'
pubDate: 2024-09-01
description: 'Principio SOLID abierto/cerrado OCP'
author: 'domin'
image:
    url: ''
    alt: ''
tags: ["principios-solid", "buenas-practicas", "codigo-limpio", 'open-closed']
---

# Open/Closed Principle - Principio de abierto/cerrado OCP.

## ¿Qué es?
El principio **Open/Closed** dice que las entidades del software deben estar abiertas a su extensión pero cerradas a su modificación.
Esto quiere decir que para agregar nuevas funcionalidades se debe crear código nuevo sin tener que modificar ya el existente.
Esto reduce un montón la posibilidad de tener errores al añadir funcionalidades nuevas ya que el código existente queda intacto.
## Ejemplo.
Imagina que tenemos un carrito de la compra en la página y queremos vender un ebook. Para venderlo queremos dar al usuario varias opciones de pago: Bizum, PayPal, tarjeta de crédito etc.
Tenemos la clase llamada PaymentProcessor que se va a encargar de esta tarea:
```php
class PaymentProcessor {
    public function process($paymentMethod) {
        if ($paymentMethod === 'credit_card') {
            echo "Processing credit card payment";
        } elseif ($paymentMethod === 'paypal') {
            echo "Processing PayPal payment";
        } elseif ($paymentMethod === 'bizum') {
            echo "Processing Bizum payment";
        }
    }
}
```
En este código cada vez que queramos añadir un nuevo medio de pago vamos a tener que modificar este código inflingiendo el OCP.

### Refactor
Para respetar el OCP haremos una refactorización y el código quedaría tal que así:
```php
interface PaymentMethod {
    public function processPayment();
}

class CreditCardPayment implements PaymentMethod {
    public function processPayment() {
        echo "Processing credit card payment";
    }
}

class BizumPayment implements PaymentMethod {
    public function processPayment() {
        echo "Bizum payment";
    }
}

class PayPalPayment implements PaymentMethod {
    public function processPayment() {
        echo "Processing PayPal payment";
    }
}

class PaymentProcessor {
    public function process(PaymentMethod $paymentMethod) {
        $paymentMethod->processPayment();
    }
}

// Ejemplo de uso
$paymentProcessor = new PaymentProcessor();

$creditCardPayment = new CreditCardPayment();
$paymentProcessor->process($creditCardPayment);

$paypalPayment = new PayPalPayment();
$paymentProcessor->process($paypalPayment);

$bizumPayment = new BizumPayment();
$paymentProcessor->process($bizumPayment);
```

## ¿Cómo lo detectamos?
Para detectar incumplimientos del principio **Open/Closed** nos podemos fijar en lo siguiente:
### Uso excesivo de condicionales en el código (if, else if, switch...)
Es muy común ver esta estructura de condicionales en el código, si existe una condición if con bastantes elseif es una clara señal de que se está incumpliendo este principio.
Para añadir o para retirar se va a tener que modificar este código.
### La clase sufre muchas modificaciones.
Si hay que modificar muchas veces una misma clase, es una señal de que podría estar incumpliendo el **OCP**.
### Clases que tienen multiples tipos de comportamiento.
Por ejemplo una clase que está preparada para exportar reportes en varios formatos PDF, CSV, HTML, Markdown en un solo método.
### Dependencias de tipos concretos en lugar de abstractos.
Si tiene dependencias de algún tipo concreto como por ejemplo `BizumPayment` en lugar de `PaymentMethod`.
### Incumplimiento del principio de Sustitución de Liskov (LSP)
El **OCP** y el **LSP** están relacionados, si no se puede sustituir una clase hija de su clase base es bastante probable que se esté incumpliendo el **OCP**.
### Si es complicado agregar nuevas funcionalidades sin modificar el código existente.
Si siempre hay que modificar el código existente para añadir funcionalidades, es una señal clara de que se incumple el **OCP**.
Lo ideal para cumplir el **OCP** es que al añadir funcionalidades nuevas no se deba modificar el código existente.
### No se usan ciertos patrones de diseño.
NO usar los patrones de diseño Strategy, Estate o Factory pueden ser pistas de que no se está respetando el **OCP**.
Estos patrones son ideales para añadir nuevas funcionalidades sin modificar el código existente.