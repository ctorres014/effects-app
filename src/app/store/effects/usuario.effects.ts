import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import * as usuarioActions from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {

    constructor(private actions$: Actions, public usuariosService: UsuarioService) {
    }
    // Necesitamos estar pendiente de la ejecucion
    // de la accion CARGAR_USUARIOS
    // Para que el effect sea disparado necesitamos agregar
    // el decorador @Effect
    @Effect()
    cargarUsuario$ = this.actions$.pipe(
        ofType(usuarioActions.CARGAR_USUARIO),
        // Utilizamos el switchMap que nos permite
        // cancelar la subscripcion y retornar otro observable
        switchMap( action => {
            const id = action['id'];
            return this.usuariosService.getUserById(id)
                        // Llamar el action se success
                        // cuando los usuarios se cargaron correctamente
                        .pipe(
                            map( user => new usuarioActions.CargarUsuarioSuccess(user)),
                            catchError( error => of( new usuarioActions.CargarUsuarioFail(error)))
                        );
        })
    );
}