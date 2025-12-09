# Landing Indemnizaciones Abogados

Proyecto creado con [Astro](https://astro.build) para la landing del despacho Indemnizaciones Abogados.

## 🚀 Estructura

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
└── pnpm-lock.yaml
```

## 🧞 Comandos (pnpm)

Ejecuta todo desde la raíz del proyecto:

| Comando                      | Acción                                             |
| :--------------------------- | :------------------------------------------------- |
| `pnpm install`               | Instala dependencias                               |
| `pnpm dev` | Levanta el servidor en `localhost:4321` y lo expone en la red local (`--host`) |
| `pnpm build` | Genera la versión de producción en `./dist/` |
| `pnpm preview`| Previsualiza el build localmente                   |
| `pnpm astro --help`  | Ayuda del CLI de Astro |

> Nota: se desactiva la telemetría de Astro en estos ejemplos para evitar que el CLI intente escribir archivos fuera del proyecto.
>
> Para no depender de variables en cada comando, ejecuta una vez `pnpm astro telemetry disable` (puedes verificar con `pnpm astro telemetry status`) y así el sistema recuerda tu preferencia.


