export function isSlug(text: string, separator = "-"): boolean {
    const regex = new RegExp(`^[a-z0-9${separator}]+$`);
    return regex.test(text);
  }