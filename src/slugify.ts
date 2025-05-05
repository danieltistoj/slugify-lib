export function slugify(text: string, separator = "-"): string {
  return text
    .normalize("NFD")
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, separator)
    .replace(/^-|-$/g, "");
}
