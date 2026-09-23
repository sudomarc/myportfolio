export const site = {
  name: "Marco Polo",
  title: "Marco Polo — Portfolio",
  description:
    "Portfolio personnel : projets web, interfaces, expériences digitales et études de cas.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  location: "Guinée · Remote",
  availability: "Disponible pour des projets sélectionnés",
};

export function getWhatsAppUrl() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

  if (!number) {
    return "#contact";
  }

  const message = encodeURIComponent(
    "Bonjour Marco, je viens de voir votre portfolio et je souhaite discuter d’un projet."
  );

  return `https://wa.me/${number}?text=${message}`;
}
