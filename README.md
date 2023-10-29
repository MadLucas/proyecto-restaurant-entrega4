# MiCocina Restaurant

Este es un sitio web ficticio que ofrece información sobre el restaurante, su menú y la posibilidad de hacer reservas. Además, cuenta con un panel de administración que permite a los empleados del restaurante visualizar las reservas de los clientes de manera eficiente.

## Estructura del Proyecto

El proyecto se organiza de la siguiente manera:

- **public**: Contiene archivos estáticos que se sirven directamente, como imágenes y favicon.

- **src**: Aquí se encuentra el código fuente de la aplicación.

  - **assets**: Carpeta para recursos gráficos, como imágenes y estilos.

  - **components**: Componentes reutilizables de la aplicación.

  - **config**: Configuraciones y variables de entorno.

  - **routes**: Configuraciones de rutas de la aplicación.

  - **views**: Vistas de la aplicación, que representan diferentes páginas.

- **.eslintrc.cjs**: Archivo de configuración para ESLint, una herramienta de linting para mantener el código limpio y consistente.

- **.gitignore**: Archivo que especifica qué archivos y directorios deben ser ignorados por Git.

- **index.html**: El archivo HTML principal de la aplicación.

- **package-lock.json** y **package.json**: Archivos de configuración de Node.js y las dependencias del proyecto.

- **vite.config.js**: Configuración de Vite, un entorno de desarrollo para JavaScript y TypeScript.

## Tecnologías Utilizadas

El proyecto utiliza varias tecnologías y herramientas, incluyendo:

- React.js para construir la interfaz de usuario.
- Vite.js como el entorno de desarrollo.
- ESLint para el linting y el mantenimiento del código.
- HTML y CSS para la estructura y el estilo de la aplicación.
- Git para el control de versiones y colaboración en el proyecto.

## Funcionalidad de Reservas y Panel de Administración

Este proyecto de restaurante ofrece una funcionalidad de reservas y un panel de administración:

### Reservas

- Los clientes pueden utilizar la función de reserva para elegir la fecha, hora y el número de comensales para su visita al restaurante.

- Una vez que un cliente envía una reserva, la información se almacena de manera segura en Firebase, una plataforma de desarrollo de aplicaciones móviles y web.

- Las reservas también pueden incluir detalles adicionales, como preferencias dietéticas o solicitudes especiales, que los clientes pueden proporcionar al realizar la reserva.

- Toda la información de la reserva se guarda en una base de datos de Firebase para su posterior procesamiento y seguimiento.

### Admin

- Los administradores pueden acceder a través de una página específica en el sitio web y autenticarse de manera segura.

- Una vez autenticados, los administradores pueden ver una lista de todas las reservas realizadas, con detalles como la fecha, hora, número de comensales y solicitudes especiales.

- Toda esta funcionalidad se habilita gracias a Firebase, que proporciona un entorno seguro para almacenar y recuperar datos en tiempo real.


lucasfernandezc@outlook.com



