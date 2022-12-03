/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TokenPaymaster,
  TokenPaymasterInterface,
} from "../../../contracts/samples/TokenPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "accountDeployer",
        type: "address",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "COST_OF_POST",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    name: "setEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "theDeployer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "requiredPreFund",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002241380380620022418339810160408190526200003491620003df565b8180826200004233620000ae565b6200004d81620000fe565b5060056200005c838262000574565b5060066200006b828262000574565b5050600780546001600160a01b0319166001600160a01b03861617905550620000963060016200012a565b620000a5303360001962000213565b50505062000667565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620001086200033b565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038216620001865760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b80600460008282546200019a919062000640565b90915550506001600160a01b03821660009081526002602052604081208054839290620001c990849062000640565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038316620002775760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016200017d565b6001600160a01b038216620002da5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016200017d565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000546001600160a01b03163314620003975760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016200017d565b565b505050565b6001600160a01b0381168114620003b457600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b8051620003da816200039e565b919050565b600080600060608486031215620003f557600080fd5b835162000402816200039e565b602085810151919450906001600160401b03808211156200042257600080fd5b818701915087601f8301126200043757600080fd5b8151818111156200044c576200044c620003b7565b604051601f8201601f19908116603f01168101908382118183101715620004775762000477620003b7565b816040528281528a868487010111156200049057600080fd5b600093505b82841015620004b4578484018601518185018701529285019262000495565b82841115620004c65760008684830101525b809750505050505050620004dd60408501620003cd565b90509250925092565b600181811c90821680620004fb57607f821691505b6020821081036200051c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200039957600081815260208120601f850160051c810160208610156200054b5750805b601f850160051c820191505b818110156200056c5782815560010162000557565b505050505050565b81516001600160401b03811115620005905762000590620003b7565b620005a881620005a18454620004e6565b8462000522565b602080601f831160018114620005e05760008415620005c75750858301515b600019600386901b1c1916600185901b1785556200056c565b600085815260208120601f198616915b828110156200061157888601518255948401946001909101908401620005f0565b5085821015620006305787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600082198211156200066257634e487b7160e01b600052601160045260246000fd5b500190565b611bca80620006776000396000f3fe6080604052600436106101ac5760003560e01c80638da5cb5b116100ec578063c23a5cea1161008a578063dd62ed3e11610064578063dd62ed3e146104bb578063f0dda65c1461050e578063f2fde38b1461052e578063f465c77e1461054e57600080fd5b8063c23a5cea1461047e578063c399ec881461049e578063d0e30db0146104b357600080fd5b8063a9059cbb116100c6578063a9059cbb146103fc578063a9a234091461041c578063b0d691fe1461043c578063bb9fe6bf1461046957600080fd5b80638da5cb5b1461039c57806395d89b41146103c7578063a457c2d7146103dc57600080fd5b8063313ce5671161015957806370a082311161013357806370a08231146102dc57806371481d321461031f578063715018a614610371578063796d43711461038657600080fd5b8063313ce56714610280578063395093511461029c578063584465f2146102bc57600080fd5b806318160ddd1161018a57806318160ddd14610221578063205c28781461024057806323b872dd1461026057600080fd5b80630396cb60146101b157806306fdde03146101c6578063095ea7b3146101f1575b600080fd5b6101c46101bf36600461173b565b61057c565b005b3480156101d257600080fd5b506101db610612565b6040516101e891906117d3565b60405180910390f35b3480156101fd57600080fd5b5061021161020c366004611808565b6106a4565b60405190151581526020016101e8565b34801561022d57600080fd5b506004545b6040519081526020016101e8565b34801561024c57600080fd5b506101c461025b366004611808565b6106bc565b34801561026c57600080fd5b5061021161027b366004611834565b610738565b34801561028c57600080fd5b50604051601281526020016101e8565b3480156102a857600080fd5b506102116102b7366004611808565b61075c565b3480156102c857600080fd5b506101c46102d7366004611875565b6107a8565b3480156102e857600080fd5b506102326102f7366004611875565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b34801561032b57600080fd5b5060075461034c9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101e8565b34801561037d57600080fd5b506101c46107f7565b34801561039257600080fd5b50610232613a9881565b3480156103a857600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff1661034c565b3480156103d357600080fd5b506101db61080b565b3480156103e857600080fd5b506102116103f7366004611808565b61081a565b34801561040857600080fd5b50610211610417366004611808565b6108f0565b34801561042857600080fd5b506101c4610437366004611892565b6108fe565b34801561044857600080fd5b5060015461034c9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561047557600080fd5b506101c4610918565b34801561048a57600080fd5b506101c4610499366004611875565b61099e565b3480156104aa57600080fd5b50610232610a2e565b6101c4610ac6565b3480156104c757600080fd5b506102326104d6366004611921565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260036020908152604080832093909416825291909152205490565b34801561051a57600080fd5b506101c4610529366004611808565b610b32565b34801561053a57600080fd5b506101c4610549366004611875565b610b48565b34801561055a57600080fd5b5061056e61056936600461195a565b610bb1565b6040516101e89291906119ae565b610584610dfa565b6001546040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff8316600482015273ffffffffffffffffffffffffffffffffffffffff90911690630396cb609034906024016000604051808303818588803b1580156105f657600080fd5b505af115801561060a573d6000803e3d6000fd5b505050505050565b606060058054610621906119d0565b80601f016020809104026020016040519081016040528092919081815260200182805461064d906119d0565b801561069a5780601f1061066f5761010080835404028352916020019161069a565b820191906000526020600020905b81548152906001019060200180831161067d57829003601f168201915b5050505050905090565b6000336106b2818585610e7b565b5060019392505050565b6106c4610dfa565b6001546040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490529091169063205c287890604401600060405180830381600087803b1580156105f657600080fd5b60003361074685828561102e565b6107518585856110ff565b506001949350505050565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906106b290829086906107a3908790611a23565b610e7b565b6107b0610dfa565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6107ff610dfa565b61080960006113b2565b565b606060068054610621906119d0565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156108e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6107518286868403610e7b565b6000336106b28185856110ff565b610906611427565b6109128484848461144b565b50505050565b610920610dfa565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561098a57600080fd5b505af1158015610912573d6000803e3d6000fd5b6109a6610dfa565b6001546040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301529091169063c23a5cea90602401600060405180830381600087803b158015610a1357600080fd5b505af1158015610a27573d6000803e3d6000fd5b5050505050565b6001546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610a9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac19190611a62565b905090565b6001546040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b760faf99034906024016000604051808303818588803b158015610a1357600080fd5b610b3a610dfa565b610b44828261147e565b5050565b610b50610dfa565b610b7a30610b7360005473ffffffffffffffffffffffffffffffffffffffff1690565b6000610e7b565b610b838161159e565b610bae30827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e7b565b50565b6060600080610bbf84611652565b9050613a988660a0013511610c56576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f546f6b656e5061796d61737465723a2067617320746f6f206c6f7720666f722060448201527f706f73744f70000000000000000000000000000000000000000000000000000060648201526084016108da565b610c636040870187611a7b565b159050610d1757610c7386611665565b80610c846102f76020890189611875565b1015610d12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f546f6b656e5061796d61737465723a206e6f2062616c616e636520287072652d60448201527f637265617465290000000000000000000000000000000000000000000000000060648201526084016108da565b610d90565b80610d286102f76020890189611875565b1015610d90576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f546f6b656e5061796d61737465723a206e6f2062616c616e636500000000000060448201526064016108da565b610d9d6020870187611875565b6040805173ffffffffffffffffffffffffffffffffffffffff909216602083015201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190529660009650945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108da565b73ffffffffffffffffffffffffffffffffffffffff8316610f1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016108da565b73ffffffffffffffffffffffffffffffffffffffff8216610fc0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016108da565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600360209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461091257818110156110f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016108da565b6109128484848403610e7b565b73ffffffffffffffffffffffffffffffffffffffff83166111a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016108da565b73ffffffffffffffffffffffffffffffffffffffff8216611245576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016108da565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020526040902054818110156112fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016108da565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526002602052604080822085850390559185168152908120805484929061133f908490611a23565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516113a591815260200190565b60405180910390a3610912565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461080957600080fd5b600061145983850185611875565b9050600061147161146c613a9885611a23565b611652565b905061060a8230836110ff565b73ffffffffffffffffffffffffffffffffffffffff82166114fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016108da565b806004600082825461150d9190611a23565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604081208054839290611547908490611a23565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6115a6610dfa565b73ffffffffffffffffffffffffffffffffffffffff8116611649576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016108da565b610bae816113b2565b600061165f606483611ae7565b92915050565b60006116746040830183611a7b565b61168391601491600091611b22565b61168c91611b4c565b60075460609190911c915073ffffffffffffffffffffffffffffffffffffffff168114610b44576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f546f6b656e5061796d61737465723a2077726f6e67206163636f756e7420646560448201527f706c6f796572000000000000000000000000000000000000000000000000000060648201526084016108da565b60006020828403121561174d57600080fd5b813563ffffffff8116811461176157600080fd5b9392505050565b6000815180845260005b8181101561178e57602081850181015186830182015201611772565b818111156117a0576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006117616020830184611768565b73ffffffffffffffffffffffffffffffffffffffff81168114610bae57600080fd5b6000806040838503121561181b57600080fd5b8235611826816117e6565b946020939093013593505050565b60008060006060848603121561184957600080fd5b8335611854816117e6565b92506020840135611864816117e6565b929592945050506040919091013590565b60006020828403121561188757600080fd5b8135611761816117e6565b600080600080606085870312156118a857600080fd5b8435600381106118b757600080fd5b9350602085013567ffffffffffffffff808211156118d457600080fd5b818701915087601f8301126118e857600080fd5b8135818111156118f757600080fd5b88602082850101111561190957600080fd5b95986020929092019750949560400135945092505050565b6000806040838503121561193457600080fd5b823561193f816117e6565b9150602083013561194f816117e6565b809150509250929050565b60008060006060848603121561196f57600080fd5b833567ffffffffffffffff81111561198657600080fd5b8401610160818703121561199957600080fd5b95602085013595506040909401359392505050565b6040815260006119c16040830185611768565b90508260208301529392505050565b600181811c908216806119e457607f821691505b602082108103611a1d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008219821115611a5d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b600060208284031215611a7457600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ab057600080fd5b83018035915067ffffffffffffffff821115611acb57600080fd5b602001915036819003821315611ae057600080fd5b9250929050565b600082611b1d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60008085851115611b3257600080fd5b83861115611b3f57600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008135818116916014851015611b8c5780818660140360031b1b83161692505b50509291505056fea2646970667358221220a6fe1e53a4431e8ac2d7b3bc4c754c50670ad7d9335299eab5da7d517810632864736f6c634300080f0033";

type TokenPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenPaymaster__factory extends ContractFactory {
  constructor(...args: TokenPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    accountDeployer: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenPaymaster> {
    return super.deploy(
      accountDeployer,
      _symbol,
      _entryPoint,
      overrides || {}
    ) as Promise<TokenPaymaster>;
  }
  override getDeployTransaction(
    accountDeployer: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      accountDeployer,
      _symbol,
      _entryPoint,
      overrides || {}
    );
  }
  override attach(address: string): TokenPaymaster {
    return super.attach(address) as TokenPaymaster;
  }
  override connect(signer: Signer): TokenPaymaster__factory {
    return super.connect(signer) as TokenPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenPaymasterInterface {
    return new utils.Interface(_abi) as TokenPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenPaymaster {
    return new Contract(address, _abi, signerOrProvider) as TokenPaymaster;
  }
}