export default (n, amount = false) => {
  if (amount) {
    return n
      .toFixed(2)
      .toLocaleString("us-EN")
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }
  return (+n.toFixed(2)).toLocaleString("us-EN");
};
