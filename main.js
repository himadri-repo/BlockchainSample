/*jshint esversion:6 */

const SHA256 = require('crypto-js/sha256');
class Block {
    constructor(index, timestamp, data, previousHash='') {
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previousHash=previousHash;
        this.hash=this.computeHash();
        this.nonce = 0;
    }

    computeHash() {
        return SHA256(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== new Array(difficulty+1).join("0")) {
            this.nonce++;
            this.hash = this.computeHash();
        }
    }
}

class Blockchain {
    constructor() {
        this.chain=[this.createGenesisBlock()];
        this.difficulty=5;
    }

    createGenesisBlock() {
        return new Block(0, "01/01/2018", "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length-1];
    }

    addBlock(newBlock) {
        if(newBlock===null) return;

        newBlock.previousHash=this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        //newBlock.hash = newBlock.computeHash();

        this.chain.push(newBlock);
    }

    isValidChain() {
        for(let index=1; index<this.chain.length; index++) {
            const currentBlock = this.chain[index];
            const previousBlock = this.chain[index-1];

            if(currentBlock.hash !== currentBlock.computeHash()) {
                return false;
            }

            if(currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}

let myblockChain = new Blockchain();

console.log("Mining block ...!");
myblockChain.addBlock(new Block(1, "05/01/2018", { amount: 1000, sender: "Himadri" }));
myblockChain.addBlock(new Block(2, "10/01/2018", { amount: 3000, sender: "Aloke" }));
myblockChain.addBlock(new Block(3, "15/01/2018", { amount: 5000, sender: "Palash" }));

console.log(JSON.stringify(myblockChain, null, 4));

console.log("My Blockchain is Valid: " + myblockChain.isValidChain());

myblockChain.chain[1].data = {amount: 1500, sender:"Pankaj"};
myblockChain.chain[1].hash = myblockChain.chain[1].computeHash();

console.log("My Blockchain is Valid: " + myblockChain.isValidChain());
