const toCurrencyFormat = (value) => {
    const formattedValue = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  
    return formattedValue + '.00';
  };
  
  export { toCurrencyFormat };
  