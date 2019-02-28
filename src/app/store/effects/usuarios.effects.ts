import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import * as usuariosActions from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {

    constructor(private actions$: Actions, public usuariosService: UsuarioService) {
    }
    // Necesitamos estar pendiente de la ejecucion
    // de la accion CARGAR_USUARIOS
    // Para que el effect sea disparado necesitamos agregar
    // el decorador @Effect
    @Effect()
    cargarUsuarios$ = this.actions$.pipe(
        ofType(usuariosActions.CARGAR_USUARIOS),
        // Utilizamos el switchMap que nos permite
        // cancelar la subscripcion y retornar otro observable
        switchMap(() => {
            return this.usuariosService.getUsers()
                        // Llamar el action se success
                        // cuando los usuarios se cargaron correctamente
                        .pipe(
                            map( users => new usuariosActions.CargarUsuariosSuccess(users)),
                            catchError( error => of( new usuariosActions.CargarUsuariosFail(error)))
                        );
        })
    );
}