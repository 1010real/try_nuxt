export const state = () => ({
  list: []
});
// export const state = () => { list: [] }; だとエラー
// Object literalをreturnする場合は()で括らないとエラーになる（複数の構文解釈が可能となってしまうため）
// 省略せずに書くと以下
// export const state = () => { return { list:[] }; }

export const mutations = {
  add (state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  toggle (state, todo) {
    todo.done = !todo.done;
  }
};
