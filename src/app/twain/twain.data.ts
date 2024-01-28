import { Quote } from './quote';

export const QUOTES: Quote[] = [
 'The man who does not read good books has no advantage over the man who cannot read them.',
  'Get your facts first, and then you can distort them as much as you please.',
]
.map((q, i) => ({ id: i + 1, quote: q }));


