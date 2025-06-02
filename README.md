# PolkaVM Storage Contract DApps

This repository contains basic dApp examples for interacting with a simple Storage smart contract deployed on Passet Hub. These examples demonstrate how to connect wallets, read contract state, and write to the contract using different popular JavaScript libraries.

## About the Storage Contract

The examples interact with a minimal Storage smart contract that allows storing and retrieving a number value:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Storage {
    // State variable to store our number
    uint256 private number;

    // Event to notify when the number changes
    event NumberChanged(uint256 newNumber);

    // Function to store a new number
    function store(uint256 newNumber) public {
        number = newNumber;
        emit NumberChanged(newNumber);
    }

    // Function to retrieve the stored number
    function view returns (uint256) {
        return number;
    }
}
```

## Available Examples

The repository contains the following implementations:

1. [**ethers-dapp**](./ethers-dapp/) - dApp implementation using [ethers.js](https://docs.ethers.org/)
2. [**viem-dapp**](./viem-dapp/) - dApp implementation using [viem](https://viem.sh/)

Each example demonstrates:
- Connecting a wallet
- Reading the current stored number
- Updating the stored number

## Getting Started

Each example has its own README with specific setup instructions. To get started with either example:

1. Clone this repository
2. Navigate to either the `ethers-dapp` or `viem-dapp` directory
3. Follow the instructions in the respective README.md file

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.