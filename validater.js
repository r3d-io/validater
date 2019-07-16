let ethData = require("./ethExample");
let btcData = require("./btcExample");
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

validateJson(schemas.ethGetTransaction, ethData.getTransaction, "get tranasction")
validateJson(schemas.ethGetTransactionReceipt, ethData.getTransactionReceipt, "get transaction receipt")
validateJson(schemas.ethTraceBlockByNumber, ethData.ethTraceBlockByNumber, "eth Trace Block By Number")
console.time();
validateJson(schemas.ethGetBlock, ethData.getBlock, "get Block eth")
console.timeEnd();
console.time();
validateJson(schemas.btcGetBlockL1, btcData.btcGetBlockL1, "get Block btc L1")
validateJson(schemas.btcGetBlockL2, btcData.btcGetBlockL2, "get Block btc L2")
console.timeEnd();

