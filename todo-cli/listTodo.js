//  listTodos.js
const d = require("./models/index");

const listTodo = async () => {
  try {
    await d.Todo.showList();
  } catch (error) {
    console.error(error);
  }
};
(async () => {
  await listTodo();
})();
