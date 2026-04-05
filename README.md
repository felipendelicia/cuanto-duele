# Cuanto Duele 🍻

Una aplicación web para llevar el control de gastos compartidos entre amigos, especialmente diseñada para situaciones como salidas a bares o reuniones donde se quiere saber cuánto le debe cada persona.

## Características

- ✅ **Agregar nuevos invitados** al sistema con un simple formulario
- ✅ **Asignar gastos individuales** a cada persona (con descripción y monto)
- ✅ **Eliminar invitados** o gastos específicos cuando sea necesario
- ✅ **Exportar a PDF** la lista completa de invitados y sus deudas para compartir o archivar
- ✅ **Interfaz responsiva** que funciona bien en móviles y desktop
- ✅ **Estado persistente** durante la sesión (los datos se mantienen mientras la página está abierta)

## Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript para mayor seguridad y autocompletado
- **Vite** - Bundler moderno y rápido para desarrollo y construcción
- **Styled Components** - Para styling CSS-in-JS con componentes reutilizables
- **react-to-print** - Biblioteca para imprimir/exportar componentes React a PDF
- **ESLint** - Para mantener código limpio y consistente

## Estructura del Proyecto

```
src/
├── components/
│   ├── NewGuest.tsx      # Formulario para agregar nuevos invitados
│   ├── GuestDisplay.tsx  # Muestra info de un invitado y gestiona sus bills
│   ├── GuestContainer.tsx# Contenedor para la lista de invitados
│   ├── ExportPDFButton.tsx # Botón para exportar a PDF
│   └── PageContainer.tsx # Contenedor principal estilizado
├── types.ts              # Definiciones de TypeScript (Guest, Bill)
├── App.tsx               # Componente principal que maneja el estado
├── main.tsx              # Punto de entrada de la aplicación
├── index.css             # Estilos globales
└── vite-env.d.ts         # Declaraciones de tipos para Vite
```

## Cómo Empezar

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd cuanto-duele

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# La aplicación estará disponible en http://localhost:5173
```

### Producción

```bash
# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

## Uso

1. **Agregar un invitado**: Escribe el nombre en el campo de texto y haz clic en "Añadir"
2. **Agregar un gasto**: En la tarjeta de cada invitado, escribe la descripción y el monto del gasto, luego haz clic en el botón correspondiente
3. **Eliminar un invitado**: Usa el botón de eliminar en la tarjeta del invitado
4. **Eliminar un gasto**: Usa el botón de eliminar junto a cada gasto en la tarjeta del invitado
5. **Exportar a PDF**: Haz clic en el botón "Exportar a PDF" para generar un documento imprimible con todos los invitados y sus gastos

## Estado de los Datos

Los datos se mantienen en memoria mientras la aplicación está abierta. Al recargar la página, se perderán todos los invitados y gastos registrados. Esta característica es intencional para un uso temporal durante eventos o reuniones.

## Personalización

Puedes modificar los estilos editando los archivos en la carpeta `src/components/` donde se encuentran los componentes estilizados con Styled Components.

## Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto es de uso libre y abierto. Si lo utilizas en tus reuniones, ¡que la cuenta no te duel demasiado! 😉