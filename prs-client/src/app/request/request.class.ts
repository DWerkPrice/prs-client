import { User } from '../user/user.class';

export class Request{
    id: number = 0;
    description: string = 'new';
    justification: string =  '';
    rejectionReason: string = '';
    deliveryMode: string = 'PickUp';
    status: string = '';
    total: number = 0; 
    userId?: number = 0; 
    user: User = null;

    constructor(){}
}


