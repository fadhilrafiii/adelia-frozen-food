export const getWeightPerQtyProduct = (weight?: number, qty?: number) => {
  if (weight && qty) return `${weight}gr / ${qty}pcs`;

  if (weight) return `${weight}gr`;

  if (qty) return `${qty}pcs`;

  return '';
};
