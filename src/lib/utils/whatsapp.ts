export function buildWhatsAppLink(phone: string, message?: string) {
  const cleanPhone = phone.replace(/\D/g, "");
  const base = `https://wa.me/${cleanPhone}`;

  if (!message) return base;

  return `${base}?text=${encodeURIComponent(message)}`;
}
