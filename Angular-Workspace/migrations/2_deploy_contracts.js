var ConvertLib = artifacts.require("./ConvertLib.sol");
var Depot = artifacts.require("./Depot.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.deploy(Depot);
};
