import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../util/web3.service';

import depot_artifacts from '../../../build/contracts/Depot.json';

@Component({
    selector: 'app-depot-component',
    templateUrl: './depot.component.html',
  })
export class DepotComponent implements OnInit {

    depot: any;
    commodityId = 1;
    quantity = 5;
    stock = -1;
    account: string;

    constructor(private web3Service: Web3Service) {}

    ngOnInit() {
        this.web3Service.accountsObservable.subscribe(
            (accounts: string[]) => this.account = accounts[0]
        );
        this.web3Service.artifactsToContract(depot_artifacts)
                        .then(depotAbstraction => {
                            console.log(depotAbstraction);
                            if ( depotAbstraction ) {
                                depotAbstraction.deployed().then(
                                    depotContract => {
                                         this.depot = depotContract;
                                         this.refreshtStock(this.commodityId);
                                    }
                                );
                            }
                        }).catch(error => console.log(error));
    }

    /**
     * receiveCommodity
     */
    public receiveCommodity() {
        console.log('Receive: ' + this.quantity + ' of ' + this.commodityId);
        if ( this.depot ) {
            this.depot.receiveCommodity.sendTransaction(this.commodityId, this.quantity,  {from: this.account})
                      .then(status => {
                          console.log('success: ' + status);
                          this.refreshtStock(this.commodityId);
                      }).catch(error => console.log(error));
        }
    }

    /**
     * releaseCommodity
     */
    public releaseCommodity() {
        console.log('Release: ' + this.quantity + ' of ' + this.commodityId);
        if ( this.depot ) {
            this.depot.releaseCommodity.sendTransaction(this.commodityId, this.quantity,  {from: this.account})
                      .then(status => {
                        console.log('success: ' + status);
                        this.refreshtStock(this.commodityId);
                      }).catch(error => console.log(error));
        }
    }

    /**
     * getStock
     */
    private refreshtStock(commodityId: number) {
        if ( this.depot ) {
            this.depot.getInventory.call(commodityId).then(
                stock => this.stock = stock
            );
        }
    }
}
