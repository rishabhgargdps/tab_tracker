const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email().error(() => {
        return res.status(400).json({
          message: 'You must provide a valid email address'
        })
      }),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
        .error(() => {
          return res.status(400).json({
            message: `The password failed to match the following criteria:
                        <br>
              1. It must contain ONLY the following characters: lower case, upper case, numerics
              <br>
              2. It must be atleast 8 characters long and at max 32 characters long
              `
          })
        })
    })
    const { error, value } = schema.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password failed to match the following criteria:
                        <br>
                        1. It must contain ONLY the following characters: lower case, upper case, numerics
                        <br>
                        2. It must be atleast 8 characters long and at max 32 characters long
                        `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
