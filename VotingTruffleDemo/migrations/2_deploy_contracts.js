//var ConvertLib = artifacts.require("./ConvertLib.sol");
//var MetaCoin = artifacts.require("./MetaCoin.sol");
//var Greeter = artifacts.require("./Greeter.sol");
//var arrayLoops = artifacts.require("./arrayLoops.sol");
var Voter = artifacts.require("./Voter.sol");

module.exports = function(deployer) {
  deployer.deploy(Voter);
};
