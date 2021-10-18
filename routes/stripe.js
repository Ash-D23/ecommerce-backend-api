const router = require("express").Router();
const stripe = require("stripe")("sk_test_51JjemaSAE3j38Gp7k914QTBeDnn5jhmnz3WPSFwavABLNZ8YUR9YL4b12hznkpKD152LlVVsR98oyABjFj0Wpq5b00EqVZmSPG");


router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "inr",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log(stripeErr)
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;