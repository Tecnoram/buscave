# BuscaVE

MVP inicial para validar una web de descubrimiento local enfocada en Venezuela.

## Lo que ya quedó hecho

- Home enfocada en propuesta de valor
- Búsqueda por texto, ciudad y categoría
- Cards con CTA a WhatsApp e Instagram
- Página individual de negocio
- Formulario para captar negocios
- API routes para búsqueda, clics y submissions
- Schema SQL y seed para Supabase
- Modo demo local si todavía no configuras Supabase

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Supabase
- Zod

## Correr local

```bash
npm install
npm run dev
```

Abre:

- http://localhost:3000

## Configurar Supabase

1. Copia `.env.example` a `.env.local`
2. Llena:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. Ejecuta en Supabase SQL Editor:
   - `supabase/migrations/001_init.sql`
   - `supabase/seed.sql`

## Deploy en Hostinger

Opción recomendada: desplegar como app Node.js conectada a este repo.

1. Sube este proyecto a GitHub.
2. En Hostinger, crea una nueva aplicación Node.js o conecta un deploy desde GitHub.
3. Usa estas opciones de build:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Start command: `npm run start`
4. Configura las variables de entorno en Hostinger:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Asegúrate de que Hostinger use una versión moderna de Node compatible con Next 16.
6. Si todavía no conectas Supabase, la app levanta en modo demo.

## Próximos pasos sugeridos

1. Cargar 30-50 listings reales de Caracas
2. Loggear también `search_logs`
3. Agregar filtros por delivery / pago móvil / verificado
4. Crear dashboard admin mínimo
5. Integrar PostHog o analytics simple

## Idea de validación

- Enfócate en tecnología primero
- Usa Caracas como ciudad inicial
- Convierte todo a clics de WhatsApp
- Mide qué busca la gente y qué no encuentra
