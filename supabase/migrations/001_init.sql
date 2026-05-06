create extension if not exists pgcrypto;
create extension if not exists pg_trgm;

create table if not exists public.cities (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  state text,
  slug text not null unique,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  city_id uuid not null references public.cities(id) on delete restrict,
  category_id uuid references public.categories(id) on delete set null,
  whatsapp_number text,
  instagram_url text,
  website_url text,
  address_text text,
  delivery_available boolean not null default false,
  pickup_available boolean not null default false,
  payment_mobile boolean not null default false,
  zelle boolean not null default false,
  usdt boolean not null default false,
  cash_usd boolean not null default false,
  verified boolean not null default false,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.listings (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  title text not null,
  slug text not null unique,
  description text,
  category_id uuid references public.categories(id) on delete set null,
  city_id uuid not null references public.cities(id) on delete restrict,
  price_from numeric(12,2),
  currency text,
  in_stock boolean,
  source_type text not null default 'manual',
  source_url text,
  featured boolean not null default false,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.search_logs (
  id uuid primary key default gen_random_uuid(),
  query text not null,
  city_id uuid references public.cities(id) on delete set null,
  category_id uuid references public.categories(id) on delete set null,
  results_count integer not null default 0,
  session_id text,
  created_at timestamptz not null default now()
);

create table if not exists public.click_logs (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid references public.listings(id) on delete set null,
  business_id uuid references public.businesses(id) on delete set null,
  click_type text not null,
  session_id text,
  created_at timestamptz not null default now()
);

create table if not exists public.business_submissions (
  id uuid primary key default gen_random_uuid(),
  business_name text not null,
  city_name text not null,
  category_name text,
  whatsapp_number text,
  instagram_url text,
  contact_name text,
  notes text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create index if not exists idx_cities_slug on public.cities(slug);
create index if not exists idx_categories_slug on public.categories(slug);
create index if not exists idx_businesses_slug on public.businesses(slug);
create index if not exists idx_businesses_city_id on public.businesses(city_id);
create index if not exists idx_businesses_category_id on public.businesses(category_id);
create index if not exists idx_businesses_active on public.businesses(active);
create index if not exists idx_listings_slug on public.listings(slug);
create index if not exists idx_listings_business_id on public.listings(business_id);
create index if not exists idx_listings_city_id on public.listings(city_id);
create index if not exists idx_listings_category_id on public.listings(category_id);
create index if not exists idx_listings_featured on public.listings(featured);
create index if not exists idx_listings_active on public.listings(active);
create index if not exists idx_search_logs_created_at on public.search_logs(created_at);
create index if not exists idx_click_logs_created_at on public.click_logs(created_at);
create index if not exists idx_listings_title_trgm on public.listings using gin (title gin_trgm_ops);
create index if not exists idx_listings_description_trgm on public.listings using gin (description gin_trgm_ops);
