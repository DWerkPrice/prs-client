import { Pipe, PipeTransform } from '@angular/core';
import { Request } from '../request/request.class';


@Pipe({
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {
 
  transform(requests: Request[], searchCriteria: string = '' ): Request[] {
    if(searchCriteria === '') return requests;
    let criteria = searchCriteria.toLowerCase();
    let selRequests: Request[] = [];
    for(let request of requests) {
      if(
        request.id.toString().includes(criteria)
          || (request.description.toLowerCase().includes(criteria))
          || (request.justification.toLowerCase().includes(criteria))
          || (request.rejectionReason.toLowerCase().includes(criteria))
          || (request.deliveryMode.toLowerCase().includes(criteria))
          || (request.status.toLowerCase().includes(criteria))
          || (request.user.username.toLowerCase().includes(criteria))
//          || (request.userId != null && request.user.username.toLowerCase().includes(criteria))
      ){
         selRequests.push(request);
      }
    }
    return selRequests;
  }
}
