---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Principios SOLID - Single Responsibility Principle (SRP)'
pubDate: 2024-08-11
description: 'Una clase, una responsabilidad. Mejora la claridad y mantenibilidad del código.'
author: 'domin'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'El logotipo completo de Astro.'
tags: ["principios-solid", "buenas-practicas", "codigo-limpio", 'single-responsibility-principle']
---

# Single Responsibility Principle (SRP) - Principio de Responsabilidad Única.

Imagina que trabajas en una tienda como el mejor empleado, el empleado del mes 4evah.
Eres tan bueno que lo haces todo, hasta el trabajo de tu jefe: repones productos en las estanterías, atiendes a los clientes, cobras en la caja, revisas el stock, haces pedidos, cuadras las cuentas, etc. Eres un "3 en 1" que le ahorra a la tienda contratar a más empleados.

Esto parece una gran idea al principio, pero un día te contagias de COVID (¡por ejemplo!) y no puedes ir a trabajar. Como nadie más sabe hacer todo lo que tú haces, la tienda se ve obligada a cerrar temporalmente. El negocio pierde dinero, y los clientes se van a la competencia.

En la programación, pasa algo similar. Si tienes una clase que hace de todo, como tu rol en la tienda, al final se vuelve un punto de fallo único.

Si algo va mal o hay que cambiar algo, todo el sistema se ve afectado, y corregir un pequeño problema puede volverse complicado y costoso. 

Hay empresas que han quebrado por ello.

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
// Si el empleado no viene, la tienda no funciona
```