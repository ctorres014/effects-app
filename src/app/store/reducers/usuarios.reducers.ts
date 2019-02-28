import { Usuario } from '../../models/usuario.model';
import * as fromUsuarios from '../actions';

// 1- Definimos el tipo para el usuario state
export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

// 2- Definimos el estado inicial del tipo definido
// en la interface e inicializamos los valores
const estadoInicial: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};

// 3- Definimos la funcion reducer con su estado inicial
// y las acciones correspondientes
export function usuariosReducers( state = estadoInicial, action: fromUsuarios.usuariosAcciones): UsuariosState {
    switch (action.type) {
        case fromUsuarios.CARGAR_USUARIOS:
            return {
                ...state,
                loading: true
            };
        case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                users: [ ...action.usuario]
            };
        case fromUsuarios.CARGAR_USUARIOS_FAIL:
        return {
            ...state,
            loaded: false,
            loading: false,
            error: {
                status: action.payload.status,
                message: action.payload.message,
                url: action.payload.url
            }
        };
        default:
            return state;
    }
}