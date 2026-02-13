export const ESCROW_FACTORY_ADDRESS = '0xcc0548cbf6013f1f2483485b9fcf048cf95ff523'; // Deployed on Sepolia
export const ARBITRATION_ADDRESS = '0x77e45bfac8bcf2ff868240e2cbc24a89f9130adc'; // Deployed on Sepolia

export const ARBITRATION_ABI = [
    {
        "type": "constructor",
        "inputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "arbitrators",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "disputes",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "escrowAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "requester",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "votesForFreelancer",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "votesForClient",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "resolved",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "isArbitrator",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "registerAsArbitrator",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "vote",
        "inputs": [
            {
                "name": "_escrow",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_forFreelancer",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "DisputeResolved",
        "inputs": [
            {
                "name": "escrow",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "winnerFreelancer",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "DisputeStarted",
        "inputs": [
            {
                "name": "escrow",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Voted",
        "inputs": [
            {
                "name": "escrow",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "arbitrator",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "forFreelancer",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            }
        ],
        "anonymous": false
    }
] as const;



export const ESCROW_FACTORY_ABI = [
    {
        "type": "function",
        "name": "allEscrows",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract Escrow"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "createEscrow",
        "inputs": [
            {
                "name": "_freelancer",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_arbiter",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_timeToDeadline",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "getUserEscrows",
        "inputs": [
            {
                "name": "_user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address[]",
                "internalType": "contract Escrow[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "userEscrows",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract Escrow"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "EscrowCreated",
        "inputs": [
            {
                "name": "escrowAddress",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "client",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "freelancer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    }
] as const;

export const ESCROW_ABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_client",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_freelancer",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_arbiter",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_timeToDeadline",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "amount",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "approve",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "arbiter",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "client",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "deadline",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "deliverableIpfs",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "deposit",
        "inputs": [],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "dispute",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "freelancer",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "resolveDispute",
        "inputs": [
            {
                "name": "_releaseToFreelancer",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "status",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint8",
                "internalType": "enum Escrow.ContractStatus"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "submitWork",
        "inputs": [
            {
                "name": "_ipfsHash",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
            {
                "name": "newOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "Approved",
        "inputs": [
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Deposited",
        "inputs": [
            {
                "name": "client",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Disputed",
        "inputs": [
            {
                "name": "initiator",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "name": "previousOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Refunded",
        "inputs": [
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "WorkSubmitted",
        "inputs": [
            {
                "name": "ipfsHash",
                "type": "string",
                "indexed": false,
                "internalType": "string"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "OwnableInvalidOwner",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableUnauthorizedAccount",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "ReentrancyGuardReentrantCall",
        "inputs": []
    }
] as const;


