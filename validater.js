let data = require("./example");
let schemas = require("./schema");
let test = require("./test");
const chalk = require('chalk');

let Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

function validateJson(schema, data, name) {
  let validate = ajv.compile(schema);
  let valid = validate(data);
  if (!valid) console.log(validate.errors);
  else console.log("Valid data",chalk.green(name))
}

console.time();
validateJson(schemas.getTransaction, data.getTransaction, "get tranasction")
validateJson(schemas.getTransactionReceipt, data.getTransactionReceipt, "get transaction receipt")
console.log(test.getBlock.transactions.length)
validateJson(schemas.getBlock, test.getBlock, "get Block")
console.timeEnd();

