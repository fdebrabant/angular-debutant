module.exports = {
  loginAction,
  logoutAction,
  passwordAction,
  createAction
};

const user = {
  gender: 'Mr',
  firstName: 'John',
  lastName: 'Doe',
  email: 'j.doe@nowhere.com',
  addressInvoice: {
    street: '42 rue des tests',
    zipCode: '33000',
    city: 'Bordeaux',
    country: 'France'
  },
  addressesDelivery: [
    {
      street: '42 rue des tests',
      zipCode: '33000',
      city: 'Bordeaux',
      country: 'France',
      isDefault: true
    }
  ]
};

function loginAction(req, res, next) {
  if (req.body.email === user.email && req.body.password === user.password) {
    res.json(user);
  } else {
    res.status(404).end();
  }
}

function createAction(req, res, next) {
  res.status(200).end();
}

function logoutAction(req, res, next) {
  res.status(200).end();
}

function passwordAction(req, res, next) {
  res.status(200).end();
}
