const ethGetTransaction = {
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

const ethGetTransactionReceipt = {
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

const ethGetBlock = {
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
      "items": ethGetTransaction
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

const btcGetBlock = {
  "type": "object",
  "properties": {
    "result": {
      "type": "object",
      "properties": {
        "hash": {
          "type": "string"
        },
        "confirmations": {
          "type": "integer"
        },
        "strippedsize": {
          "type": "integer"
        },
        "size": {
          "type": "integer"
        },
        "weight": {
          "type": "integer"
        },
        "height": {
          "type": "integer"
        },
        "version": {
          "type": "integer"
        },
        "versionHex": {
          "type": "string"
        },
        "merkleroot": {
          "type": "string"
        },
        "tx": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "time": {
          "type": "integer"
        },
        "mediantime": {
          "type": "integer"
        },
        "nonce": {
          "type": "integer"
        },
        "bits": {
          "type": "string"
        },
        "difficulty": {
          "type": "number"
        },
        "chainwork": {
          "type": "string"
        },
        "nTx": {
          "type": "integer"
        },
        "previousblockhash": {
          "type": "string"
        },
        "nextblockhash": {
          "type": "string"
        }
      },
      "required": [
        "hash",
        "confirmations",
        "strippedsize",
        "size",
        "weight",
        "height",
        "version",
        "versionHex",
        "merkleroot",
        "tx",
        "time",
        "mediantime",
        "nonce",
        "bits",
        "difficulty",
        "chainwork",
        "nTx",
        "previousblockhash",
        "nextblockhash"
      ]
    },
    "error": {
      "type": "null"
    },
    "id": {
      "type": "string"
    }
  },
  "required": [
    "result",
    "error",
    "id"
  ]
}

const ethTraceBlockByNumber = {
  "type": "object",
  "properties": {
    "jsonrpc": {
      "type": "string"
    },
    "id": {
      "type": "integer"
    },
    "result": {
      "type": "array",
      "items":{
        "type": "object",
        "properties": {
          "result": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "from": {
                "type": "string"
              },
              "to": {
                "type": "string"
              },
              "value": {
                "type": "string"
              },
              "gas": {
                "type": "string"
              },
              "gasUsed": {
                "type": "string"
              },
              "input": {
                "type": "string"
              },
              "output": {
                "type": "string"
              },
              "time": {
                "type": "string"
              }
            },
            "required": [
              "type",
              "from",
              "to",
              "value",
              "gas",
              "gasUsed",
              "input",
              "output",
              "time"
            ]
          }
        },
        "required": [
          "result"
        ]
      }
    }
  },
  "required": [
    "jsonrpc",
    "id",
    "result"
  ]
}

module.exports = {
  ethGetTransaction,
  ethGetTransactionReceipt,
  ethGetBlock,
  btcGetBlock,
  ethTraceBlockByNumber
}