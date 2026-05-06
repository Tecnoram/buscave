export type City = {
  id: string;
  name: string;
  state?: string | null;
  slug: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
};

export type Business = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  whatsapp_number: string | null;
  instagram_url: string | null;
  website_url: string | null;
  address_text: string | null;
  delivery_available: boolean;
  pickup_available: boolean;
  payment_mobile: boolean;
  zelle: boolean;
  usdt: boolean;
  cash_usd: boolean;
  verified: boolean;
  active: boolean;
  city_id: string;
  category_id: string | null;
  city?: City | null;
  category?: Category | null;
};
