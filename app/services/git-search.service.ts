import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitSearch } from '../git-search/git-search';
import { GitUsers } from '../git-search/users';


@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  cachedSearches: Array<{
    [query: string]: GitSearch //array type GitSearch
}> = [];
cachedUsers: Array<{
    [query: string]: GitUsers //array type GitUsers
}> = [];
constructor(private http: HttpClient) {
}

gitSearch = (query: string) : Promise<GitSearch> => {      //this is type promise of GitSearch(promise is an asychronous operation 
                                                          //which assert us for a complete operation)
  let promise = new Promise<GitSearch>((resolve, reject) => { 
      if (this.cachedSearches[query]) {        //if exists the query for search
          resolve(this.cachedSearches[query]) //resolve means that operation is be completed successfully
      }
      else {
          this.http.get('https://api.github.com/search/repositories?q=' + query)
          .toPromise()   //become this operation to promise
          .then( (response) => {
              resolve(response as GitSearch)  //resolve means that operation is be completed successfully
          }, (error) => {
              reject(error);  //reject means that operation is not be completed successfully
          })
      }
  })
  return promise; //return the promise
}
gitUsers = (query: string) : Promise<GitUsers> => {  //this is type promise of GitSearch
  let promise = new Promise<GitUsers>((resolve, reject) => {
      if (this.cachedUsers[query]) { //if exists the query for search
          resolve(this.cachedUsers[query]) //resolve means that operation is be completed successfully
      }
      else {
          this.http.get('https://api.github.com/search/users?q=' + query)
          .toPromise() //become this operation to promise
          .then( (response) => {
              resolve(response as GitUsers)  //resolve means that operation is be completed successfully
          }, (error) => {
              reject(error); //reject means that operation is not be completed successfully
          })
      }
  })
  return promise; //return promise
}
}
