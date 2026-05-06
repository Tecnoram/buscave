export function formatPrice(value: number | null, currency = "USD") {
  if (value === null || Number.isNaN(value)) return "Consultar";

  return new Intl.NumberFormat("es-VE", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}
