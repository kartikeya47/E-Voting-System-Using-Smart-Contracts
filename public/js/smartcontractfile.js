var AddressForSmartContract = "0x64a1CAFff71A26b119E3c349fEdC5F4a65090734";

var ABIForSmartContract = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_candid",
				"type": "uint256"
			}
		],
		"name": "votingCandi",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "candicount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candis",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "cid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "candiname",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "vc",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "persontovote",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];