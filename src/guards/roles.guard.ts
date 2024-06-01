import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

interface AuthPermissions {
    module: string;
    actions: string[];
  }

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly _reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const meta = this._reflector.get<AuthPermissions>(
            'authPermissions',
            context.getHandler(),
        );

        if (!meta) {
            return true;
        }

        const { module, actions } = meta;

        const request = context.switchToHttp().getRequest();
        const user = <any>request.user;

        if (!user || (user && !user.permissions)) {
            return false;
        }

        if(module) {
            const userModules = user.permissions.reduce((res, cur) => { res.push(cur.module); return res; },[]);
            if(userModules.indexOf(module) === -1) {
                return false;
            }
        }


        if(actions) {
            const userModule = user.permissions.find(r => r.module === module);
            if(!userModule) { return false; }
            return userModule.actions.some(r => actions.indexOf(r) > -1)
        }

        return false
    }
}
