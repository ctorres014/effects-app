import { Usuario } from './../../models/usuario.model';
import { Action } from '@ngrx/store';

// 1- Definimos las acciones
export const CARGAR_USUARIO = '[Usuarios] Cargar Usuario';
export const CARGAR_USUARIO_FAIL = '[Usuarios] Cargar Usuarios Fail';
export const CARGAR_USUARIO_SUCCESS = '[Usuarios] Cargar Usuario Success';

// 2- Definimos las clases e implementamos las actions
export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO;
    constructor(public id: string) {}
}

export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL;
    // Pasamos el payload con el error
    constructor(public payload: any) { }
}

export class CargarUsuarioSuccess implements Action {
    readonly type = CARGAR_USUARIO_SUCCESS;
    constructor(public usuario: Usuario) { }
}

// 3- Exportamos todas la actions definidas
export type usuarioAcciones = CargarUsuario |
                               CargarUsuarioFail |
                               CargarUsuarioSuccess;
