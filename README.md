# voting-dapp-truffle-angular
Voting dApp based on truffle and Angularjs as front end

# Pre-requisite:
Install truffle
https://github.com/trufflesuite/truffle

Install ethereum-testrpc
https://github.com/ethereumjs/testrpc


# Usage:

Start testrpc
```
$ testrpc
```
Compile & migrate solidity code:

```
$ truffle compile
$ truffle migrate --reset
```

Get address and abi of the contract and replace the existing address and abi into script.js file present in Voter directory:

var contractInstance = Voter.deployed().then(function(instance){contractInstance=instance})

Address:
  contractInstance.address
  
ABI:
  JSON.stringify(contractInstance.abi)
 
Now open the index.html file and start adding voting candidates and vote them.

Many functionalities are for future purpose which is not being used currently.











