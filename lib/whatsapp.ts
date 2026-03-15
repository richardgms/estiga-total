export const WHATSAPP_CONFIG = {
  unidade1: {
    number: '5583991907740',
    label: 'Unidade 1 - Centro/Popular'
  },
  unidade2: {
    number: '5583994206593',
    label: 'Unidade 2 - Popular (R. do Colégio)'
  },
  defaultMessage: 'Olá, quero agendar minha aula experimental na Estiga Total!',
};

export type UnidadeKey = 'unidade1' | 'unidade2';

/**
 * Gera um link para o WhatsApp com base na unidade selecionada.
 * Se o primeiro argumento não for uma chave válida de unidade, ele é tratado como a mensagem.
 */
export function getWhatsAppLink(unidadeOrMessage?: UnidadeKey | string, customMessage?: string): string {
  let selectedUnidade: UnidadeKey = 'unidade1';
  let message = WHATSAPP_CONFIG.defaultMessage; // Initialize with default message

  // Verifica se o primeiro argumento é uma UnidadeKey válida
  const isUnidadeKey = (val: any): val is UnidadeKey => {
    return val === 'unidade1' || val === 'unidade2';
  };

  if (unidadeOrMessage) {
    if (isUnidadeKey(unidadeOrMessage)) {
      selectedUnidade = unidadeOrMessage;
      // If customMessage is provided, use it, otherwise keep the default message
      if (customMessage !== undefined) {
        message = customMessage;
      }
    } else {
      // If not a unit key, assume it's the message (for backward compatibility)
      message = unidadeOrMessage;
    }
  }

  const phone = WHATSAPP_CONFIG[selectedUnidade].number;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}${message ? `?text=${encodedMessage}` : ''}`;
}
