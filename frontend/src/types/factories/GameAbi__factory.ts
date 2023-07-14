/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.46.0
  Forc version: 0.40.1
  Fuel-Core version: 0.19.0
*/

import { Interface, Contract } from "fuels";
import type { Provider, Account, AbstractAddress } from "fuels";
import type { GameAbi, GameAbiInterface } from "../GameAbi";

const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "enum PlayerType",
      "components": [
        {
          "name": "SuperHero",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "SuperVillain",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "str[11]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "str[17]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "struct Player",
      "components": [
        {
          "name": "level",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "player_type",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [],
      "name": "level_up",
      "output": {
        "name": "",
        "type": 5,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        },
        {
          "name": "payable",
          "arguments": []
        }
      ]
    },
    {
      "inputs": [],
      "name": "new_player",
      "output": {
        "name": "",
        "type": 4,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": 0,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": null
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 2,
        "typeArguments": null
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
}

export class GameAbi__factory {
  static readonly abi = _abi
  static createInterface(): GameAbiInterface {
    return new Interface(_abi) as unknown as GameAbiInterface
  }
  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): GameAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as GameAbi
  }
}