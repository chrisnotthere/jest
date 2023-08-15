const fetchData = require('./async');

it('should return the correct todo', async () => {
  const todo = await fetchData(1);
  expect(todo).toEqual({
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  });
  expect(todo).toHaveProperty('id');
  expect(todo).toHaveProperty('title');
  expect(todo).toHaveProperty('completed');
  expect(todo).toHaveProperty('userId');
  expect(todo.id).toBe(1);
  expect(todo.title).toBe('delectus aut autem');
});

