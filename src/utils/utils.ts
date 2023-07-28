export function formatCurrency(currency: number) {
  return new Intl.NumberFormat('de-DE').format(currency).replace('.', ',')
}

export function formatNumberToSocialStyle(value: number) {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(value)
    .replace('.', ',')
    .toLowerCase()
}
