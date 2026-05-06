import { z } from "zod";

export const businessSubmissionSchema = z.object({
  business_name: z.string().min(2, "El nombre del negocio es obligatorio."),
  city_name: z.string().min(2, "La ciudad es obligatoria."),
  category_name: z.string().optional().nullable(),
  whatsapp_number: z.string().optional().nullable(),
  instagram_url: z.string().url("Instagram debe ser una URL válida.").optional().or(z.literal("")),
  contact_name: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
});
