# ChainSupply
A blockchain based Supply Chain

## Setup

1. Install Metamask extension for chrome and make an account. Save the 12 letter phrase for future use that metamask prompts
2. Have node and git installed in your system.
3. Run the following commands in Command Prompt or Powershell
    * npm install -g truffle
    > This would install Truffle globaly in your system
    * npm install -g @angular/cli
    > Installs angular cli
    * npm install -g ethereumjs-testrpc
    > Installs Test RPC which would help mock accounts and etherium network locally
    * npm install -g windows-build-tools
    > Installs python and visual studio code essentials for node repositories to work
4. Clone the GIT url https://github.com/akhilarjun/ChainSupply.git
5. Run command cd <path-to-Angular-Workspace> and run the following commands
    * npm install
    > Installs all the dependencies for project
    * testrpc -m "<the 12 word phrase you stored earlier>"
    > Runs the test RPC network
    * truffle.cmd compile
    > Compiles your smart contracts
    * truffle.cmd migrate
    > Hosts your contracts to the test network
    * ng serve
    > Runs your Angular Application locally

## Future Scope
1. Adding Escrow contracts as a middle man, so that buyer and seller can both be confident about the transaction made. [Escrow Implementation Example](https://medium.com/@pranav.89/smart-contracting-simplified-escrow-in-solidity-ethereum-b19761e8fe74)
2. Making a new token called *Rupiyah*, or using one that would match the indian economical value standards, so that transaction becomes easier.

> Find more update here
