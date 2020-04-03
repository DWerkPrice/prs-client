import { User } from '../user/user.class';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {


  transform(users: User[], searchCriteria: string = ''): User[] {
    if(searchCriteria == '') return users;
    let criteria = searchCriteria.toLowerCase();
    let selUsers: User[] = [];
    for(let user of users) {
     if(user.id.toString().includes(criteria)
       || (user.username.toLowerCase().includes(criteria))
       || (user.firstname.toLowerCase().includes(criteria))
       || (user.lastname.toLowerCase().includes(criteria))
     ){
        selUsers.push(user);
     }
  }
  
    return selUsers;
  
  }

}
