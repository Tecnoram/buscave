import type { Business, Category, City } from "@/types/business";
import type { Listing } from "@/types/listing";

export const demoCities: City[] = [
  {
    id: "city-caracas",
    name: "Caracas",
    state: "Distrito Capital",
    slug: "caracas"
  },
  {
    id: "city-valencia",
    name: "Valencia",
    state: "Carabobo",
    slug: "valencia"
  },
  {
    id: "city-maracaibo",
    name: "Maracaibo",
    state: "Zulia",
    slug: "maracaibo"
  }
];

export const demoCategories: Category[] = [
  {
    id: "cat-tecnologia",
    name: "Tecnología",
    slug: "tecnologia",
    description: "Celulares, laptops, consolas y accesorios."
  },
  {
    id: "cat-repuestos",
    name: "Repuestos",
    slug: "repuestos",
    description: "Autopartes y repuestos para carros."
  },
  {
    id: "cat-hogar",
    name: "Hogar",
    slug: "hogar",
    description: "Electrodomésticos y soluciones del hogar."
  },
  {
    id: "cat-comida",
    name: "Comida",
    slug: "comida",
    description: "Restaurantes, panaderías y comida para llevar."
  },
  {
    id: "cat-salud",
    name: "Salud",
    slug: "salud",
    description: "Farmacias, ópticas y bienestar."
  },
  {
    id: "cat-belleza",
    name: "Belleza",
    slug: "belleza",
    description: "Salones, barberías y cuidado personal."
  },
  {
    id: "cat-moda",
    name: "Moda",
    slug: "moda",
    description: "Ropa, calzado y accesorios."
  },
  {
    id: "cat-servicios",
    name: "Servicios",
    slug: "servicios",
    description: "Servicios técnicos, impresiones y soluciones profesionales."
  }
];

