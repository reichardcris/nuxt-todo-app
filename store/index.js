import Vuex from "vuex";
import * as modules from './modules';
const createStore = () => {
    return new Vuex.Store({
       modules,
    });
};
export default createStore;

export const strict = false