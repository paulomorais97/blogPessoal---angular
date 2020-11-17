import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }
  
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(){
    return this.http.get('https://blogsmarine.herokuapp.com/postagens', this.token)
  }


  getByIdPostagem(id: number){
    return this.http.get(`https://blogsmarine.herokuapp.com/postagens/${id}`, this.token)
  }


  postPostagem(postagem: Postagem){
    return this.http.post('https://blogsmarine.herokuapp.com/postagens',postagem, this.token)
  }


  putPostagem(postagem: Postagem){
    return this.http.put(`https://blogsmarine.herokuapp.com/postagens/${postagem.id}`,postagem, this.token)
  }


  deletePostagem(id: number){
    return this.http.delete(`https://blogsmarine.herokuapp.com/postagens/${id}`, this.token)
  }

  getByTitutloPostagem(titulo: string){
    return this.http.get(`https://blogsmarine.herokuapp.com/postagens/titulo/${titulo}`, this.token)

  }

}
