import { Usuario } from './../../models/usuario.model';
import { Action } from '@ngrx/store';

// 1- Definimos las acciones
export const CARGAR_USUARIOS = '[Usuarios] Cargar Usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar Usuarios Fail';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar Usuarios Success';

// 2- Definimos las clases e implementamos las actions
export class CargarUsuarios implements Action {
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
    readonly type = CARGAR_USUARIOS_FAIL;
    // Pasamos el payload con el error
    constructor(public payload: any) { }
}

export class CargarUsuariosSuccess implements Action {
    readonly type = CARGAR_USUARIOS_SUCCESS;
    constructor(public usuario: Usuario[]) { }
}

// 3- Exportamos todas la actions definidas
export type usuariosAcciones = CargarUsuarios |
                               CargarUsuariosFail |
                               CargarUsuariosSuccess;
