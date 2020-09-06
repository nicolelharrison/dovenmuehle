const strings = [
  'Private tax NASDAQ corporate notes term investment bills strategy called.',
  'Benchmark performance 401k NYSE upswing expenses economy index funds risk term corporation management junk bonds.',
  'Value volatile funds stocks retirement NYSE prices credit holder taxpayer appeal hedge fund rollover mutual funds.',
  'Capital market default potential tax rates government improve bondholders Nikkei yield rollover municipal.',
  'Bondholders federal 401k dividends market exposure.',
  'Debt inverse holder hedge fund maturities exchange traded funds improve industry.',
];

module.exports = {
  add(string) {
    strings.unshift(string);
  },
  get() {
    return strings;
  },
};
