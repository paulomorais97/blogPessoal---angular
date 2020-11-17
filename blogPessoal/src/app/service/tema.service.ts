import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }
  
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTemas(){
    return this.http.get('https://blogsmarine.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number){
    return this.http.get(`https://blogsmarine.herokuapp.com/tema/${id}`, this.token)
  }
  postTema(tema: Tema){
   return this.http.post('https://blogsmarine.herokuapp.com/tema', tema, this.token)
  }
  putTema(tema: Tema){
    return this.http.put(`https://blogsmarine.herokuapp.com/tema/${tema.id}`, tema, this.token)
  }
   deleteTema(id: number){
    return this.http.delete(`https://blogsmarine.herokuapp.com/tema/${id}`, this.token)
  }
  getByNomeTema(nome: string){
    return this.http.get(`https://blogsmarine.herokuapp.com/tema/nome/${nome}`, this.token)
  }
  
}
