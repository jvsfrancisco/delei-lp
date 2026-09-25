export const directOrder = 'https://instadelivery.com.br/acaideleipenha';
export const whatsapp = 'https://wa.me/5521992569632';
export const instagram = 'https://www.instagram.com/acaideleiof/';
export const instagramHandle = '@acaideleiof';
export const tiktok = 'https://tiktok.com/@acaideleiof';
export const tiktokHandle = '@acaideleiof';
export const ifood = 'https://www.ifood.com.br/delivery/rio-de-janeiro-rj/acai-de-lei---penha-penha-circular/656ecddb-9a72-4c9a-a306-1e6bbbc8d1a8?UTM_Medium=share';
export const food99 = 'https://oia.99app.com/dlp9/dhjLr5?area=BR';

export const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

export const channels = [
  { key: 'cardapio', label: 'Cardápio', long: 'Pedir pelo cardápio', detail: 'Pedido direto, pelo InstaDelivery', href: directOrder },
  { key: 'ifood', label: 'iFood', long: 'iFood', detail: 'Açaí de Lei · Penha', href: ifood },
  { key: '99', label: '99Food', long: '99Food', detail: 'Mais uma forma de pedir', href: food99 },
  { key: 'zap', label: 'WhatsApp', long: 'WhatsApp', detail: '(21) 99256-9632', href: whatsapp },
];

// Capítulos tirados das legendas do próprio reel "Lovezin no Arpoador".
export const chapters: [number, string][] = [
  [0, 'Vem montar comigo o Lovezin'],
  [4, 'Esse é o copo de 400 ml'],
  [6, 'Arregado de morango e Nutella'],
  [9, 'Morango de um lado, Nutella do outro'],
  [14, 'Entram os morangos frescos e o açaí'],
  [17, 'Repito a montagem até o topo'],
  [25, 'Fechar esse copo vai ser um desafio'],
  [28, 'No fim, o resultado é esse'],
];

export const MONTAGEM_DURATION = 33.8;

export const stamp = (s: number) => `0:${String(Math.floor(s)).padStart(2, '0')}`;

export function chapterAt(t: number) {
  let index = 0;
  chapters.forEach(([at], i) => { if (t >= at) index = i; });
  return index;
}
