import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Usuario } from 'src/app/models/usuario.model';
import { ActivatedRoute } from '@angular/router';
import { CargarUsuario } from '../../store/actions/usuario.actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario[] = [];
  constructor(private store: Store<AppState>,
              private _router: ActivatedRoute) { }

  ngOnInit() {
    let id: string;
    this._router.params.subscribe( params => {
      id = params['id'];
      this.store.dispatch( new CargarUsuario(id));
    });

    this.store.select('usuario').subscribe(usuario => {
      console.log(usuario.user);
    });


  }

}
