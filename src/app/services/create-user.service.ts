import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
// import {writeJsonFile} from 'write-json-file';

// import { fs } from 'fs'
// const path = require('path')
// import { saveAs } from 'file-saver'


@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http:HttpClient) { }

    createUser(user:any ){
     
      // let u = {
      //         "nom" : user.id,
      //         "mdp" : user.mdp,
      //         "panier" : []
      //       }
      // const options = {Headers, responseType: 'json' as 'blob'};
      // this.http.post(environment.SERVEUR_URL+'users/'+user.id+'.json', u, options).subscribe(
      //   data => {
      //     console.log(data);
      //   }
      // )


      // const headers = { 'content-type': 'application/json'}  
      // let u = {
      //       "nom" : user.id,
      //       "mdp" : user.mdp,
      //       "panier" : []
      //     }
          
      //     let data = JSON.stringify(u)
      // console.log(data)
      // console.log(this.http.post(environment.SERVEUR_URL+'users/'+user.id+'.json', data,{'headers':headers}).subscribe())
      // return this.http.post(environment.SERVEUR_URL+'users/'+user.id+'.json', data,{'headers':headers}).subscribe()







      // await writeJsonFile('foo.json', {foo: true});
      // console.log(this.http.post)

      // this.http.post<any>(environment.SERVEUR_URL+'users/'+user.id+'.json', "bonjour" ).pipe(
      //   // (e) => {console.log(e)}
      // )
      
  //   $http.post(environment.SERVEUR_URL+'users/'+user.id+'.json', JSON.stringify($scope.model)).then(function(data) {
  //     $scope.msg = 'Data saved';
  // });
  //   console.log(user.id)
  //   console.log(fs)
  //   console.log(environment.SERVEUR_URL+'users/'+user.id+'.json')
 
  //   let u = {
  //     "nom" : user.id,
  //     "mdp" : user.mdp,
  //     "panier" : []
  //   }
    
  //   saveAs(JSON.stringify(u), environment.SERVEUR_URL+'users/'+user.id+'.json')
  //   // let data = JSON.stringify(u)
  //   // await writeJsonFile(environment.SERVEUR_URL+'users/'+user.id+'.json', u)
  }
}

