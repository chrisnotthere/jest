const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return results.data;
};

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

test("mock callback", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCallback);

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);
  // [ call1, call2 ]

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);

  expect(mockCallback.mock.results[1].value).toBe(43);
});

test("mock return value", () => {
  const myMock = jest.fn();
  console.log(myMock()); // undefined

  // we can mock the return value of the function
  myMock
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce("hello world");

  const results = myMock();
  const results2 = myMock();
  const results3 = myMock();

  // the return value changes each time the function is called
  expect(results).toBe(true);
  expect(results2).toBe(false);
  expect(results3).toBe("hello world");
});

test("mock axios", async () => {
  // spyOn axios.get and mock the return value
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "finish laundry",
    },
  });

  const results = await fetchData(1);
  expect(results.todo).toBe("finish laundry");
});
