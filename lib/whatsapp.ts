export const WHATSAPP_CONFIG = {
  number: '5583991907740',
  defaultMessage: 'Olá, quero agendar minha aula experimental na Estiga Total!',
};

export function getWhatsAppLink(customMessage?: string): string {
  const message = encodeURIComponent(customMessage || WHATSAPP_CONFIG.defaultMessage);
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${message}`;
}
