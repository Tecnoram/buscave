import type { Business, Category, City } from "@/types/business";

export type Listing = {
  id: string;
  business_id: string;
  title: string;
  slug: string;
  description: string | null;
  city_id: string;
  category_id: string | null;
  price_from: number | null;
  currency: string | null;
  in_stock: boolean | null;
  source_type: string;
  source_url: string | null;
  featured: boolean;
  active: boolean;
  business: Business;
  city?: City | null;
  category?: Category | null;
};
