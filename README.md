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

# Directory details:
Directory VoterWeb contains all the files related to front end. It includes bootstrap css library, web3 and angular libraries as well as index and script.js files.

Directory VotingTruffleDemo contains all the files related to smart contract. Contract is stored under contracts directory.
Voter.sol is the custom contract created for this dApp. Rest files are vanilla truffle.

# Important: Update script.js with your abi and address else it won't work.
Get address and abi of the contract and replace the existing address and abi into script.js file present in VoterWeb directory:

var contractInstance = Voter.deployed().then(function(instance){contractInstance=instance})

Address:
  contractInstance.address
  
ABI:
  JSON.stringify(contractInstance.abi)
 
Now open the index.html file and start adding voting candidates and vote them.

Many functionalities are for future purpose which is not being used currently.

Screenshot of the front end:

![alt text](https://github.com/akscipy/voting-dapp-truffle-angular/blob/master/dapp-basedon-truffle-angularjs.JPG)










