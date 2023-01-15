export type PeriodType = '10' | '15' | '20' | 'Unlimited';
type CardType = 'Lava Smile' | 'Lava Gold' | 'Lava Platinum' | 'Lava Diamond';

export interface Card {
  code: string;
  type: CardType;
  activeDate?: string | null;
  customerName?: string | null;
  customerAddress?: string | null;
  customerPhoneNumber?: string | null;
  customerEmail?: string | null;
}

export interface CardResponse {
  id: number;
  attributes: Card;
}
