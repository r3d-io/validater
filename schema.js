const getTransaction = {
  "type": "object",
  "properties": {
    "blockHash": {
      "type": "string"
    },
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
    "r": {
      "type": "string"
    },
    "s": {
      "type": "string"
    },
    "to": {
      "type": "string"
    },
    "transactionIndex": {
      "type": "integer"
    },
    "v": {
      "type": "string"
    },
    "value": {
      "type": "string"
    }
  },
  "required": [
    "blockHash",
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
    "blockHash": {
      "type": "string"
    },
    "blockNumber": {
      "type": "integer"
    },
    "contractAddress": {
      "type": "null"
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
    "logsBloom": {
      "type": "string"
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
    "blockHash",
    "from",
    "gasUsed",
    "logs",
    "status",
    "to",
    "transactionHash",
    "transactionIndex"
  ]
}

module.exports = {
  getTransaction,
  getTransactionReceipt
}