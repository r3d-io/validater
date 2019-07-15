let data = require("./example");
let schemas = require("./schema");

let Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

function validateJson(schema,data) {
  let validate = ajv.compile(schema);
  let valid = validate(data);
  if (!valid) console.log(validate.errors);
  else console.log("Valid data")
}

validateJson(schemas.getTransaction, data.getTransaction)