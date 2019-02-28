import { Usuario } from '../../models/usuario.model';
import * as fromUsuario from '../actions';

// 1- Definimos el tipo para el usuario state
export interface UsuarioState {
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

// 2- Definimos el estado inicial del tipo definido
// en la interface e inicializamos los valores
const estadoInicial: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};

// 3- Definimos la funcion reducer con su estado inicial
// y las acciones correspondientes
export function usuarioReducers( state = estadoInicial, action: fromUsuario.usuarioAcciones): UsuarioState {
    switch (action.type) {
        case fromUsuario.CARGAR_USUARIO:
            return {
                ...state,
                loading: true
            };
        case fromUsuario.CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: { ...action.usuario }
            };
        case fromUsuario.CARGAR_USUARIOS_FAIL:
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