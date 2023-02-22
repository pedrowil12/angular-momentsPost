import { Component } from '@angular/core';

@Component({
  selector: 'app-app-dados1',
  templateUrl: './app-dados1.component.html',
  styleUrls: ['./app-dados1.component.css']
})
export class AppDados1Component {
  nome: string = "Pedro";
  idade: number = 20;
  profissao: string = "Desenvolvedor Web";
  localizacao: string = "São José dos Campos - SP";
  linguagens: string[] = ["JavaScript", "C#", "Python", "Java"];
  carro = {
    nome: "Fusion",
    ano: 2019
  }
}
