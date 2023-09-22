# nitsnets
Elaboración de landing para prueba en SASS y con Gulp.js



# Anotaciones sobre la prueba
Hay casos como el menú principal, en los que la fuente al renderizarse no se previsualiza en el mismo peso que el diseño, es por eso que los valores del font-weight en ocasiones pueden no coincidir numéricamente con los valores proporcionados en la plataforma de zeplin. La intención ha sido asemejarse más al diseño del enunciado.
En un caso real aclararía con el diseñador como se ajusta la imagen de "Motivación en cada pisada" en el responsive. Se asume medida relativa aproximada en unidades vh.
Se quita el botón de "anterior" en el slider como en el diseño. Se recomienda mantenerlo por cuestiones de UX.
Formato de imágenes escogidos: jpg para fotografías, svg para iconos, png solo si fondo transparente. Los iconos se han puesto como código svg en caso de ser animados (como el like de las imágenes).
Medidas convertidas de px (como venía en el diseño) a rem por criterios de accesibilidad, a través de una función en SASS.
Se interpretan las marcas destacadas como enlace y el fondo de reebok como efecto de hover (se aclararía con el diseñador)

# Posibles mejoras:
Aplicar la carga de los slider al rescalar la ventana (en lugar de al cargar la página).
Incluir los estilos del plugin slick en la estructura sass.
Añadir las imágenes que se cortan en el diseño (en lugar de repetir imágenes anteriores)
