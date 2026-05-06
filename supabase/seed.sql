insert into public.cities (name, state, slug)
values
  ('Caracas', 'Distrito Capital', 'caracas'),
  ('Valencia', 'Carabobo', 'valencia'),
  ('Maracaibo', 'Zulia', 'maracaibo')
on conflict (slug) do nothing;

insert into public.categories (name, slug, description)
values
  ('Tecnología', 'tecnologia', 'Celulares, laptops, accesorios y electrónica'),
  ('Repuestos', 'repuestos', 'Repuestos y autopartes'),
  ('Hogar', 'hogar', 'Electrodomésticos y artículos para el hogar')
on conflict (slug) do nothing;

with caracas as (
  select id from public.cities where slug = 'caracas'
), tecnologia as (
  select id from public.categories where slug = 'tecnologia'
)
insert into public.businesses (
  name,
  slug,
  description,
  city_id,
  category_id,
  whatsapp_number,
  instagram_url,
  website_url,
  address_text,
  delivery_available,
  pickup_available,
  payment_mobile,
  zelle,
  usdt,
  cash_usd,
  verified,
  active
)
select
  'Tech Caracas Store',
  'tech-caracas-store',
  'Tienda de tecnología en Caracas',
  caracas.id,
  tecnologia.id,
  '584121112233',
  'https://instagram.com/techcaracasstore',
  null,
  'Caracas',
  true,
  true,
  true,
  true,
  false,
  true,
  true,
  true
from caracas, tecnologia
on conflict (slug) do nothing;

with business as (
  select id, city_id, category_id from public.businesses where slug = 'tech-caracas-store'
)
insert into public.listings (
  business_id,
  title,
  slug,
  description,
  category_id,
  city_id,
  price_from,
  currency,
  in_stock,
  source_type,
  source_url,
  featured,
  active
)
select
  business.id,
  'iPhone 13 128GB',
  'iphone-13-128gb-tech-caracas-store',
  'Disponible en Caracas con entrega y retiro',
  business.category_id,
  business.city_id,
  650.00,
  'USD',
  true,
  'manual',
  'https://instagram.com/techcaracasstore',
  true,
  true
from business
on conflict (slug) do nothing;

with business as (
  select id, city_id, category_id from public.businesses where slug = 'tech-caracas-store'
)
insert into public.listings (
  business_id,
  title,
  slug,
  description,
  category_id,
  city_id,
  price_from,
  currency,
  in_stock,
  source_type,
  source_url,
  featured,
  active
)
select
  business.id,
  'Laptop Lenovo IdeaPad 15',
  'laptop-lenovo-ideapad-15-tech-caracas-store',
  'Laptop para estudio y trabajo',
  business.category_id,
  business.city_id,
  540.00,
  'USD',
  true,
  'manual',
  'https://instagram.com/techcaracasstore',
  false,
  true
from business
on conflict (slug) do nothing;
