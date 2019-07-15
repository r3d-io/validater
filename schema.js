const getTransaction = {
  "type": "object",
  "properties": {
    "blockNumber": {
      "type": "integer"
    },
    "from": {
      "type": "string"
    },
    "gas": {
      "type": "integer"
    },
    "gasPrice": {
      "type": "string"
    },
    "hash": {
      "type": "string"
    },
    "input": {
      "type": "string"
    },
    "nonce": {
      "type": "integer"
    },
    "to": {
      "type": "string"
    },
    "transactionIndex": {
      "type": "integer"
    },
    "value": {
      "type": "string"
    }
  },
  "required": [
    "blockNumber",
    "from",
    "gas",
    "gasPrice",
    "hash",
    "input",
    "to",
    "transactionIndex",
    "value"
  ]
}

const getTransactionReceipt = {
  "type": "object",
  "properties": {
    "blockNumber": {
      "type": "integer"
    },
    "cumulativeGasUsed": {
      "type": "integer"
    },
    "from": {
      "type": "string"
    },
    "gasUsed": {
      "type": "integer"
    },
    "logs": {
      "type": "array",
      "items": {}
    },
    "status": {
      "type": "boolean"
    },
    "to": {
      "type": "string"
    },
    "transactionHash": {
      "type": "string"
    },
    "transactionIndex": {
      "type": "integer"
    }
  },
  "required": [
    "blockNumber",
    "cumulativeGasUsed",
    "from",
    "gasUsed",
    "logs",
    "status",
    "to",
    "transactionHash",
    "transactionIndex"
  ]
}

const getBlock = {
  "type": "object",
  "properties": {
    "gasLimit": {
      "type": "integer"
    },
    "gasUsed": {
      "type": "integer"
    },
    "hash": {
      "type": "string"
    },
    "nonce": {
      "type": "string"
    },
    "number": {
      "type": "integer"
    },
    "parentHash": {
      "type": "string"
    },
    "size": {
      "type": "integer"
    },
    "stateRoot": {
      "type": "string"
    },
    "timestamp": {
      "type": "integer"
    },
    "transactions": {
      "type": "array",
      "items": getTransaction
    }
  },
  "required": [
    "gasLimit",
    "gasUsed",
    "hash",
    "nonce",
    "number",
    "parentHash",
    "size",
    "stateRoot",
    "timestamp",
    "transactions",
  ]
}

module.exports = {
  getTransaction,
  getTransactionReceipt,
  getBlock
}