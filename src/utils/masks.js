export const cpfMask = value => {
    return value
      .replace(/\D/g, '') 
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
}

export const celMask = value => {
  return value
  .replace(/\D/g, '') 
  .replace(/^(\d)/, '($1')
  .replace(/^\((\d{2})(\d)/, '($1) $2')
  .replace(/(\d{4})(\d{1})/,
  ( regex, arg1, arg2) => {
    return arg1 + '-' + arg2 ;
  })
  .replace(/(\d{4})-(\d{1})(\d{3})(\d)/,'$1$2-$3$4')
  .replace(/(\d{5}-\d{4})\d+?$/, '$1')
}