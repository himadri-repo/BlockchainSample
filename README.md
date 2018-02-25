# Blockchain
This is sample project on Blockchain and Proof Of Work approach using Node.js. Idea is to create one sample to understand how Blockchain works. This sample project on _Node.js_ is to clear basic understanding of Blockchain and Proof Of Work. Another approach of mining is using _Proof of Stake_. This application is not giving us any idea on _proof of stake_.

## Proof of Work
Proof of work is the approach by which creation of new block has been done, so called Mining. This sample is not the exact way to mine new block, its rather the way to give us an idea of creating new block using simple javascript.
With this approach is very heard to prepare new *block*, which intended to be added in _blockchain_. To add new block to a chain, we need to consensus from all the party associated (other miners) with the chain (public/private). Other miners need to comput the has using the _nonce_ provided by the original block miner. This is need to validate the block. If all the party satisfied with the comput has, they will add it into the chain. Once the block added to chain block creator will get reward for this interms of _coin_. Please note that every block is _mutable_ and can't altered/deleted. Every miner will have same set of blockchian. So when new block added to creator's (one minor) chain same block will be braodcasted to all minors. All minor will validate the block's hash with nonce provided in the block (validation activity). If the hash is generated with nonce provided by all minor, they will add the block to their chain and provide the consensus. At least 51% (if not all) consensus must be received to get the reward.

## Intension of this application
This is just a demo application to simulate (in simplified manner), how blockchain works. So building block of blockchain is as below.
- The Shared Ledger
- The Block (Data/Transaction which is added to block chain.)
- The Consensus (Block are not stored in centralised manner. It is distributed in multiple node. Eevery miner will have same set of chain)

In this application, blockchain and block object created. This also shows how to compute the has and how blocks are inter-related like _linked list_ data structure.

## How to run the application
- `npm install`
- `npm start`

Please have a look at main.js file and understand how it works before running it.