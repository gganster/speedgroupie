const urls = {
  1: "https://open.spotify.com/intl-fr/artist/1dfeR4HaWDbWqFHLkxsg1d",
  2: "https://open.spotify.com/intl-fr/artist/2vaWvC8suCFkRXejDOK7EE",
  3: "https://open.spotify.com/intl-fr/artist/0k17h0D3J5VfsdmQ1iZtE9",
  4: "https://open.spotify.com/intl-fr/artist/27T030eWyCQRmDyuvr1kxY",
  5: "https://open.spotify.com/intl-fr/artist/15UsOTVnJzReFVN1VCnxy4",
  6: "https://open.spotify.com/intl-fr/artist/4LLpKhyESsyAXpc4laK94U",
  7: "https://open.spotify.com/intl-fr/artist/6C1ohJrd5VydigQtaGy5Wa",
  8: "https://open.spotify.com/intl-fr/artist/2YZyLoL8N0Wb9xBt1NhZWg",
  9: "https://open.spotify.com/intl-fr/artist/711MCceyCBcFnzjGY4Q7Un",
  10: "https://open.spotify.com/intl-fr/artist/1w5Kfo2jwwIPruYS2UWh56",
  11: "https://open.spotify.com/intl-fr/artist/6jJ0s89eD6GaHleKKya26X",
  12: "https://open.spotify.com/intl-fr/artist/5pKCCKE2ajJHZ9KAiaK11H",
  13: "https://open.spotify.com/intl-fr/artist/3CkvROUTQ6nRi9yQOcsB50",
  14: "https://open.spotify.com/intl-fr/artist/4lxfqrEsLX6N1N4OCSkILp",
  15: "https://open.spotify.com/intl-fr/artist/36QJpDe2go2KgaRleHCDTp",
  16: "https://open.spotify.com/intl-fr/artist/776Uo845nYHJpNaStv1Ds4",
  17: "https://open.spotify.com/intl-fr/artist/1LZEQNv7sE11VDY3SdxQeN",
  18: "https://open.spotify.com/intl-fr/artist/568ZhdwyaiCyOGJRtNYhWf",
  19: "https://open.spotify.com/intl-fr/artist/7Ey4PD4MYsKc5I2dolUwbH",
  20: "https://open.spotify.com/intl-fr/artist/0WwSkZ7LtFUFjGjMZBMt6T",
  21: "https://open.spotify.com/intl-fr/artist/5Q9RKJrjHdfpWVxzv45XTJ",
  22: "https://open.spotify.com/intl-fr/artist/0RqtSIYZmd4fiBKVFqyIqD",
  23: "https://open.spotify.com/intl-fr/artist/53XhwfbYqKCa1cC15pYq2q",
  24: "https://open.spotify.com/intl-fr/artist/4MCBfE4596Uoi2O4DtmEMz",
  25: "https://open.spotify.com/intl-fr/artist/4xRYI6VqpkE3UwrDrAZL8L",
  26: "https://open.spotify.com/intl-fr/artist/5IH6FPUwQTxPSXurCrcIov",
  27: "https://open.spotify.com/intl-fr/artist/2FjkZT851ez950cyPjeYid",
  28: "https://open.spotify.com/intl-fr/artist/6cEuCEZu7PAE9ZSzLLc2oQ",
  29: "https://open.spotify.com/intl-fr/artist/246dkjvS1zLTtiykXe5h60",
  30: "https://open.spotify.com/intl-fr/artist/0Y5tJX1MQlPlqiwlOH1tJY",
  31: "https://open.spotify.com/intl-fr/artist/6l3HvQ5sa6mXTsMTB19rO5",
  32: "https://open.spotify.com/intl-fr/artist/6deZN1bslXzeGvOLaLMOIF",
  33: "https://open.spotify.com/intl-fr/artist/6O2zJ0tId7g07yzHtX0yap",
  34: "https://open.spotify.com/intl-fr/artist/3qm84nBOXUEQ2vnTfUTTFC",
  35: "https://open.spotify.com/intl-fr/artist/4EnEZVjo3w1cwcQYePccay",
  36: "https://open.spotify.com/intl-fr/artist/51Blml2LZPmy7TTiAg47vQ",
  37: "https://open.spotify.com/intl-fr/artist/7Ln80lUS6He07XvHI8qqHH",
  38: "https://open.spotify.com/intl-fr/artist/4UXqAaa6dQYAk18Lv7PEgX",
  39: "https://open.spotify.com/intl-fr/artist/3AA28KZvwAUcZuOKwyblJQ",
  40: "https://open.spotify.com/intl-fr/artist/0ECwFtbIWEVNwjlrfc6xoL",
  41: "https://open.spotify.com/intl-fr/artist/6XyY86QOPPrYVGvF9ch6wz",
  42: "https://open.spotify.com/intl-fr/artist/0L8ExT028jH3ddEcZwqJJ5",
  43: "https://open.spotify.com/intl-fr/artist/7dGJo4pcD2V6oG8kP0tJRR",
  44: "https://open.spotify.com/intl-fr/artist/7oPftvlwr6VrsViSDV7fJY",
  45: "https://open.spotify.com/intl-fr/artist/2ye2Wgw4gimLv2eAKyk1NB",
  46: "https://open.spotify.com/intl-fr/artist/4gzpq5DPGxSnKTe4SA8HAU",
  47: "https://open.spotify.com/intl-fr/artist/04gDigrS5kc9YWfZHwBETP",
  48: "https://open.spotify.com/intl-fr/artist/3YQKmKGau1PzlVlkL1iodx",
  49: "https://open.spotify.com/intl-fr/artist/22bE4uQ6baNwSHPVcDxLCe",
  50: "https://open.spotify.com/intl-fr/artist/12Chz98pHFMPJEknJQMWvI",
  51: "https://open.spotify.com/intl-fr/artist/7jy3rLJdDQY21OgRLCZ9sD",
  52: "https://open.spotify.com/intl-fr/artist/69GGBxA162lTqCwzJG5jLp"
}

export default urls;