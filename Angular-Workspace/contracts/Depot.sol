pragma solidity ^0.4.16;

contract Depot {

    int commodityIdSeq;
    struct Commodity {
        int id;
        bytes32 name;
        int256 quantity;
    } 

    mapping(int=>Commodity) commodities;

    event Received(bytes32 commodityName, int256 quantity);
    event Released(bytes32 commodityName, int256 quantity);

    function Depot() public {
        commodities[commodityIdSeq++].id = commodityIdSeq;
        commodities[commodityIdSeq++].name = "Paddy";
    }

    function receiveCommodity(int commodityId, int256 quantity) public { // this will be in mg or gram? no float?
        commodities[commodityId].quantity += quantity;
        emit Received(commodities[commodityId].name, quantity);
    }

    function releaseCommodity(int commodityId, int256 quantity) public returns(bool) {
        if ( commodities[commodityId].quantity >= quantity) {
            commodities[commodityId].quantity -= quantity;
            emit Released(commodities[commodityId].name, quantity);
            return true;
        }
        return false;
    }

    function getInventory(int commodityId) public view returns(int256) {
        return commodities[commodityId].quantity;
    }
}