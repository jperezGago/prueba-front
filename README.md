# Prueba técnica

## Descripción del ejercicio

Se trata de implementar un juego clásico; el memory. La mecánica es bastante sencilla:

Al empezar la partida tienes una parrilla de tarjetas vistas del reverso. Las tarjetas contienen una serie de parejas de
imágenes que se colocan de forma aleatoria en cada tirada. Puedes descubrir dos tarjetas a la vez:

* Si las tarjetas son iguales se quedan descubiertas.
* Si las tarjetas son distintas se vuelven a poner del reverso para
  que sigas buscando parejas.
* El juego termina cuando hayas revelado todas las parejas.

## Pasos para preparar el entorno para realizar la prueba

1) Es necesario tener instalado node >= 10 y yarn.
2) Clonas este repo.
3) Ejecutas "yarn" en la carpeta del proyecto.
4) Ejecutas "yarn dev" para comenzar a desarrollar en http://localhost:3000.

## Ramas

* `Main`.

*Se ha usado una rama por cada tarea implementada. Dividiendo la aplicación en pequeñas parcelas de UI y la posterior integración de las mismas.

## Linter y formateador 🕵️‍♂️

* `Eslint` como linter
* `Standard TS` como formateador de código

## Arquitectura de carpetas y guía de estilo de la aplicación 📂

* `assets`: assets de la aplicación. Imágenes de los emojis.
* `views`: vistas de la aplicación. Componentes contenedores de cada una de las vistas, la cual se comunica con los hooks para obtener la lógica de la misma.
* `componentes`: todos los componentes que conforman las vistas de la aplicación. Estos componentes deberían ser lo más dummies posible, sólo con lógica de renderizado si es necesaria, sin nada de lógica de negocio y lo más reutilizables posible. 
* `hooks`: custom hooks de la aplicación. Toda la lógica de negocio y reutilizable por los componentes de la aplicación.
* `utils`: funcionalidades independiente y consumida por los hooks para simplificar la lógica de negocio.
* `index.css`: estilos globales de la aplicación.

## Commits 🗒️

La estrategia seguida se basa en usar como prefijo el nombre de la rama, que describe la funcionalidad que acomete.

## UI 💅

* Se ha utilizado `Tailwind` como se recomendaba en el README.
* Se ha usado `Fontsource` como instalador de fuentes.

## Funcionalidades extras implementadas 😮‍💨

* `Diseño responsive` en la vista del tablero de juego.
* `Persistencia del juego`: por las caracterísiticas de la aplicación, he visto interesante persisitir los datos de la evolución de la partida. Como en el diseño no hay ningún botón para resetar el juego, he usado `localSession` para poder resetear la partida cerrando la pestaña o ventana.
* `Sistema de ranking`: al finalizar cada partida, también se persiste el tiempo demorado. Si se consigue finalizar en menor tiempo que el record histótico, 
en la modal aparecerá el mensaje `¡Enhorabuena, nuevo record!` en vez del mensaje `¡Lo has conseguido!` que se mostrará si no se consigue superar.
* `Animación de giro de cartas`.
* `Confetti` para celebrar el triunfo 🎉

## Tecnologías no implementadas 💥

* `React Query` ya que no existe gestión de estado asíncrono.
* `Estado global` ya que probablemente añadiría más complejidad que problemas solucionaría, debido al tamaño de la aplicación.