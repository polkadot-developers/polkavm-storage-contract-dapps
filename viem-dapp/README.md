# Viem DApp Example

This is a simple example Next.js application that demonstrates how to interact with the Storage smart contract on Westend Asset Hub using the [viem](https://viem.sh/) library.

For comprehensive instructions and explanations about building dApps with Viem on Polkadot smart contracts, check out the [Create a dApp with Viem](https://papermoonio.github.io/polkadot-mkdocs/tutorials/smart-contracts/launch-your-first-project/create-dapp-viem/) tutorial.

## Features

- Connect wallet using viem's wallet client
- Read the current stored number from the contract
- Store a new number to the contract
- Display transaction status

## Prerequisites

- Node.js (>= 16.x)
- npm or yarn
- A Web3 wallet like MetaMask with Westend Asset Hub network configured. Follow the [Connect to Polkadot Hub](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/connect-to-asset-hub/) guide for detailed setup instructions.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

### 3. Open the application

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Click the "Connect Wallet" button to connect your Web3 wallet
2. The current stored number will be displayed automatically
3. Enter a new number in the input field and click "Update" to update the value
4. Transaction status will be displayed while the transaction is being processed