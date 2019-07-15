let data = require("./example");
let schemas = require("./schema");
const chalk = require('chalk');

let Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

function validateJson(schema, data, name) {
  let validate = ajv.compile(schema);
  let valid = validate(data);
  if (!valid) console.log(validate.errors);
  else console.log("Valid data",chalk.green(name))
}

validateJson(schemas.getTransaction, data.getTransaction, "get tranasction")
validateJson(schemas.getTransactionReceipt, data.getTransactionReceipt, "get transaction receipt")
