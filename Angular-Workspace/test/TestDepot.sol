pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Depot.sol";

contract TestDepot {

  function testInitialBalanceUsingDeployedContract() public {
    Depot depot = Depot(DeployedAddresses.Depot());

    uint expected = 0;

    Assert.equal(uint(depot.getInventory(1)), expected, "Depot should have 0 storage initially");
  }

  function testBalanceAfterTransfer() public {
    Depot depot = Depot(DeployedAddresses.Depot());

    uint expected = 100000000;
    depot.receiveCommodity(1, 100000000);
    Assert.equal(uint(depot.getInventory(1)), expected, "Depot should have 100000000 storage initially");
  }

  function testBalanceAfterRelease() public {
    Depot depot = Depot(DeployedAddresses.Depot());

    uint expected = 50000000;
    depot.releaseCommodity(1, 50000000);
    Assert.equal(uint(depot.getInventory(1)), expected, "Depot should have 50000000 storage initially");
  }
  
  function testBalanceAfterReleaseFail() public {
    Depot depot = Depot(DeployedAddresses.Depot());

    uint expected = 50000000;
    depot.releaseCommodity(1, 60000000);
    Assert.equal(uint(depot.getInventory(1)), expected, "Depot should have 50000000 storage initially");
  }

}
