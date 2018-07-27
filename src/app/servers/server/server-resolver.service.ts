import { Observable } from 'rxjs/internal/Rx';
import { RouterStateSnapshot } from '@angular/router/src';
import { ActivatedRouteSnapshot } from '@angular/router/public_api';
import { Injectable } from '@angular/core';
import { ServersService } from '../servers.service';
import { Resolve } from '@angular/router/src/interfaces';

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serversService.getServer(+route.params['id']);
    }
}
