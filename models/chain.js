const Block = require("./block.js");
const Transaction = require("./transaction.js");

class Blockchain {
    constructor() {
      this.chain = [this.createGenesis()];
      this.difficulty = 2;
  
      //place to store transactions inbetween block creation
      this.pendingTransactions = []; 
  
      //how many coins a miner will get as a reward for their efforts
      this.miningReward = 100;
    }
  
    createGenesis() {
      return new Block("05/08/2018", "Genesis block", "0", 0);
    }
  
    latestBlock() {
      return this.chain[this.chain.length - 1];
    }
  
  createTransaction(transactions){
      // there should be some validations here
  
      // push into  the "pending transactions array"
      this.pendingTransactions.push(transactions);
  }
  
  minePendingTransactions(miningRewardAddress){
      let block = new Block(Date.now(), this.pendingTransactions);
      block.mineBlock(this.difficulty);
  
      this.chain.push(block);
  
      this.pendingTransactions = [
          new Transaction(null, miningRewardAddress, this.miningReward)
      ];
  }
  
    checkValid() {
      for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i - 1];
  
        if (currentBlock.hash !== currentBlock.calculateHash()) {
          return false;
        }
        if (currentBlock.previousHash !== previousBlock.hash) {
          return false;
        }
      }
      return true;
    }
  
    getBalanceOfAddress(address){
        let balance = 0; 
  
        for(const block of this.chain){
            for(const trans of block.transactions){
  
              //if the given address is the sender then reduce the balance
                if(trans.fromAddress === address){
                    balance -= trans.amount;
                }
  
                // If the given address is the receiver then increase the balance
                if(trans.toAddress === address){
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }
  }
  
  module.exports = Blockchain;