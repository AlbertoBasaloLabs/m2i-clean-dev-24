# Requisitos Funcionales de la Tarjeta de Crédito:

- El sistema debe representar una tarjeta de crédito con tres **parámetros**: un número de tarjeta, una fecha de vencimiento y un código de verificación.

- El sistema debe **validar el número de la tarjeta** eliminando todos los espacios, asegurándose de que tenga 16 dígitos y que contenga solo números. Si la validación falla, el sistema debe lanzar un error.

- El sistema debe **validar la fecha de vencimiento** eliminando todos los espacios, asegurándose de que tenga 5 caracteres, contenga solo números y una barra, y que el mes (los primeros dos dígitos) esté entre 1 y 12. La parte del año debe estar en un futuro cercano. Si la validación falla, el sistema debe lanzar un error.

- El sistema debe **validar el código de verificación** asegurándose de que sea un número entre 100 y 999. Si la validación falla, el sistema debe lanzar un error.

- El sistema debe proporcionar una forma de **obtener la fecha de vencimiento de la tarjeta como un objeto Date**. El formato debe ser YYYY-MM-DD. Agregando el último día del mes a la fecha de vencimiento.

- El sistema debe proporcionar una forma de obtener el **número enmascarado** de la tarjeta con todos los dígitos excepto los últimos cuatro enmascarados con asteriscos. El formato debe ser `\***\* \*\*** \*\*\*\* XXXX`, donde _XXXX_ son los últimos cuatro dígitos del número de la tarjeta.

- Una forma sencilla de **determinar si la tarjeta está caducada** comparando la fecha de vencimiento con la fecha actual.
