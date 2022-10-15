const inputValidation = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (name.length <= 4) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
};

module.exports = inputValidation;
