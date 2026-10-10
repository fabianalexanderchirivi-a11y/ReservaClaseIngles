# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v54.0.0/ before writing any code.

# Bitácora de revisión: ReservaClaseIngles

**Usuario:** Fabian Chirivi
**IP:** (completar)

Esta bitácora recoge las 31 revisiones del proyecto, de la más reciente a la más antigua. Las horas son de Colombia y corresponden al envío de cada mensaje, sin milisegundos; solo se conocen desde el 08/10. Las fechas del 03 al 07/10 son las que figuran en los borradores anteriores.

| N.º | Fecha | Hora | Descripción de lo revisado / cambios sugeridos |
| --- | --- | --- | --- |
| 31 | 08/10/2026 | 21:24 | Revisión de `TabPrincipal.js` con `useSafeAreaInsets`: espacio inferior correcto; quedan el espacio doble con la barra de Detalle y el espacio superior de Reservas y Perfil. |
| 30 | 08/10/2026 | 21:16 | Se pidió reenviar `TabPrincipal`, porque el archivo no llegó con el mensaje. |
| 29 | 08/10/2026 | 21:13 | Barra de pestañas muy abajo: se orientó usar `useSafeAreaInsets` en vez de un margen fijo y se advirtió del espacio doble con la barra de Detalle. |
| 28 | 08/10/2026 | 21:04 | Se confirmó que la separación entre tarjetas la controla el `margin` y no el `padding`; se ajustó `marginBottom` con valores del tema. |
| 27 | 08/10/2026 | 20:54 | Se planificó "Cancelar todas" (función en el contexto, confirmación con `Alert`, botón solo con reservas) y más separación entre las tarjetas de reservas. |
| 26 | 08/10/2026 | 20:49 | Cupos derivados: función en `data/clases.js` (total menos reservas), cancelar solo borra la reserva y las reservas persisten con AsyncStorage; se pidió verificar Detalle y la lista de clases. |
| 25 | 08/10/2026 | 20:46 | Pruebas manuales de reservar, bloquear un horario repetido y cancelar; se propusieron pruebas de cierre completo, cupos, sesión y lista de clases. |
| 24 | 08/10/2026 | 19:11 | Revisión de `ReservasScreen.js` (lista, cancelación con `Alert`, aviso sin sesión): cancelar no devolvía el cupo, parpadeo al cargar, espacio superior y detalles de estilo. |
| 23 | 07/10/2026 | (completar) | Se decidió resolver primero que las reservas no se muestren sin sesión; recordatorio de hooks antes del `return` y de ocultar sin borrar del estado. |
| 22 | 07/10/2026 | (completar) | Dos errores: cupos que no persisten y reservas visibles sin sesión; se orientó una guard clause en Reservas y calcular los cupos desde las reservas. |
| 21 | 07/10/2026 | (completar) | Orientación sobre los cupos: separar el dato original del derivado y calcularlo en un solo lugar. |
| 20 | 07/10/2026 | (completar) | Revisión de `useAlmacenamiento.js` con AsyncStorage: flag `listo` bien usado; los cupos mutados no persisten, `listo` no se usa y la librería contradice la decisión de no instalar más. |
| 19 | 07/10/2026 | (completar) | Sesión sin credenciales mantenida por decisión de alcance, pensando en perfiles futuros; se pidió impedir la sesión sin perfil y definir qué muestra Reservas sin sesión. |
| 18 | 05/10/2026 | (completar) | Revisión de `ReservaContext.js` y `App.js`: Provider bien ubicado y actualizaciones inmutables; `iniciarSesion` sin perfil y `cancelarReserva` sin devolver cupo; `.map()` o `FlatList` para la lista. |
| 17 | 05/10/2026 | (completar) | Regla de horarios sin cruce confirmada; se pidió ajustar el mensaje y documentar que solo detecta coincidencia exacta del texto del horario. |
| 16 | 05/10/2026 | (completar) | Revisión de `DetalleClaseScreen` y `RegistrarScreen`: `forzarRender`, guard clauses, reserva con `claseId`, `onCancelar` y `perfilInicial`; campos bloqueados al editar y validaciones pendientes. |
| 15 | 05/10/2026 | (completar) | Perfil local sin autenticación: una contraseña en memoria no protegería nada; ajustar los textos y revisar los pendientes del perfil. |
| 14 | 05/10/2026 | (completar) | Alerta de reserva confirmada; orden de trabajo: registrar la reserva en el contexto, listar y cancelar con devolución del cupo. |
| 13 | 05/10/2026 | (completar) | Revisión de `useReserva` (hook sobre Context): error fuera del Provider; formato y nombre por mejorar; botón para salir del formulario. |
| 12 | 04/10/2026 | (completar) | Revisión de `TabPrincipal`, `PerfilScreen`, `RegistrarScreen` y reservas: duda sobre el estado compartido en `useReserva`, formulario sin cancelar, `homeKey`, `trim()` y validaciones. |
| 11 | 04/10/2026 | (completar) | Bugs al salir de Perfil y volver con la casita: hipótesis (barra tapada, teclado, `return` anticipado, setter en el render) y `console.log` para diagnosticar. |
| 10 | 04/10/2026 | (completar) | Revisión de `data/perfil.js` con funciones: dónde vive el `null`, `tienePerfilCreado` con `undefined` y foto por defecto dependiente de internet. |
| 9 | 04/10/2026 | (completar) | Revisión de `PERFIL_VACIO`: plantilla distinta del perfil real, regla de "no hay perfil", no mutar la plantilla y decisión sobre la foto. |
| 8 | 04/10/2026 | (completar) | Perfil y reservas en archivos de `data/` aparte de `clases.js`, por una responsabilidad por archivo. |
| 7 | 04/10/2026 | (completar) | Estructura del Perfil: `PerfilScreen` decide con estado, formulario comunicado por props, guardado en `data/perfil.js` y validaciones básicas. |
| 6 | 03/10/2026 | (completar) | `ReservaScreen` reutilizada para listar reservas: se corrigió la observación previa, se sugirió renombrar al plural y revisar la ruta huérfana. |
| 5 | 03/10/2026 | (completar) | Primera revisión de `TabPrincipal`: estado con clave de texto, `NavigationContainer` sin usar, bloques repetidos, safe area y pérdida de estado al cambiar de pestaña. |
| 4 | 03/10/2026 | (completar) | Consulta sobre la "clase" de navegación: se aclaró que es un componente funcional en `navigation/` con `useState`. |
| 3 | 03/10/2026 | (completar) | Revisión de `DetalleClaseScreen` tras la alerta y el bloqueo en 0: bug del cupo sin re-render, horario nulo, doble reserva y estilo. |
| 2 | 03/10/2026 | (completar) | Decisión de no instalar `@react-navigation/bottom-tabs`: barra propia con `useState`; `Alert` es parte de React Native. |
| 1 | 03/10/2026 | (completar) | Contexto y arquitectura: plan de Bottom Tabs, un solo `NavigationContainer`, estado en `data/` y definición de los objetos `reserva` y `perfil`. |

**Capturas o evidencia:** ninguna adjunta todavía; las revisiones sugieren capturas del cupo tras reservar, de las pestañas y del perfil guardado.