/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ModuleProxyFactoryInterface extends ethers.utils.Interface {
  functions: {
    "deployModule(address,bytes,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deployModule",
    values: [string, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployModule",
    data: BytesLike
  ): Result;

  events: {
    "ModuleProxyCreation(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ModuleProxyCreation"): EventFragment;
}

export type ModuleProxyCreationEvent = TypedEvent<
  [string, string] & { proxy: string; masterCopy: string }
>;

export class ModuleProxyFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ModuleProxyFactoryInterface;

  functions: {
    deployModule(
      masterCopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deployModule(
    masterCopy: string,
    initializer: BytesLike,
    saltNonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deployModule(
      masterCopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "ModuleProxyCreation(address,address)"(
      proxy?: string | null,
      masterCopy?: string | null
    ): TypedEventFilter<
      [string, string],
      { proxy: string; masterCopy: string }
    >;

    ModuleProxyCreation(
      proxy?: string | null,
      masterCopy?: string | null
    ): TypedEventFilter<
      [string, string],
      { proxy: string; masterCopy: string }
    >;
  };

  estimateGas: {
    deployModule(
      masterCopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployModule(
      masterCopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