const businesses: Business[] = [
  {
    id: "biz-caracas-01",
    name: "Tech Chacao Pro",
    slug: "tech-chacao-pro",
    description: "Celulares, laptops y accesorios con entrega en Caracas.",
    whatsapp_number: "584121112233",
    instagram_url: "https://instagram.com/techchacaopro",
    website_url: null,
    address_text: "Chacao, Caracas",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: true,
    usdt: false,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-caracas",
    category_id: "cat-tecnologia",
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
      description: "Celulares, laptops, consolas y accesorios."
    }
  },
  {
    id: "biz-caracas-02",
    name: "Repuestos Altamira Express",
    slug: "repuestos-altamira-express",
    description: "Repuestos rápidos para Toyota, Ford y Chevrolet.",
    whatsapp_number: "584121112234",
    instagram_url: "https://instagram.com/repuestosaltamiraexpress",
    website_url: null,
    address_text: "Altamira, Caracas",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-caracas",
    category_id: "cat-repuestos",
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-repuestos",
      name: "Repuestos",
      slug: "repuestos",
      description: "Autopartes y repuestos para carros."
    }
  },
  {
    id: "biz-caracas-03",
    name: "Casa Viva Caracas",
    slug: "casa-viva-caracas",
    description: "Electrodomésticos y pequeños equipos para el hogar.",
    whatsapp_number: "584121112235",
    instagram_url: "https://instagram.com/casavivacaracas",
    website_url: null,
    address_text: "La Castellana, Caracas",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: true,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-caracas",
    category_id: "cat-hogar",
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-hogar",
      name: "Hogar",
      slug: "hogar",
      description: "Electrodomésticos y soluciones del hogar."
    }
  },
  {
    id: "biz-caracas-04",
    name: "Pan de Siempre",
    slug: "pan-de-siempre",
    description: "Panadería y lunch listos para delivery corporativo.",
    whatsapp_number: "584121112236",
    instagram_url: "https://instagram.com/pandesiempre",
    website_url: null,
    address_text: "Las Mercedes, Caracas",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-caracas",
    category_id: "cat-comida",
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-comida",
      name: "Comida",
      slug: "comida",
      description: "Restaurantes, panaderías y comida para llevar."
    }
  },
  {
    id: "biz-caracas-05",
    name: "Farmacia Centro Salud",
    slug: "farmacia-centro-salud",
    description: "Farmacia con atención por WhatsApp y delivery.",
    whatsapp_number: "584121112237",
    instagram_url: "https://instagram.com/farmaciacentrosalud",
    website_url: null,
    address_text: "Sabana Grande, Caracas",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-caracas",
    category_id: "cat-salud",
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-salud",
      name: "Salud",
      slug: "salud",
      description: "Farmacias, ópticas y bienestar."
    }
  },
  {
    id: "biz-caracas-06",
    name: "Glow Studio CCS",
    slug: "glow-studio-ccs",
    description: "Salón de belleza y maquillaje para eventos.",
    whatsapp_number: "584121112238",
    instagram_url: "https://instagram.com/glowstudioccs",
    website_url: null,
    address_text: "El Rosal, Caracas",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-caracas",
    category_id: "cat-belleza",
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-belleza",
      name: "Belleza",
      slug: "belleza",
      description: "Salones, barberías y cuidado personal."
    }
  },
  {
    id: "biz-caracas-07",
    name: "Moda Capital Boutique",
    slug: "moda-capital-boutique",
    description: "Ropa casual y ejecutiva con cambios rápidos.",
    whatsapp_number: "584121112239",
    instagram_url: "https://instagram.com/modacapitalboutique",
    website_url: null,
    address_text: "Bello Monte, Caracas",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: true,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-caracas",
    category_id: "cat-moda",
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-moda",
      name: "Moda",
      slug: "moda",
      description: "Ropa, calzado y accesorios."
    }
  },
  {
    id: "biz-caracas-08",
    name: "PrintLab Caracas",
    slug: "printlab-caracas",
    description: "Impresiones, pendones y material corporativo express.",
    whatsapp_number: "584121112240",
    instagram_url: "https://instagram.com/printlabcaracas",
    website_url: null,
    address_text: "Los Ruices, Caracas",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-caracas",
    category_id: "cat-servicios",
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-servicios",
      name: "Servicios",
      slug: "servicios",
      description: "Servicios técnicos, impresiones y soluciones profesionales."
    }
  },
  {
    id: "biz-caracas-09",
    name: "PC Gamer Caracas",
    slug: "pc-gamer-caracas",
    description: "PCs armadas, monitores y periféricos originales.",
    whatsapp_number: "584121112241",
    instagram_url: "https://instagram.com/pcgamercaracas",
    website_url: null,
    address_text: "El Paraíso, Caracas",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: true,
    usdt: true,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-caracas",
    category_id: "cat-tecnologia",
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
      description: "Celulares, laptops, consolas y accesorios."
    }
  },
  {
    id: "biz-caracas-10",
    name: "MotoPartes Libertador",
    slug: "motopartes-libertador",
    description: "Pastillas, aceites y repuestos para motos.",
    whatsapp_number: "584121112242",
    instagram_url: "https://instagram.com/motoparteslibertador",
    website_url: null,
    address_text: "Catia, Caracas",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-caracas",
    category_id: "cat-repuestos",
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-repuestos",
      name: "Repuestos",
      slug: "repuestos",
      description: "Autopartes y repuestos para carros."
    }
  },
  {
    id: "biz-valencia-01",
    name: "Garage Valencia Parts",
    slug: "garage-valencia-parts",
    description: "Repuestos rápidos para Toyota, Chevrolet y Ford en Valencia.",
    whatsapp_number: "584142223344",
    instagram_url: "https://instagram.com/garagevalenciaparts",
    website_url: null,
    address_text: "Naguanagua, Valencia",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-valencia",
    category_id: "cat-repuestos",
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-repuestos",
      name: "Repuestos",
      slug: "repuestos",
      description: "Autopartes y repuestos para carros."
    }
  },
  {
    id: "biz-valencia-02",
    name: "Tecno San Diego",
    slug: "tecno-san-diego",
    description: "Smartphones, cargadores y equipos seminuevos verificados.",
    whatsapp_number: "584142223345",
    instagram_url: "https://instagram.com/tecnosandiego",
    website_url: null,
    address_text: "San Diego, Valencia",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: true,
    usdt: false,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-valencia",
    category_id: "cat-tecnologia",
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
      description: "Celulares, laptops, consolas y accesorios."
    }
  },
  {
    id: "biz-valencia-03",
    name: "Hogar del Centro",
    slug: "hogar-del-centro",
    description: "Línea blanca y utensilios con retiro en tienda.",
    whatsapp_number: "584142223346",
    instagram_url: "https://instagram.com/hogardelcentro",
    website_url: null,
    address_text: "Centro, Valencia",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-valencia",
    category_id: "cat-hogar",
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-hogar",
      name: "Hogar",
      slug: "hogar",
      description: "Electrodomésticos y soluciones del hogar."
    }
  },
  {
    id: "biz-valencia-04",
    name: "Sabores de Valencia",
    slug: "sabores-de-valencia",
    description: "Comida criolla y bandejas para oficinas.",
    whatsapp_number: "584142223347",
    instagram_url: "https://instagram.com/saboresdevalencia",
    website_url: null,
    address_text: "Prebo, Valencia",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-valencia",
    category_id: "cat-comida",
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-comida",
      name: "Comida",
      slug: "comida",
      description: "Restaurantes, panaderías y comida para llevar."
    }
  },
  {
    id: "biz-valencia-05",
    name: "Óptica Carabobo",
    slug: "optica-carabobo",
    description: "Monturas, cristales y evaluación visual básica.",
    whatsapp_number: "584142223348",
    instagram_url: "https://instagram.com/opticacarabobo",
    website_url: null,
    address_text: "Av. Bolívar Norte, Valencia",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-valencia",
    category_id: "cat-salud",
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-salud",
      name: "Salud",
      slug: "salud",
      description: "Farmacias, ópticas y bienestar."
    }
  },
  {
    id: "biz-valencia-06",
    name: "Barber Pro Naguanagua",
    slug: "barber-pro-naguanagua",
    description: "Barbería premium con reservas por WhatsApp.",
    whatsapp_number: "584142223349",
    instagram_url: "https://instagram.com/barberpronaguanagua",
    website_url: null,
    address_text: "Naguanagua, Valencia",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-valencia",
    category_id: "cat-belleza",
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-belleza",
      name: "Belleza",
      slug: "belleza",
      description: "Salones, barberías y cuidado personal."
    }
  },
  {
    id: "biz-valencia-07",
    name: "Calzado Urbano VE",
    slug: "calzado-urbano-ve",
    description: "Zapatos casuales y deportivos para entrega inmediata.",
    whatsapp_number: "584142223350",
    instagram_url: "https://instagram.com/calzadourbanove",
    website_url: null,
    address_text: "San Blas, Valencia",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: true,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-valencia",
    category_id: "cat-moda",
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-moda",
      name: "Moda",
      slug: "moda",
      description: "Ropa, calzado y accesorios."
    }
  },
  {
    id: "biz-valencia-08",
    name: "ServiPlotter Valencia",
    slug: "serviplotter-valencia",
    description: "Impresiones, stickers y rotulación para negocios.",
    whatsapp_number: "584142223351",
    instagram_url: "https://instagram.com/serviplottervalencia",
    website_url: null,
    address_text: "La Viña, Valencia",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-valencia",
    category_id: "cat-servicios",
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-servicios",
      name: "Servicios",
      slug: "servicios",
      description: "Servicios técnicos, impresiones y soluciones profesionales."
    }
  },
  {
    id: "biz-valencia-09",
    name: "Apple Zone Valencia",
    slug: "apple-zone-valencia",
    description: "Accesorios Apple y reparación rápida.",
    whatsapp_number: "584142223352",
    instagram_url: "https://instagram.com/applezonevalencia",
    website_url: null,
    address_text: "La Viña, Valencia",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: true,
    usdt: false,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-valencia",
    category_id: "cat-tecnologia",
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
      description: "Celulares, laptops, consolas y accesorios."
    }
  },
  {
    id: "biz-valencia-10",
    name: "Autocare Carabobo",
    slug: "autocare-carabobo",
    description: "Aceites, filtros y mantenimiento preventivo.",
    whatsapp_number: "584142223353",
    instagram_url: "https://instagram.com/autocarecarabobo",
    website_url: null,
    address_text: "Los Colorados, Valencia",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-valencia",
    category_id: "cat-repuestos",
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-repuestos",
      name: "Repuestos",
      slug: "repuestos",
      description: "Autopartes y repuestos para carros."
    }
  },
  {
    id: "biz-maracaibo-01",
    name: "ElectroZulia Market",
    slug: "electrozulia-market",
    description: "Celulares, laptops y accesorios con envíos urbanos.",
    whatsapp_number: "584241110001",
    instagram_url: "https://instagram.com/electrozuliamarket",
    website_url: null,
    address_text: "Bella Vista, Maracaibo",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: true,
    usdt: false,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-tecnologia",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
      description: "Celulares, laptops, consolas y accesorios."
    }
  },
  {
    id: "biz-maracaibo-02",
    name: "Repuestos La Limpia",
    slug: "repuestos-la-limpia",
    description: "Repuestos para carros y camionetas con atención inmediata.",
    whatsapp_number: "584241110002",
    instagram_url: "https://instagram.com/repuestoslalimpia",
    website_url: null,
    address_text: "La Limpia, Maracaibo",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-repuestos",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-repuestos",
      name: "Repuestos",
      slug: "repuestos",
      description: "Autopartes y repuestos para carros."
    }
  },
  {
    id: "biz-maracaibo-03",
    name: "Hogar Costa Lago",
    slug: "hogar-costa-lago",
    description: "Electrodomésticos, ventilación y cocinas para el hogar.",
    whatsapp_number: "584241110003",
    instagram_url: "https://instagram.com/hogarcostalago",
    website_url: null,
    address_text: "5 de Julio, Maracaibo",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-hogar",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-hogar",
      name: "Hogar",
      slug: "hogar",
      description: "Electrodomésticos y soluciones del hogar."
    }
  },
  {
    id: "biz-maracaibo-04",
    name: "Panadería Sol Zuliano",
    slug: "panaderia-sol-zuliano",
    description: "Panadería, dulces y desayunos para oficina y hogar.",
    whatsapp_number: "584241110004",
    instagram_url: "https://instagram.com/panaderiasolzuliano",
    website_url: null,
    address_text: "Sabaneta, Maracaibo",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-comida",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-comida",
      name: "Comida",
      slug: "comida",
      description: "Restaurantes, panaderías y comida para llevar."
    }
  },
  {
    id: "biz-maracaibo-05",
    name: "Farmacia Norte 24",
    slug: "farmacia-norte-24",
    description: "Farmacia con delivery y atención por WhatsApp.",
    whatsapp_number: "584241110005",
    instagram_url: "https://instagram.com/farmacianorte24",
    website_url: null,
    address_text: "Zona Norte, Maracaibo",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-salud",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-salud",
      name: "Salud",
      slug: "salud",
      description: "Farmacias, ópticas y bienestar."
    }
  },
  {
    id: "biz-maracaibo-06",
    name: "Studio Glam Maracaibo",
    slug: "studio-glam-maracaibo",
    description: "Salón, maquillaje y peinados para eventos.",
    whatsapp_number: "584241110006",
    instagram_url: "https://instagram.com/studioglammaracaibo",
    website_url: null,
    address_text: "Cecilio Acosta, Maracaibo",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-belleza",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-belleza",
      name: "Belleza",
      slug: "belleza",
      description: "Salones, barberías y cuidado personal."
    }
  },
  {
    id: "biz-maracaibo-07",
    name: "Moda Vereda del Lago",
    slug: "moda-vereda-del-lago",
    description: "Ropa casual, deportiva y accesorios para damas y caballeros.",
    whatsapp_number: "584241110007",
    instagram_url: "https://instagram.com/modaveredadellago",
    website_url: null,
    address_text: "Vereda del Lago, Maracaibo",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-moda",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-moda",
      name: "Moda",
      slug: "moda",
      description: "Ropa, calzado y accesorios."
    }
  },
  {
    id: "biz-maracaibo-08",
    name: "ServiTech Zulia",
    slug: "servitech-zulia",
    description: "Servicio técnico, instalación y soporte para oficinas.",
    whatsapp_number: "584241110008",
    instagram_url: "https://instagram.com/servitechzulia",
    website_url: null,
    address_text: "Indio Mara, Maracaibo",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: true,
    usdt: false,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-servicios",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-servicios",
      name: "Servicios",
      slug: "servicios",
      description: "Servicios técnicos, impresiones y soluciones profesionales."
    }
  },
  {
    id: "biz-maracaibo-09",
    name: "Tecno Plus Delicias",
    slug: "tecno-plus-delicias",
    description: "Equipos nuevos y usados probados con garantía local.",
    whatsapp_number: "584241110009",
    instagram_url: "https://instagram.com/tecnoplusdelicias",
    website_url: null,
    address_text: "Las Delicias, Maracaibo",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: true,
    usdt: false,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-tecnologia",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
      description: "Celulares, laptops, consolas y accesorios."
    }
  },
  {
    id: "biz-maracaibo-10",
    name: "Moto Repuestos 18",
    slug: "moto-repuestos-18",
    description: "Pastillas, cauchos y repuestos para motos.",
    whatsapp_number: "584241110010",
    instagram_url: "https://instagram.com/motorepuestos18",
    website_url: null,
    address_text: "18 de Octubre, Maracaibo",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-repuestos",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-repuestos",
      name: "Repuestos",
      slug: "repuestos",
      description: "Autopartes y repuestos para carros."
    }
  },
  {
    id: "biz-maracaibo-11",
    name: "Casa Nube Hogar",
    slug: "casa-nube-hogar",
    description: "Muebles livianos, decoración y organización del hogar.",
    whatsapp_number: "584241110011",
    instagram_url: "https://instagram.com/casanubehogar",
    website_url: null,
    address_text: "La Lago, Maracaibo",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-hogar",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-hogar",
      name: "Hogar",
      slug: "hogar",
      description: "Electrodomésticos y soluciones del hogar."
    }
  },
  {
    id: "biz-maracaibo-12",
    name: "Burger Go Maracaibo",
    slug: "burger-go-maracaibo",
    description: "Hamburguesas, combos y delivery nocturno.",
    whatsapp_number: "584241110012",
    instagram_url: "https://instagram.com/burgergomaracaibo",
    website_url: null,
    address_text: "La Lago, Maracaibo",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-comida",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-comida",
      name: "Comida",
      slug: "comida",
      description: "Restaurantes, panaderías y comida para llevar."
    }
  },
  {
    id: "biz-maracaibo-13",
    name: "Óptica Milenio Zulia",
    slug: "optica-milenio-zulia",
    description: "Lentes, monturas y fórmulas con atención rápida.",
    whatsapp_number: "584241110013",
    instagram_url: "https://instagram.com/opticamileniozulia",
    website_url: null,
    address_text: "Centro, Maracaibo",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-salud",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-salud",
      name: "Salud",
      slug: "salud",
      description: "Farmacias, ópticas y bienestar."
    }
  },
  {
    id: "biz-maracaibo-14",
    name: "Barber House MCBO",
    slug: "barber-house-mcbo",
    description: "Barbería moderna con paquetes semanales.",
    whatsapp_number: "584241110014",
    instagram_url: "https://instagram.com/barberhousemcbo",
    website_url: null,
    address_text: "Padilla, Maracaibo",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-belleza",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-belleza",
      name: "Belleza",
      slug: "belleza",
      description: "Salones, barberías y cuidado personal."
    }
  },
  {
    id: "biz-maracaibo-15",
    name: "Pasarela Zuliana",
    slug: "pasarela-zuliana",
    description: "Boutique con prendas importadas y cambios fáciles.",
    whatsapp_number: "584241110015",
    instagram_url: "https://instagram.com/pasarelazuliana",
    website_url: null,
    address_text: "Don Bosco, Maracaibo",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: true,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-moda",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-moda",
      name: "Moda",
      slug: "moda",
      description: "Ropa, calzado y accesorios."
    }
  },
  {
    id: "biz-maracaibo-16",
    name: "Print Zona Norte",
    slug: "print-zona-norte",
    description: "Impresión, diseño rápido y material POP.",
    whatsapp_number: "584241110016",
    instagram_url: "https://instagram.com/printzonanorte",
    website_url: null,
    address_text: "Zona Norte, Maracaibo",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-servicios",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-servicios",
      name: "Servicios",
      slug: "servicios",
      description: "Servicios técnicos, impresiones y soluciones profesionales."
    }
  },
  {
    id: "biz-maracaibo-17",
    name: "CompuMarket Cabimas Express",
    slug: "compumarket-cabimas-express",
    description: "Accesorios, memorias y redes con entrega en el día.",
    whatsapp_number: "584241110017",
    instagram_url: "https://instagram.com/compumarketcabimasexpress",
    website_url: null,
    address_text: "C1, Maracaibo",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: true,
    usdt: true,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-tecnologia",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
      description: "Celulares, laptops, consolas y accesorios."
    }
  },
  {
    id: "biz-maracaibo-18",
    name: "AutoPartes San Francisco",
    slug: "autopartes-san-francisco",
    description: "Repuestos de suspensión y mantenimiento preventivo.",
    whatsapp_number: "584241110018",
    instagram_url: "https://instagram.com/autopartessanfrancisco",
    website_url: null,
    address_text: "San Francisco, Maracaibo",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-repuestos",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-repuestos",
      name: "Repuestos",
      slug: "repuestos",
      description: "Autopartes y repuestos para carros."
    }
  },
  {
    id: "biz-maracaibo-19",
    name: "Sazón Marabino",
    slug: "sazon-marabino",
    description: "Comida casera, almuerzos y bandejas familiares.",
    whatsapp_number: "584241110019",
    instagram_url: "https://instagram.com/sazonmarabino",
    website_url: null,
    address_text: "Pomona, Maracaibo",
    delivery_available: true,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: false,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-comida",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-comida",
      name: "Comida",
      slug: "comida",
      description: "Restaurantes, panaderías y comida para llevar."
    }
  },
  {
    id: "biz-maracaibo-20",
    name: "Zulia Fix Express",
    slug: "zulia-fix-express",
    description: "Reparación de celulares, tablets y computadoras.",
    whatsapp_number: "584241110020",
    instagram_url: "https://instagram.com/zuliafixexpress",
    website_url: null,
    address_text: "Bella Vista, Maracaibo",
    delivery_available: false,
    pickup_available: true,
    payment_mobile: true,
    zelle: false,
    usdt: false,
    cash_usd: true,
    verified: true,
    active: true,
    city_id: "city-maracaibo",
    category_id: "cat-servicios",
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-servicios",
      name: "Servicios",
      slug: "servicios",
      description: "Servicios técnicos, impresiones y soluciones profesionales."
    }
  }
];

