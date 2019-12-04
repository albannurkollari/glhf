// Libraries
const md5 = require('md5');

// Mongoose schemas
const URL = require('../models/url');

const saveURL = url => {
  const md5hash = md5(url);
};

// Routes
module.exports = [
  [DEFAULT_PATH, {
    GET: async (_, res) => res.json(await Account.find()),
    POST: async ({body}, res) => res.json(await new Account(body).save())
  }],
  [CREATE, {
    POST: async ({body}, res) => {
      if (await Account.findOne({email: body.email})) {
        res.status(400).send('The email is already registered to an account!');

        return;
      }

      const salt = await bcrypt.genSalt(); // => salt rounds (defaults to 10)
      const password = await bcrypt.hash(body.password, salt);

      const newAccount = new Account({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password
      });

      res.json(await newAccount.save());
    }
  }],
  [LOGIN, {
    POST: async ({body}, res) => {
      const account = await Account.findOne({email: body.email});

      if (!account) {
        res.status(400).send('There is no account associated with this email address!');

        return;
      }

      // Invalid password check
      if (!(await bcrypt.compare(body.password, account.password))) {
        res.status(400).send('Invalid password!');

        return;
      }

      const token = jwt.sign({_id: account._id}, process.env.TOKEN_SECRET);
      res.header('auth-token', token).json({isLoggedIn: true});
    }
  }],
  [SETTINGS, {
    GET: async (req, res) => {
      // TODO: Create a Settings schema extending from Account
      // currently just for testing purposes send a hard-coded data
      const account = await Account.findById(req.user._id);

      if (!account) {
        res.status(400).json({isLoggedIn: false, error: 'Invalid account!'});

        return;
      }

      res.json({isLoggedIn: true, account});
    }
  }],
  [ID, {
    GET: async ({params: {id}}, res) => res.json(await Account.findById(id)),
    PUT: async ({body}, res) => res.json(await Account(body).save())
  }]
];
