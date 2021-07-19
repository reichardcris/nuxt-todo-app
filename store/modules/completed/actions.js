export const update = ({ commit }, payload) => {
  commit('UPDATE_LIST', payload);
  localStorage.setItem('completed', JSON.stringify(payload));
};

export const persist = ({ commit }) => {
  if (process.browser) {
    let local = localStorage.getItem('completed');
    if (local === null) {
      localStorage.setItem('completed', '[]');
      commit('UPDATE_LIST', []);
      return;
    }
    local = Boolean(local.length) ? local : '[]';
    local = JSON.parse(local);
    if (Array.isArray(local)) {
      commit('UPDATE_LIST', local);
    }
  }
};