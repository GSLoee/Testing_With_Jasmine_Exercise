
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {amount: 50000, years: 10, rate: 3.5};
  expect(calculateMonthlyPayment(values)).toEqual('494.43')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {amount: 50000, years: 10, rate: 3.5}
  expect(calculateMonthlyPayment(values)).toEqual('494.43')
});

/// etc
