import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

// 1- Definimos una interface AppState, que
// contiene contiene los reducers definidos
// para nuestra app
export interface AppState {
    usuarios: reducers.UsuariosState;
    usuario: reducers.UsuarioState;
}

// 2- Creamos el actionReducerMaps que es la combinacion
// de todos los reducers que usan la interface AppState
export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.usuariosReducers,
    usuario: reducers.usuarioReducers
};
