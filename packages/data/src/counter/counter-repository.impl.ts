import * as core from "core";

import { LocalStorageService } from "../common/local-storage-service.interface";

export class CounterRepositoryImpl implements core.CounterRepository{
    constructor(private localStorage:LocalStorageService){}
   
    createCounter(counterInfo: core.Counter): core.Counter {
        this.localStorage.set(counterInfo.id, JSON.stringify(counterInfo))
        return counterInfo;
    }

    set counterIds(newIds: string[]) {
        this.LocalStorageService.set("counter-ids", JSON.stringify({ ids: newIds }));
    }

}