export const demoListings: Listing[] = [
  {
    id: "list-caracas-01",
    title: "iPhone 13 128GB",
    slug: "iphone-13-128gb-tech-chacao-pro",
    description: "Celulares, laptops y accesorios con entrega en Caracas.",
    city_id: "city-caracas",
    category_id: "cat-tecnologia",
    price_from: 650,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/techchacaopro",
    featured: true,
    active: true,
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
      description: "Celulares, laptops, consolas y accesorios."
    },
    business_id: "biz-caracas-01",
    business: {
      id: "biz-caracas-01",
      name: "Tech Chacao Pro",
      slug: "tech-chacao-pro",
      description: "Celulares, laptops y accesorios con entrega en Caracas.",
      whatsapp_number: "584121112233",
      instagram_url: "https://instagram.com/techchacaopro",
      website_url: null,
      address_text: "Chacao, Caracas",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: true,
      usdt: false,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-caracas",
      category_id: "cat-tecnologia",
      city: {
        id: "city-caracas",
        name: "Caracas",
        state: "Distrito Capital",
        slug: "caracas"
      },
      category: {
        id: "cat-tecnologia",
        name: "Tecnología",
        slug: "tecnologia",
        description: "Celulares, laptops, consolas y accesorios."
      }
    }
  },
  {
    id: "list-caracas-02",
    title: "Kit de frenos Toyota Corolla",
    slug: "kit-de-frenos-toyota-corolla-repuestos-altamira-express",
    description: "Repuestos rápidos para Toyota, Ford y Chevrolet.",
    city_id: "city-caracas",
    category_id: "cat-repuestos",
    price_from: 120,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/repuestosaltamiraexpress",
    featured: true,
    active: true,
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-repuestos",
      name: "Repuestos",
      slug: "repuestos",
      description: "Autopartes y repuestos para carros."
    },
    business_id: "biz-caracas-02",
    business: {
      id: "biz-caracas-02",
      name: "Repuestos Altamira Express",
      slug: "repuestos-altamira-express",
      description: "Repuestos rápidos para Toyota, Ford y Chevrolet.",
      whatsapp_number: "584121112234",
      instagram_url: "https://instagram.com/repuestosaltamiraexpress",
      website_url: null,
      address_text: "Altamira, Caracas",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-caracas",
      category_id: "cat-repuestos",
      city: {
        id: "city-caracas",
        name: "Caracas",
        state: "Distrito Capital",
        slug: "caracas"
      },
      category: {
        id: "cat-repuestos",
        name: "Repuestos",
        slug: "repuestos",
        description: "Autopartes y repuestos para carros."
      }
    }
  },
  {
    id: "list-caracas-03",
    title: "Air fryer Oster 4L",
    slug: "air-fryer-oster-4l-casa-viva-caracas",
    description: "Electrodomésticos y pequeños equipos para el hogar.",
    city_id: "city-caracas",
    category_id: "cat-hogar",
    price_from: 115,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/casavivacaracas",
    featured: false,
    active: true,
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-hogar",
      name: "Hogar",
      slug: "hogar",
      description: "Electrodomésticos y soluciones del hogar."
    },
    business_id: "biz-caracas-03",
    business: {
      id: "biz-caracas-03",
      name: "Casa Viva Caracas",
      slug: "casa-viva-caracas",
      description: "Electrodomésticos y pequeños equipos para el hogar.",
      whatsapp_number: "584121112235",
      instagram_url: "https://instagram.com/casavivacaracas",
      website_url: null,
      address_text: "La Castellana, Caracas",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: true,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-caracas",
      category_id: "cat-hogar",
      city: {
        id: "city-caracas",
        name: "Caracas",
        state: "Distrito Capital",
        slug: "caracas"
      },
      category: {
        id: "cat-hogar",
        name: "Hogar",
        slug: "hogar",
        description: "Electrodomésticos y soluciones del hogar."
      }
    }
  },
  {
    id: "list-caracas-04",
    title: "Bandeja de mini cachitos",
    slug: "bandeja-de-mini-cachitos-pan-de-siempre",
    description: "Panadería y lunch listos para delivery corporativo.",
    city_id: "city-caracas",
    category_id: "cat-comida",
    price_from: 18,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/pandesiempre",
    featured: false,
    active: true,
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-comida",
      name: "Comida",
      slug: "comida",
      description: "Restaurantes, panaderías y comida para llevar."
    },
    business_id: "biz-caracas-04",
    business: {
      id: "biz-caracas-04",
      name: "Pan de Siempre",
      slug: "pan-de-siempre",
      description: "Panadería y lunch listos para delivery corporativo.",
      whatsapp_number: "584121112236",
      instagram_url: "https://instagram.com/pandesiempre",
      website_url: null,
      address_text: "Las Mercedes, Caracas",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-caracas",
      category_id: "cat-comida",
      city: {
        id: "city-caracas",
        name: "Caracas",
        state: "Distrito Capital",
        slug: "caracas"
      },
      category: {
        id: "cat-comida",
        name: "Comida",
        slug: "comida",
        description: "Restaurantes, panaderías y comida para llevar."
      }
    }
  },
  {
    id: "list-caracas-05",
    title: "Combo vitamínico mensual",
    slug: "combo-vitaminico-mensual-farmacia-centro-salud",
    description: "Farmacia con atención por WhatsApp y delivery.",
    city_id: "city-caracas",
    category_id: "cat-salud",
    price_from: 22,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/farmaciacentrosalud",
    featured: true,
    active: true,
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-salud",
      name: "Salud",
      slug: "salud",
      description: "Farmacias, ópticas y bienestar."
    },
    business_id: "biz-caracas-05",
    business: {
      id: "biz-caracas-05",
      name: "Farmacia Centro Salud",
      slug: "farmacia-centro-salud",
      description: "Farmacia con atención por WhatsApp y delivery.",
      whatsapp_number: "584121112237",
      instagram_url: "https://instagram.com/farmaciacentrosalud",
      website_url: null,
      address_text: "Sabana Grande, Caracas",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-caracas",
      category_id: "cat-salud",
      city: {
        id: "city-caracas",
        name: "Caracas",
        state: "Distrito Capital",
        slug: "caracas"
      },
      category: {
        id: "cat-salud",
        name: "Salud",
        slug: "salud",
        description: "Farmacias, ópticas y bienestar."
      }
    }
  },
  {
    id: "list-caracas-06",
    title: "Paquete de manicure y pedicure",
    slug: "paquete-de-manicure-y-pedicure-glow-studio-ccs",
    description: "Salón de belleza y maquillaje para eventos.",
    city_id: "city-caracas",
    category_id: "cat-belleza",
    price_from: 25,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/glowstudioccs",
    featured: false,
    active: true,
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-belleza",
      name: "Belleza",
      slug: "belleza",
      description: "Salones, barberías y cuidado personal."
    },
    business_id: "biz-caracas-06",
    business: {
      id: "biz-caracas-06",
      name: "Glow Studio CCS",
      slug: "glow-studio-ccs",
      description: "Salón de belleza y maquillaje para eventos.",
      whatsapp_number: "584121112238",
      instagram_url: "https://instagram.com/glowstudioccs",
      website_url: null,
      address_text: "El Rosal, Caracas",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-caracas",
      category_id: "cat-belleza",
      city: {
        id: "city-caracas",
        name: "Caracas",
        state: "Distrito Capital",
        slug: "caracas"
      },
      category: {
        id: "cat-belleza",
        name: "Belleza",
        slug: "belleza",
        description: "Salones, barberías y cuidado personal."
      }
    }
  },
  {
    id: "list-caracas-07",
    title: "Blazer casual para dama",
    slug: "blazer-casual-para-dama-moda-capital-boutique",
    description: "Ropa casual y ejecutiva con cambios rápidos.",
    city_id: "city-caracas",
    category_id: "cat-moda",
    price_from: 39,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/modacapitalboutique",
    featured: false,
    active: true,
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-moda",
      name: "Moda",
      slug: "moda",
      description: "Ropa, calzado y accesorios."
    },
    business_id: "biz-caracas-07",
    business: {
      id: "biz-caracas-07",
      name: "Moda Capital Boutique",
      slug: "moda-capital-boutique",
      description: "Ropa casual y ejecutiva con cambios rápidos.",
      whatsapp_number: "584121112239",
      instagram_url: "https://instagram.com/modacapitalboutique",
      website_url: null,
      address_text: "Bello Monte, Caracas",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: true,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-caracas",
      category_id: "cat-moda",
      city: {
        id: "city-caracas",
        name: "Caracas",
        state: "Distrito Capital",
        slug: "caracas"
      },
      category: {
        id: "cat-moda",
        name: "Moda",
        slug: "moda",
        description: "Ropa, calzado y accesorios."
      }
    }
  },
  {
    id: "list-caracas-08",
    title: "100 tarjetas de presentación",
    slug: "100-tarjetas-de-presentacion-printlab-caracas",
    description: "Impresiones, pendones y material corporativo express.",
    city_id: "city-caracas",
    category_id: "cat-servicios",
    price_from: 15,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/printlabcaracas",
    featured: true,
    active: true,
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-servicios",
      name: "Servicios",
      slug: "servicios",
      description: "Servicios técnicos, impresiones y soluciones profesionales."
    },
    business_id: "biz-caracas-08",
    business: {
      id: "biz-caracas-08",
      name: "PrintLab Caracas",
      slug: "printlab-caracas",
      description: "Impresiones, pendones y material corporativo express.",
      whatsapp_number: "584121112240",
      instagram_url: "https://instagram.com/printlabcaracas",
      website_url: null,
      address_text: "Los Ruices, Caracas",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-caracas",
      category_id: "cat-servicios",
      city: {
        id: "city-caracas",
        name: "Caracas",
        state: "Distrito Capital",
        slug: "caracas"
      },
      category: {
        id: "cat-servicios",
        name: "Servicios",
        slug: "servicios",
        description: "Servicios técnicos, impresiones y soluciones profesionales."
      }
    }
  },
  {
    id: "list-caracas-09",
    title: "Monitor gamer 24 pulgadas",
    slug: "monitor-gamer-24-pulgadas-pc-gamer-caracas",
    description: "PCs armadas, monitores y periféricos originales.",
    city_id: "city-caracas",
    category_id: "cat-tecnologia",
    price_from: 185,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/pcgamercaracas",
    featured: true,
    active: true,
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
      description: "Celulares, laptops, consolas y accesorios."
    },
    business_id: "biz-caracas-09",
    business: {
      id: "biz-caracas-09",
      name: "PC Gamer Caracas",
      slug: "pc-gamer-caracas",
      description: "PCs armadas, monitores y periféricos originales.",
      whatsapp_number: "584121112241",
      instagram_url: "https://instagram.com/pcgamercaracas",
      website_url: null,
      address_text: "El Paraíso, Caracas",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: true,
      usdt: true,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-caracas",
      category_id: "cat-tecnologia",
      city: {
        id: "city-caracas",
        name: "Caracas",
        state: "Distrito Capital",
        slug: "caracas"
      },
      category: {
        id: "cat-tecnologia",
        name: "Tecnología",
        slug: "tecnologia",
        description: "Celulares, laptops, consolas y accesorios."
      }
    }
  },
  {
    id: "list-caracas-10",
    title: "Pastillas de freno para Bera SBR",
    slug: "pastillas-de-freno-para-bera-sbr-motopartes-libertador",
    description: "Pastillas, aceites y repuestos para motos.",
    city_id: "city-caracas",
    category_id: "cat-repuestos",
    price_from: 14,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/motoparteslibertador",
    featured: false,
    active: true,
    city: {
      id: "city-caracas",
      name: "Caracas",
      state: "Distrito Capital",
      slug: "caracas"
    },
    category: {
      id: "cat-repuestos",
      name: "Repuestos",
      slug: "repuestos",
      description: "Autopartes y repuestos para carros."
    },
    business_id: "biz-caracas-10",
    business: {
      id: "biz-caracas-10",
      name: "MotoPartes Libertador",
      slug: "motopartes-libertador",
      description: "Pastillas, aceites y repuestos para motos.",
      whatsapp_number: "584121112242",
      instagram_url: "https://instagram.com/motoparteslibertador",
      website_url: null,
      address_text: "Catia, Caracas",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-caracas",
      category_id: "cat-repuestos",
      city: {
        id: "city-caracas",
        name: "Caracas",
        state: "Distrito Capital",
        slug: "caracas"
      },
      category: {
        id: "cat-repuestos",
        name: "Repuestos",
        slug: "repuestos",
        description: "Autopartes y repuestos para carros."
      }
    }
  },
  {
    id: "list-valencia-01",
    title: "Bomba de gasolina Toyota Corolla 2009-2013",
    slug: "bomba-de-gasolina-toyota-corolla-2009-2013-garage-valencia-parts",
    description: "Repuestos rápidos para Toyota, Chevrolet y Ford en Valencia.",
    city_id: "city-valencia",
    category_id: "cat-repuestos",
    price_from: 85,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/garagevalenciaparts",
    featured: true,
    active: true,
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-repuestos",
      name: "Repuestos",
      slug: "repuestos",
      description: "Autopartes y repuestos para carros."
    },
    business_id: "biz-valencia-01",
    business: {
      id: "biz-valencia-01",
      name: "Garage Valencia Parts",
      slug: "garage-valencia-parts",
      description: "Repuestos rápidos para Toyota, Chevrolet y Ford en Valencia.",
      whatsapp_number: "584142223344",
      instagram_url: "https://instagram.com/garagevalenciaparts",
      website_url: null,
      address_text: "Naguanagua, Valencia",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-valencia",
      category_id: "cat-repuestos",
      city: {
        id: "city-valencia",
        name: "Valencia",
        state: "Carabobo",
        slug: "valencia"
      },
      category: {
        id: "cat-repuestos",
        name: "Repuestos",
        slug: "repuestos",
        description: "Autopartes y repuestos para carros."
      }
    }
  },
  {
    id: "list-valencia-02",
    title: "Samsung A54 liberado",
    slug: "samsung-a54-liberado-tecno-san-diego",
    description: "Smartphones, cargadores y equipos seminuevos verificados.",
    city_id: "city-valencia",
    category_id: "cat-tecnologia",
    price_from: 295,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/tecnosandiego",
    featured: true,
    active: true,
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
      description: "Celulares, laptops, consolas y accesorios."
    },
    business_id: "biz-valencia-02",
    business: {
      id: "biz-valencia-02",
      name: "Tecno San Diego",
      slug: "tecno-san-diego",
      description: "Smartphones, cargadores y equipos seminuevos verificados.",
      whatsapp_number: "584142223345",
      instagram_url: "https://instagram.com/tecnosandiego",
      website_url: null,
      address_text: "San Diego, Valencia",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: true,
      usdt: false,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-valencia",
      category_id: "cat-tecnologia",
      city: {
        id: "city-valencia",
        name: "Valencia",
        state: "Carabobo",
        slug: "valencia"
      },
      category: {
        id: "cat-tecnologia",
        name: "Tecnología",
        slug: "tecnologia",
        description: "Celulares, laptops, consolas y accesorios."
      }
    }
  },
  {
    id: "list-valencia-03",
    title: "Cocina eléctrica dos hornillas",
    slug: "cocina-electrica-dos-hornillas-hogar-del-centro",
    description: "Línea blanca y utensilios con retiro en tienda.",
    city_id: "city-valencia",
    category_id: "cat-hogar",
    price_from: 68,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/hogardelcentro",
    featured: false,
    active: true,
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-hogar",
      name: "Hogar",
      slug: "hogar",
      description: "Electrodomésticos y soluciones del hogar."
    },
    business_id: "biz-valencia-03",
    business: {
      id: "biz-valencia-03",
      name: "Hogar del Centro",
      slug: "hogar-del-centro",
      description: "Línea blanca y utensilios con retiro en tienda.",
      whatsapp_number: "584142223346",
      instagram_url: "https://instagram.com/hogardelcentro",
      website_url: null,
      address_text: "Centro, Valencia",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-valencia",
      category_id: "cat-hogar",
      city: {
        id: "city-valencia",
        name: "Valencia",
        state: "Carabobo",
        slug: "valencia"
      },
      category: {
        id: "cat-hogar",
        name: "Hogar",
        slug: "hogar",
        description: "Electrodomésticos y soluciones del hogar."
      }
    }
  },
  {
    id: "list-valencia-04",
    title: "Bandeja ejecutiva para almuerzo",
    slug: "bandeja-ejecutiva-para-almuerzo-sabores-de-valencia",
    description: "Comida criolla y bandejas para oficinas.",
    city_id: "city-valencia",
    category_id: "cat-comida",
    price_from: 7,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/saboresdevalencia",
    featured: false,
    active: true,
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-comida",
      name: "Comida",
      slug: "comida",
      description: "Restaurantes, panaderías y comida para llevar."
    },
    business_id: "biz-valencia-04",
    business: {
      id: "biz-valencia-04",
      name: "Sabores de Valencia",
      slug: "sabores-de-valencia",
      description: "Comida criolla y bandejas para oficinas.",
      whatsapp_number: "584142223347",
      instagram_url: "https://instagram.com/saboresdevalencia",
      website_url: null,
      address_text: "Prebo, Valencia",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-valencia",
      category_id: "cat-comida",
      city: {
        id: "city-valencia",
        name: "Valencia",
        state: "Carabobo",
        slug: "valencia"
      },
      category: {
        id: "cat-comida",
        name: "Comida",
        slug: "comida",
        description: "Restaurantes, panaderías y comida para llevar."
      }
    }
  },
  {
    id: "list-valencia-05",
    title: "Montura con lente antirreflejo",
    slug: "montura-con-lente-antirreflejo-optica-carabobo",
    description: "Monturas, cristales y evaluación visual básica.",
    city_id: "city-valencia",
    category_id: "cat-salud",
    price_from: 55,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/opticacarabobo",
    featured: true,
    active: true,
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-salud",
      name: "Salud",
      slug: "salud",
      description: "Farmacias, ópticas y bienestar."
    },
    business_id: "biz-valencia-05",
    business: {
      id: "biz-valencia-05",
      name: "Óptica Carabobo",
      slug: "optica-carabobo",
      description: "Monturas, cristales y evaluación visual básica.",
      whatsapp_number: "584142223348",
      instagram_url: "https://instagram.com/opticacarabobo",
      website_url: null,
      address_text: "Av. Bolívar Norte, Valencia",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-valencia",
      category_id: "cat-salud",
      city: {
        id: "city-valencia",
        name: "Valencia",
        state: "Carabobo",
        slug: "valencia"
      },
      category: {
        id: "cat-salud",
        name: "Salud",
        slug: "salud",
        description: "Farmacias, ópticas y bienestar."
      }
    }
  },
  {
    id: "list-valencia-06",
    title: "Corte premium con barba",
    slug: "corte-premium-con-barba-barber-pro-naguanagua",
    description: "Barbería premium con reservas por WhatsApp.",
    city_id: "city-valencia",
    category_id: "cat-belleza",
    price_from: 10,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/barberpronaguanagua",
    featured: false,
    active: true,
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-belleza",
      name: "Belleza",
      slug: "belleza",
      description: "Salones, barberías y cuidado personal."
    },
    business_id: "biz-valencia-06",
    business: {
      id: "biz-valencia-06",
      name: "Barber Pro Naguanagua",
      slug: "barber-pro-naguanagua",
      description: "Barbería premium con reservas por WhatsApp.",
      whatsapp_number: "584142223349",
      instagram_url: "https://instagram.com/barberpronaguanagua",
      website_url: null,
      address_text: "Naguanagua, Valencia",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-valencia",
      category_id: "cat-belleza",
      city: {
        id: "city-valencia",
        name: "Valencia",
        state: "Carabobo",
        slug: "valencia"
      },
      category: {
        id: "cat-belleza",
        name: "Belleza",
        slug: "belleza",
        description: "Salones, barberías y cuidado personal."
      }
    }
  },
  {
    id: "list-valencia-07",
    title: "Zapatos deportivos unisex",
    slug: "zapatos-deportivos-unisex-calzado-urbano-ve",
    description: "Zapatos casuales y deportivos para entrega inmediata.",
    city_id: "city-valencia",
    category_id: "cat-moda",
    price_from: 32,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/calzadourbanove",
    featured: false,
    active: true,
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-moda",
      name: "Moda",
      slug: "moda",
      description: "Ropa, calzado y accesorios."
    },
    business_id: "biz-valencia-07",
    business: {
      id: "biz-valencia-07",
      name: "Calzado Urbano VE",
      slug: "calzado-urbano-ve",
      description: "Zapatos casuales y deportivos para entrega inmediata.",
      whatsapp_number: "584142223350",
      instagram_url: "https://instagram.com/calzadourbanove",
      website_url: null,
      address_text: "San Blas, Valencia",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: true,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-valencia",
      category_id: "cat-moda",
      city: {
        id: "city-valencia",
        name: "Valencia",
        state: "Carabobo",
        slug: "valencia"
      },
      category: {
        id: "cat-moda",
        name: "Moda",
        slug: "moda",
        description: "Ropa, calzado y accesorios."
      }
    }
  },
  {
    id: "list-valencia-08",
    title: "Sticker troquelado por metro",
    slug: "sticker-troquelado-por-metro-serviplotter-valencia",
    description: "Impresiones, stickers y rotulación para negocios.",
    city_id: "city-valencia",
    category_id: "cat-servicios",
    price_from: 12,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/serviplottervalencia",
    featured: false,
    active: true,
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-servicios",
      name: "Servicios",
      slug: "servicios",
      description: "Servicios técnicos, impresiones y soluciones profesionales."
    },
    business_id: "biz-valencia-08",
    business: {
      id: "biz-valencia-08",
      name: "ServiPlotter Valencia",
      slug: "serviplotter-valencia",
      description: "Impresiones, stickers y rotulación para negocios.",
      whatsapp_number: "584142223351",
      instagram_url: "https://instagram.com/serviplottervalencia",
      website_url: null,
      address_text: "La Viña, Valencia",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-valencia",
      category_id: "cat-servicios",
      city: {
        id: "city-valencia",
        name: "Valencia",
        state: "Carabobo",
        slug: "valencia"
      },
      category: {
        id: "cat-servicios",
        name: "Servicios",
        slug: "servicios",
        description: "Servicios técnicos, impresiones y soluciones profesionales."
      }
    }
  },
  {
    id: "list-valencia-09",
    title: "Cambio de batería para iPhone 11",
    slug: "cambio-de-bateria-para-iphone-11-apple-zone-valencia",
    description: "Accesorios Apple y reparación rápida.",
    city_id: "city-valencia",
    category_id: "cat-tecnologia",
    price_from: 49,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/applezonevalencia",
    featured: true,
    active: true,
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
      description: "Celulares, laptops, consolas y accesorios."
    },
    business_id: "biz-valencia-09",
    business: {
      id: "biz-valencia-09",
      name: "Apple Zone Valencia",
      slug: "apple-zone-valencia",
      description: "Accesorios Apple y reparación rápida.",
      whatsapp_number: "584142223352",
      instagram_url: "https://instagram.com/applezonevalencia",
      website_url: null,
      address_text: "La Viña, Valencia",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: true,
      usdt: false,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-valencia",
      category_id: "cat-tecnologia",
      city: {
        id: "city-valencia",
        name: "Valencia",
        state: "Carabobo",
        slug: "valencia"
      },
      category: {
        id: "cat-tecnologia",
        name: "Tecnología",
        slug: "tecnologia",
        description: "Celulares, laptops, consolas y accesorios."
      }
    }
  },
  {
    id: "list-valencia-10",
    title: "Kit cambio de aceite sintético",
    slug: "kit-cambio-de-aceite-sintetico-autocare-carabobo",
    description: "Aceites, filtros y mantenimiento preventivo.",
    city_id: "city-valencia",
    category_id: "cat-repuestos",
    price_from: 36,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/autocarecarabobo",
    featured: false,
    active: true,
    city: {
      id: "city-valencia",
      name: "Valencia",
      state: "Carabobo",
      slug: "valencia"
    },
    category: {
      id: "cat-repuestos",
      name: "Repuestos",
      slug: "repuestos",
      description: "Autopartes y repuestos para carros."
    },
    business_id: "biz-valencia-10",
    business: {
      id: "biz-valencia-10",
      name: "Autocare Carabobo",
      slug: "autocare-carabobo",
      description: "Aceites, filtros y mantenimiento preventivo.",
      whatsapp_number: "584142223353",
      instagram_url: "https://instagram.com/autocarecarabobo",
      website_url: null,
      address_text: "Los Colorados, Valencia",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-valencia",
      category_id: "cat-repuestos",
      city: {
        id: "city-valencia",
        name: "Valencia",
        state: "Carabobo",
        slug: "valencia"
      },
      category: {
        id: "cat-repuestos",
        name: "Repuestos",
        slug: "repuestos",
        description: "Autopartes y repuestos para carros."
      }
    }
  },
  {
    id: "list-maracaibo-01",
    title: "Laptop Lenovo IdeaPad 15",
    slug: "laptop-lenovo-ideapad-15-electrozulia-market",
    description: "Celulares, laptops y accesorios con envíos urbanos.",
    city_id: "city-maracaibo",
    category_id: "cat-tecnologia",
    price_from: 540,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/electrozuliamarket",
    featured: true,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
      description: "Celulares, laptops, consolas y accesorios."
    },
    business_id: "biz-maracaibo-01",
    business: {
      id: "biz-maracaibo-01",
      name: "ElectroZulia Market",
      slug: "electrozulia-market",
      description: "Celulares, laptops y accesorios con envíos urbanos.",
      whatsapp_number: "584241110001",
      instagram_url: "https://instagram.com/electrozuliamarket",
      website_url: null,
      address_text: "Bella Vista, Maracaibo",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: true,
      usdt: false,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-tecnologia",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-tecnologia",
        name: "Tecnología",
        slug: "tecnologia",
        description: "Celulares, laptops, consolas y accesorios."
      }
    }
  },
  {
    id: "list-maracaibo-02",
    title: "Amortiguador delantero Chevrolet Aveo",
    slug: "amortiguador-delantero-chevrolet-aveo-repuestos-la-limpia",
    description: "Repuestos para carros y camionetas con atención inmediata.",
    city_id: "city-maracaibo",
    category_id: "cat-repuestos",
    price_from: 47,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/repuestoslalimpia",
    featured: true,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-repuestos",
      name: "Repuestos",
      slug: "repuestos",
      description: "Autopartes y repuestos para carros."
    },
    business_id: "biz-maracaibo-02",
    business: {
      id: "biz-maracaibo-02",
      name: "Repuestos La Limpia",
      slug: "repuestos-la-limpia",
      description: "Repuestos para carros y camionetas con atención inmediata.",
      whatsapp_number: "584241110002",
      instagram_url: "https://instagram.com/repuestoslalimpia",
      website_url: null,
      address_text: "La Limpia, Maracaibo",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-repuestos",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-repuestos",
        name: "Repuestos",
        slug: "repuestos",
        description: "Autopartes y repuestos para carros."
      }
    }
  },
  {
    id: "list-maracaibo-03",
    title: "Ventilador de pedestal 18 pulgadas",
    slug: "ventilador-de-pedestal-18-pulgadas-hogar-costa-lago",
    description: "Electrodomésticos, ventilación y cocinas para el hogar.",
    city_id: "city-maracaibo",
    category_id: "cat-hogar",
    price_from: 35,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/hogarcostalago",
    featured: false,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-hogar",
      name: "Hogar",
      slug: "hogar",
      description: "Electrodomésticos y soluciones del hogar."
    },
    business_id: "biz-maracaibo-03",
    business: {
      id: "biz-maracaibo-03",
      name: "Hogar Costa Lago",
      slug: "hogar-costa-lago",
      description: "Electrodomésticos, ventilación y cocinas para el hogar.",
      whatsapp_number: "584241110003",
      instagram_url: "https://instagram.com/hogarcostalago",
      website_url: null,
      address_text: "5 de Julio, Maracaibo",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-hogar",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-hogar",
        name: "Hogar",
        slug: "hogar",
        description: "Electrodomésticos y soluciones del hogar."
      }
    }
  },
  {
    id: "list-maracaibo-04",
    title: "Caja de pastelitos surtidos",
    slug: "caja-de-pastelitos-surtidos-panaderia-sol-zuliano",
    description: "Panadería, dulces y desayunos para oficina y hogar.",
    city_id: "city-maracaibo",
    category_id: "cat-comida",
    price_from: 9,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/panaderiasolzuliano",
    featured: false,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-comida",
      name: "Comida",
      slug: "comida",
      description: "Restaurantes, panaderías y comida para llevar."
    },
    business_id: "biz-maracaibo-04",
    business: {
      id: "biz-maracaibo-04",
      name: "Panadería Sol Zuliano",
      slug: "panaderia-sol-zuliano",
      description: "Panadería, dulces y desayunos para oficina y hogar.",
      whatsapp_number: "584241110004",
      instagram_url: "https://instagram.com/panaderiasolzuliano",
      website_url: null,
      address_text: "Sabaneta, Maracaibo",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-comida",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-comida",
        name: "Comida",
        slug: "comida",
        description: "Restaurantes, panaderías y comida para llevar."
      }
    }
  },
  {
    id: "list-maracaibo-05",
    title: "Tensiómetro digital",
    slug: "tensiometro-digital-farmacia-norte-24",
    description: "Farmacia con delivery y atención por WhatsApp.",
    city_id: "city-maracaibo",
    category_id: "cat-salud",
    price_from: 28,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/farmacianorte24",
    featured: true,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-salud",
      name: "Salud",
      slug: "salud",
      description: "Farmacias, ópticas y bienestar."
    },
    business_id: "biz-maracaibo-05",
    business: {
      id: "biz-maracaibo-05",
      name: "Farmacia Norte 24",
      slug: "farmacia-norte-24",
      description: "Farmacia con delivery y atención por WhatsApp.",
      whatsapp_number: "584241110005",
      instagram_url: "https://instagram.com/farmacianorte24",
      website_url: null,
      address_text: "Zona Norte, Maracaibo",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-salud",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-salud",
        name: "Salud",
        slug: "salud",
        description: "Farmacias, ópticas y bienestar."
      }
    }
  },
  {
    id: "list-maracaibo-06",
    title: "Maquillaje social completo",
    slug: "maquillaje-social-completo-studio-glam-maracaibo",
    description: "Salón, maquillaje y peinados para eventos.",
    city_id: "city-maracaibo",
    category_id: "cat-belleza",
    price_from: 30,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/studioglammaracaibo",
    featured: false,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-belleza",
      name: "Belleza",
      slug: "belleza",
      description: "Salones, barberías y cuidado personal."
    },
    business_id: "biz-maracaibo-06",
    business: {
      id: "biz-maracaibo-06",
      name: "Studio Glam Maracaibo",
      slug: "studio-glam-maracaibo",
      description: "Salón, maquillaje y peinados para eventos.",
      whatsapp_number: "584241110006",
      instagram_url: "https://instagram.com/studioglammaracaibo",
      website_url: null,
      address_text: "Cecilio Acosta, Maracaibo",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-belleza",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-belleza",
        name: "Belleza",
        slug: "belleza",
        description: "Salones, barberías y cuidado personal."
      }
    }
  },
  {
    id: "list-maracaibo-07",
    title: "Conjunto deportivo premium",
    slug: "conjunto-deportivo-premium-moda-vereda-del-lago",
    description: "Ropa casual, deportiva y accesorios para damas y caballeros.",
    city_id: "city-maracaibo",
    category_id: "cat-moda",
    price_from: 34,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/modaveredadellago",
    featured: false,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-moda",
      name: "Moda",
      slug: "moda",
      description: "Ropa, calzado y accesorios."
    },
    business_id: "biz-maracaibo-07",
    business: {
      id: "biz-maracaibo-07",
      name: "Moda Vereda del Lago",
      slug: "moda-vereda-del-lago",
      description: "Ropa casual, deportiva y accesorios para damas y caballeros.",
      whatsapp_number: "584241110007",
      instagram_url: "https://instagram.com/modaveredadellago",
      website_url: null,
      address_text: "Vereda del Lago, Maracaibo",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-moda",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-moda",
        name: "Moda",
        slug: "moda",
        description: "Ropa, calzado y accesorios."
      }
    }
  },
  {
    id: "list-maracaibo-08",
    title: "Mantenimiento de laptop",
    slug: "mantenimiento-de-laptop-servitech-zulia",
    description: "Servicio técnico, instalación y soporte para oficinas.",
    city_id: "city-maracaibo",
    category_id: "cat-servicios",
    price_from: 25,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/servitechzulia",
    featured: true,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-servicios",
      name: "Servicios",
      slug: "servicios",
      description: "Servicios técnicos, impresiones y soluciones profesionales."
    },
    business_id: "biz-maracaibo-08",
    business: {
      id: "biz-maracaibo-08",
      name: "ServiTech Zulia",
      slug: "servitech-zulia",
      description: "Servicio técnico, instalación y soporte para oficinas.",
      whatsapp_number: "584241110008",
      instagram_url: "https://instagram.com/servitechzulia",
      website_url: null,
      address_text: "Indio Mara, Maracaibo",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: true,
      usdt: false,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-servicios",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-servicios",
        name: "Servicios",
        slug: "servicios",
        description: "Servicios técnicos, impresiones y soluciones profesionales."
      }
    }
  },
  {
    id: "list-maracaibo-09",
    title: "Redmi Note 13",
    slug: "redmi-note-13-tecno-plus-delicias",
    description: "Equipos nuevos y usados probados con garantía local.",
    city_id: "city-maracaibo",
    category_id: "cat-tecnologia",
    price_from: 210,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/tecnoplusdelicias",
    featured: true,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
      description: "Celulares, laptops, consolas y accesorios."
    },
    business_id: "biz-maracaibo-09",
    business: {
      id: "biz-maracaibo-09",
      name: "Tecno Plus Delicias",
      slug: "tecno-plus-delicias",
      description: "Equipos nuevos y usados probados con garantía local.",
      whatsapp_number: "584241110009",
      instagram_url: "https://instagram.com/tecnoplusdelicias",
      website_url: null,
      address_text: "Las Delicias, Maracaibo",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: true,
      usdt: false,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-tecnologia",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-tecnologia",
        name: "Tecnología",
        slug: "tecnologia",
        description: "Celulares, laptops, consolas y accesorios."
      }
    }
  },
  {
    id: "list-maracaibo-10",
    title: "Kit de arrastre para moto Bera",
    slug: "kit-de-arrastre-para-moto-bera-moto-repuestos-18",
    description: "Pastillas, cauchos y repuestos para motos.",
    city_id: "city-maracaibo",
    category_id: "cat-repuestos",
    price_from: 26,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/motorepuestos18",
    featured: false,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-repuestos",
      name: "Repuestos",
      slug: "repuestos",
      description: "Autopartes y repuestos para carros."
    },
    business_id: "biz-maracaibo-10",
    business: {
      id: "biz-maracaibo-10",
      name: "Moto Repuestos 18",
      slug: "moto-repuestos-18",
      description: "Pastillas, cauchos y repuestos para motos.",
      whatsapp_number: "584241110010",
      instagram_url: "https://instagram.com/motorepuestos18",
      website_url: null,
      address_text: "18 de Octubre, Maracaibo",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-repuestos",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-repuestos",
        name: "Repuestos",
        slug: "repuestos",
        description: "Autopartes y repuestos para carros."
      }
    }
  },
  {
    id: "list-maracaibo-11",
    title: "Estante organizador metálico",
    slug: "estante-organizador-metalico-casa-nube-hogar",
    description: "Muebles livianos, decoración y organización del hogar.",
    city_id: "city-maracaibo",
    category_id: "cat-hogar",
    price_from: 42,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/casanubehogar",
    featured: false,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-hogar",
      name: "Hogar",
      slug: "hogar",
      description: "Electrodomésticos y soluciones del hogar."
    },
    business_id: "biz-maracaibo-11",
    business: {
      id: "biz-maracaibo-11",
      name: "Casa Nube Hogar",
      slug: "casa-nube-hogar",
      description: "Muebles livianos, decoración y organización del hogar.",
      whatsapp_number: "584241110011",
      instagram_url: "https://instagram.com/casanubehogar",
      website_url: null,
      address_text: "La Lago, Maracaibo",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-hogar",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-hogar",
        name: "Hogar",
        slug: "hogar",
        description: "Electrodomésticos y soluciones del hogar."
      }
    }
  },
  {
    id: "list-maracaibo-12",
    title: "Combo doble burger",
    slug: "combo-doble-burger-burger-go-maracaibo",
    description: "Hamburguesas, combos y delivery nocturno.",
    city_id: "city-maracaibo",
    category_id: "cat-comida",
    price_from: 8,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/burgergomaracaibo",
    featured: false,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-comida",
      name: "Comida",
      slug: "comida",
      description: "Restaurantes, panaderías y comida para llevar."
    },
    business_id: "biz-maracaibo-12",
    business: {
      id: "biz-maracaibo-12",
      name: "Burger Go Maracaibo",
      slug: "burger-go-maracaibo",
      description: "Hamburguesas, combos y delivery nocturno.",
      whatsapp_number: "584241110012",
      instagram_url: "https://instagram.com/burgergomaracaibo",
      website_url: null,
      address_text: "La Lago, Maracaibo",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-comida",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-comida",
        name: "Comida",
        slug: "comida",
        description: "Restaurantes, panaderías y comida para llevar."
      }
    }
  },
  {
    id: "list-maracaibo-13",
    title: "Montura pediátrica flexible",
    slug: "montura-pediatrica-flexible-optica-milenio-zulia",
    description: "Lentes, monturas y fórmulas con atención rápida.",
    city_id: "city-maracaibo",
    category_id: "cat-salud",
    price_from: 29,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/opticamileniozulia",
    featured: true,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-salud",
      name: "Salud",
      slug: "salud",
      description: "Farmacias, ópticas y bienestar."
    },
    business_id: "biz-maracaibo-13",
    business: {
      id: "biz-maracaibo-13",
      name: "Óptica Milenio Zulia",
      slug: "optica-milenio-zulia",
      description: "Lentes, monturas y fórmulas con atención rápida.",
      whatsapp_number: "584241110013",
      instagram_url: "https://instagram.com/opticamileniozulia",
      website_url: null,
      address_text: "Centro, Maracaibo",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-salud",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-salud",
        name: "Salud",
        slug: "salud",
        description: "Farmacias, ópticas y bienestar."
      }
    }
  },
  {
    id: "list-maracaibo-14",
    title: "Corte con barba y cejas",
    slug: "corte-con-barba-y-cejas-barber-house-mcbo",
    description: "Barbería moderna con paquetes semanales.",
    city_id: "city-maracaibo",
    category_id: "cat-belleza",
    price_from: 9,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/barberhousemcbo",
    featured: false,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-belleza",
      name: "Belleza",
      slug: "belleza",
      description: "Salones, barberías y cuidado personal."
    },
    business_id: "biz-maracaibo-14",
    business: {
      id: "biz-maracaibo-14",
      name: "Barber House MCBO",
      slug: "barber-house-mcbo",
      description: "Barbería moderna con paquetes semanales.",
      whatsapp_number: "584241110014",
      instagram_url: "https://instagram.com/barberhousemcbo",
      website_url: null,
      address_text: "Padilla, Maracaibo",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-belleza",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-belleza",
        name: "Belleza",
        slug: "belleza",
        description: "Salones, barberías y cuidado personal."
      }
    }
  },
  {
    id: "list-maracaibo-15",
    title: "Vestido midi casual",
    slug: "vestido-midi-casual-pasarela-zuliana",
    description: "Boutique con prendas importadas y cambios fáciles.",
    city_id: "city-maracaibo",
    category_id: "cat-moda",
    price_from: 27,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/pasarelazuliana",
    featured: false,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-moda",
      name: "Moda",
      slug: "moda",
      description: "Ropa, calzado y accesorios."
    },
    business_id: "biz-maracaibo-15",
    business: {
      id: "biz-maracaibo-15",
      name: "Pasarela Zuliana",
      slug: "pasarela-zuliana",
      description: "Boutique con prendas importadas y cambios fáciles.",
      whatsapp_number: "584241110015",
      instagram_url: "https://instagram.com/pasarelazuliana",
      website_url: null,
      address_text: "Don Bosco, Maracaibo",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: true,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-moda",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-moda",
        name: "Moda",
        slug: "moda",
        description: "Ropa, calzado y accesorios."
      }
    }
  },
  {
    id: "list-maracaibo-16",
    title: "Pendón 80x200 con diseño",
    slug: "pendon-80x200-con-diseno-print-zona-norte",
    description: "Impresión, diseño rápido y material POP.",
    city_id: "city-maracaibo",
    category_id: "cat-servicios",
    price_from: 22,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/printzonanorte",
    featured: false,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-servicios",
      name: "Servicios",
      slug: "servicios",
      description: "Servicios técnicos, impresiones y soluciones profesionales."
    },
    business_id: "biz-maracaibo-16",
    business: {
      id: "biz-maracaibo-16",
      name: "Print Zona Norte",
      slug: "print-zona-norte",
      description: "Impresión, diseño rápido y material POP.",
      whatsapp_number: "584241110016",
      instagram_url: "https://instagram.com/printzonanorte",
      website_url: null,
      address_text: "Zona Norte, Maracaibo",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-servicios",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-servicios",
        name: "Servicios",
        slug: "servicios",
        description: "Servicios técnicos, impresiones y soluciones profesionales."
      }
    }
  },
  {
    id: "list-maracaibo-17",
    title: "Disco SSD 500GB",
    slug: "disco-ssd-500gb-compumarket-cabimas-express",
    description: "Accesorios, memorias y redes con entrega en el día.",
    city_id: "city-maracaibo",
    category_id: "cat-tecnologia",
    price_from: 44,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/compumarketcabimasexpress",
    featured: true,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
      description: "Celulares, laptops, consolas y accesorios."
    },
    business_id: "biz-maracaibo-17",
    business: {
      id: "biz-maracaibo-17",
      name: "CompuMarket Cabimas Express",
      slug: "compumarket-cabimas-express",
      description: "Accesorios, memorias y redes con entrega en el día.",
      whatsapp_number: "584241110017",
      instagram_url: "https://instagram.com/compumarketcabimasexpress",
      website_url: null,
      address_text: "C1, Maracaibo",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: true,
      usdt: true,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-tecnologia",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-tecnologia",
        name: "Tecnología",
        slug: "tecnologia",
        description: "Celulares, laptops, consolas y accesorios."
      }
    }
  },
  {
    id: "list-maracaibo-18",
    title: "Base de motor Hyundai Getz",
    slug: "base-de-motor-hyundai-getz-autopartes-san-francisco",
    description: "Repuestos de suspensión y mantenimiento preventivo.",
    city_id: "city-maracaibo",
    category_id: "cat-repuestos",
    price_from: 19,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/autopartessanfrancisco",
    featured: false,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-repuestos",
      name: "Repuestos",
      slug: "repuestos",
      description: "Autopartes y repuestos para carros."
    },
    business_id: "biz-maracaibo-18",
    business: {
      id: "biz-maracaibo-18",
      name: "AutoPartes San Francisco",
      slug: "autopartes-san-francisco",
      description: "Repuestos de suspensión y mantenimiento preventivo.",
      whatsapp_number: "584241110018",
      instagram_url: "https://instagram.com/autopartessanfrancisco",
      website_url: null,
      address_text: "San Francisco, Maracaibo",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-repuestos",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-repuestos",
        name: "Repuestos",
        slug: "repuestos",
        description: "Autopartes y repuestos para carros."
      }
    }
  },
  {
    id: "list-maracaibo-19",
    title: "Bandeja familiar maracucha",
    slug: "bandeja-familiar-maracucha-sazon-marabino",
    description: "Comida casera, almuerzos y bandejas familiares.",
    city_id: "city-maracaibo",
    category_id: "cat-comida",
    price_from: 16,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/sazonmarabino",
    featured: false,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-comida",
      name: "Comida",
      slug: "comida",
      description: "Restaurantes, panaderías y comida para llevar."
    },
    business_id: "biz-maracaibo-19",
    business: {
      id: "biz-maracaibo-19",
      name: "Sazón Marabino",
      slug: "sazon-marabino",
      description: "Comida casera, almuerzos y bandejas familiares.",
      whatsapp_number: "584241110019",
      instagram_url: "https://instagram.com/sazonmarabino",
      website_url: null,
      address_text: "Pomona, Maracaibo",
      delivery_available: true,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: false,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-comida",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-comida",
        name: "Comida",
        slug: "comida",
        description: "Restaurantes, panaderías y comida para llevar."
      }
    }
  },
  {
    id: "list-maracaibo-20",
    title: "Cambio de pantalla Samsung A14",
    slug: "cambio-de-pantalla-samsung-a14-zulia-fix-express",
    description: "Reparación de celulares, tablets y computadoras.",
    city_id: "city-maracaibo",
    category_id: "cat-servicios",
    price_from: 38,
    currency: "USD",
    in_stock: true,
    source_type: "manual",
    source_url: "https://instagram.com/zuliafixexpress",
    featured: true,
    active: true,
    city: {
      id: "city-maracaibo",
      name: "Maracaibo",
      state: "Zulia",
      slug: "maracaibo"
    },
    category: {
      id: "cat-servicios",
      name: "Servicios",
      slug: "servicios",
      description: "Servicios técnicos, impresiones y soluciones profesionales."
    },
    business_id: "biz-maracaibo-20",
    business: {
      id: "biz-maracaibo-20",
      name: "Zulia Fix Express",
      slug: "zulia-fix-express",
      description: "Reparación de celulares, tablets y computadoras.",
      whatsapp_number: "584241110020",
      instagram_url: "https://instagram.com/zuliafixexpress",
      website_url: null,
      address_text: "Bella Vista, Maracaibo",
      delivery_available: false,
      pickup_available: true,
      payment_mobile: true,
      zelle: false,
      usdt: false,
      cash_usd: true,
      verified: true,
      active: true,
      city_id: "city-maracaibo",
      category_id: "cat-servicios",
      city: {
        id: "city-maracaibo",
        name: "Maracaibo",
        state: "Zulia",
        slug: "maracaibo"
      },
      category: {
        id: "cat-servicios",
        name: "Servicios",
        slug: "servicios",
        description: "Servicios técnicos, impresiones y soluciones profesionales."
      }
    }
  }
];

export function getDemoBusinesses() {
  return businesses;
}
