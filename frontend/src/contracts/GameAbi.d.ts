/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.41.0
  Forc version: 0.35.5
  Fuel-Core version: 0.17.3
*/

import type {
  BigNumberish,
  BN,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

import type { Enum } from "./common";

export enum PlayerTypeInput { SuperHero = 'SuperHero', SuperVillain = 'SuperVillain' };
export enum PlayerTypeOutput { SuperHero = 'SuperHero', SuperVillain = 'SuperVillain' };

export type PlayerInput = { level: BigNumberish, player_type: PlayerTypeInput };
export type PlayerOutput = { level: BN, player_type: PlayerTypeOutput };

interface GameAbiInterface extends Interface {
  functions: {
    level_up: FunctionFragment;
    new_player: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'level_up', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'new_player', values: []): Uint8Array;

  decodeFunctionData(functionFragment: 'level_up', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'new_player', data: BytesLike): DecodedValue;
}

export class GameAbi extends Contract {
  interface: GameAbiInterface;
  functions: {
    level_up: InvokeFunction<[], BN>;
    new_player: InvokeFunction<[], PlayerOutput>;
  };
}
