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

const getBlock = {
  "type": "object",
  "properties": {
    "difficulty": {
      "type": "string"
    },
    "extraData": {
      "type": "string"
    },
    "gasLimit": {
      "type": "integer"
    },
    "gasUsed": {
      "type": "integer"
    },
    "hash": {
      "type": "string"
    },
    "logsBloom": {
      "type": "string"
    },
    "miner": {
      "type": "string"
    },
    "mixHash": {
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
    "receiptsRoot": {
      "type": "string"
    },
    "sha3Uncles": {
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
    "totalDifficulty": {
      "type": "string"
    },
    "transactions": {
      "type": "array",
      "items": {
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
      },
    },
    "transactionsRoot": {
      "type": "string"
    },
    "uncles": {
      "type": "array",
      "items": {}
    }
  },
  "required": [
    "difficulty",
    "extraData",
    "gasLimit",
    "gasUsed",
    "hash",
    "logsBloom",
    "miner",
    "mixHash",
    "nonce",
    "number",
    "parentHash",
    "receiptsRoot",
    "sha3Uncles",
    "size",
    "stateRoot",
    "timestamp",
    "totalDifficulty",
    "transactions",
    "transactionsRoot",
    "uncles"
  ]
}

module.exports = {
  getTransaction,
  getTransactionReceipt,
  getBlock
}