import { expect, test } from 'vitest'

import * as exports from './index.js'

test('exports', () => {
  expect(Object.keys(exports)).toMatchInlineSnapshot(`
    [
      "CircularReferenceError",
      "InvalidAbiParameterError",
      "InvalidAbiParametersError",
      "InvalidAbiItemError",
      "InvalidAbiTypeParameterError",
      "InvalidFunctionModifierError",
      "InvalidModifierError",
      "InvalidParameterError",
      "InvalidParenthesisError",
      "InvalidSignatureError",
      "InvalidStructSignatureError",
      "SolidityProtectedKeywordError",
      "UnknownTypeError",
      "UnknownSignatureError",
      "parseAbi",
      "parseAbiItem",
      "parseAbiParameter",
      "parseAbiParameters",
      "getContract",
      "createClient",
      "custom",
      "fallback",
      "http",
      "createPublicClient",
      "createTestClient",
      "publicActions",
      "testActions",
      "walletActions",
      "createTransport",
      "createWalletClient",
      "webSocket",
      "multicall3Abi",
      "zeroAddress",
      "etherUnits",
      "gweiUnits",
      "weiUnits",
      "maxInt8",
      "maxInt16",
      "maxInt24",
      "maxInt32",
      "maxInt40",
      "maxInt48",
      "maxInt56",
      "maxInt64",
      "maxInt72",
      "maxInt80",
      "maxInt88",
      "maxInt96",
      "maxInt104",
      "maxInt112",
      "maxInt120",
      "maxInt128",
      "maxInt136",
      "maxInt144",
      "maxInt152",
      "maxInt160",
      "maxInt168",
      "maxInt176",
      "maxInt184",
      "maxInt192",
      "maxInt200",
      "maxInt208",
      "maxInt216",
      "maxInt224",
      "maxInt232",
      "maxInt240",
      "maxInt248",
      "maxInt256",
      "maxUint8",
      "maxUint16",
      "maxUint24",
      "maxUint32",
      "maxUint40",
      "maxUint48",
      "maxUint56",
      "maxUint64",
      "maxUint72",
      "maxUint80",
      "maxUint88",
      "maxUint96",
      "maxUint104",
      "maxUint112",
      "maxUint120",
      "maxUint128",
      "maxUint136",
      "maxUint144",
      "maxUint152",
      "maxUint160",
      "maxUint168",
      "maxUint176",
      "maxUint184",
      "maxUint192",
      "maxUint200",
      "maxUint208",
      "maxUint216",
      "maxUint224",
      "maxUint232",
      "maxUint240",
      "maxUint248",
      "maxUint256",
      "minInt8",
      "minInt16",
      "minInt24",
      "minInt32",
      "minInt40",
      "minInt48",
      "minInt56",
      "minInt64",
      "minInt72",
      "minInt80",
      "minInt88",
      "minInt96",
      "minInt104",
      "minInt112",
      "minInt120",
      "minInt128",
      "minInt136",
      "minInt144",
      "minInt152",
      "minInt160",
      "minInt168",
      "minInt176",
      "minInt184",
      "minInt192",
      "minInt200",
      "minInt208",
      "minInt216",
      "minInt224",
      "minInt232",
      "minInt240",
      "minInt248",
      "minInt256",
      "AbiConstructorNotFoundError",
      "AbiConstructorParamsNotFoundError",
      "AbiDecodingDataSizeInvalidError",
      "AbiDecodingZeroDataError",
      "AbiEncodingArrayLengthMismatchError",
      "AbiEncodingLengthMismatchError",
      "AbiErrorInputsNotFoundError",
      "AbiErrorNotFoundError",
      "AbiErrorSignatureNotFoundError",
      "AbiEventNotFoundError",
      "AbiEventSignatureEmptyTopicsError",
      "AbiEventSignatureNotFoundError",
      "AbiFunctionNotFoundError",
      "AbiFunctionOutputsNotFoundError",
      "AbiFunctionSignatureNotFoundError",
      "DecodeLogTopicsMismatch",
      "InvalidAbiDecodingTypeError",
      "InvalidAbiEncodingTypeError",
      "InvalidArrayError",
      "InvalidDefinitionTypeError",
      "BaseError",
      "BlockNotFoundError",
      "CallExecutionError",
      "ContractFunctionExecutionError",
      "ContractFunctionRevertedError",
      "ContractFunctionZeroDataError",
      "RawContractError",
      "BaseFeeScalarError",
      "Eip1559FeesNotSupportedError",
      "MaxFeePerGasTooLowError",
      "ChainDisconnectedError",
      "InternalRpcError",
      "InvalidInputRpcError",
      "InvalidParamsRpcError",
      "InvalidRequestRpcError",
      "JsonRpcVersionUnsupportedError",
      "LimitExceededRpcError",
      "MethodNotFoundRpcError",
      "MethodNotSupportedRpcError",
      "ParseRpcError",
      "ProviderDisconnectedError",
      "ProviderRpcError",
      "ResourceNotFoundRpcError",
      "ResourceUnavailableRpcError",
      "RpcError",
      "TransactionRejectedRpcError",
      "SwitchChainError",
      "UnauthorizedProviderError",
      "UnknownRpcError",
      "UnsupportedProviderMethodError",
      "UserRejectedRequestError",
      "ChainDoesNotSupportContract",
      "ClientChainNotConfiguredError",
      "InvalidChainIdError",
      "DataLengthTooLongError",
      "DataLengthTooShortError",
      "InvalidBytesBooleanError",
      "InvalidHexBooleanError",
      "InvalidHexValueError",
      "OffsetOutOfBoundsError",
      "EnsAvatarUriResolutionError",
      "EstimateGasExecutionError",
      "ExecutionRevertedError",
      "FeeCapTooHighError",
      "FeeCapTooLowError",
      "InsufficientFundsError",
      "IntrinsicGasTooHighError",
      "IntrinsicGasTooLowError",
      "NonceMaxValueError",
      "NonceTooHighError",
      "NonceTooLowError",
      "TipAboveFeeCapError",
      "TransactionTypeNotSupportedError",
      "UnknownNodeError",
      "FilterTypeNotSupportedError",
      "HttpRequestError",
      "RpcRequestError",
      "TimeoutError",
      "WebSocketRequestError",
      "InvalidAddressError",
      "InvalidLegacyVError",
      "TransactionExecutionError",
      "TransactionNotFoundError",
      "TransactionReceiptNotFoundError",
      "WaitForTransactionReceiptTimeoutError",
      "SizeExceedsPaddingSizeError",
      "UrlRequiredError",
      "labelhash",
      "namehash",
      "defineBlock",
      "formatBlock",
      "formatLog",
      "decodeAbiParameters",
      "decodeDeployData",
      "decodeErrorResult",
      "decodeEventLog",
      "decodeFunctionData",
      "decodeFunctionResult",
      "encodeAbiParameters",
      "encodeDeployData",
      "encodeErrorResult",
      "encodeEventTopics",
      "encodeFunctionData",
      "encodeFunctionResult",
      "defineTransaction",
      "formatTransaction",
      "transactionType",
      "defineTransactionReceipt",
      "defineTransactionRequest",
      "formatTransactionRequest",
      "rpcTransactionType",
      "getAbiItem",
      "getContractAddress",
      "getCreate2Address",
      "getCreateAddress",
      "getSerializedTransactionType",
      "getTransactionType",
      "hashTypedData",
      "hexToSignature",
      "recoverAddress",
      "recoverMessageAddress",
      "recoverPublicKey",
      "recoverTypedDataAddress",
      "signatureToHex",
      "toRlp",
      "verifyMessage",
      "verifyTypedData",
      "assertRequest",
      "assertTransactionEIP1559",
      "assertTransactionEIP2930",
      "assertTransactionLegacy",
      "boolToBytes",
      "hexToBytes",
      "numberToBytes",
      "stringToBytes",
      "toBytes",
      "boolToHex",
      "bytesToHex",
      "numberToHex",
      "stringToHex",
      "toHex",
      "bytesToBigInt",
      "bytesToBigint",
      "bytesToBool",
      "bytesToNumber",
      "bytesToString",
      "fromBytes",
      "ccipFetch",
      "offchainLookup",
      "offchainLookupAbiItem",
      "offchainLookupSignature",
      "concat",
      "concatBytes",
      "concatHex",
      "assertCurrentChain",
      "defineChain",
      "encodePacked",
      "formatEther",
      "formatGwei",
      "formatUnits",
      "fromHex",
      "hexToBigInt",
      "hexToBool",
      "hexToNumber",
      "hexToString",
      "fromRlp",
      "getAddress",
      "getContractError",
      "getEventSelector",
      "getEventSignature",
      "getFunctionSelector",
      "getFunctionSignature",
      "hashMessage",
      "isAddress",
      "isAddressEqual",
      "isBytes",
      "isHash",
      "isHex",
      "keccak256",
      "pad",
      "padBytes",
      "padHex",
      "parseEther",
      "parseGwei",
      "parseTransaction",
      "parseUnits",
      "serializeAccessList",
      "serializeTransaction",
      "size",
      "slice",
      "sliceBytes",
      "sliceHex",
      "stringify",
      "trim",
      "validateTypedData",
      "domainSeparator",
    ]
  `)
})
