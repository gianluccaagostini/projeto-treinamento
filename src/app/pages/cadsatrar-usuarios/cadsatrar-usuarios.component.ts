import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cadsatrar-usuarios',
  templateUrl: './cadsatrar-usuarios.component.html',
  styleUrls: ['./cadsatrar-usuarios.component.css']
})
export class CadsatrarUsuariosComponent {

  constructor(private usuarioService: UsuariosService) {}

  usuarioForm = new FormGroup ({
    nome: new FormControl('', Validators.required),
    idade: new FormControl(0, Validators.required),
  })
enviar() {
const usuario:Partial<IUsuario> = this.usuarioForm.value as IUsuario;
usuario.ativo = true;
console.log(usuario);

 this.usuarioService.cadastrarUsuario(usuario).subscribe(result => {
  Swal.fire('Muito bem!!', 'Usuário cadastrado com sucesso!', 'success');

 },
 (error) => {
  const { message } = error;
  Swal.fire("Deu erro!!!", message, 'error');
 }
 );
}




}
