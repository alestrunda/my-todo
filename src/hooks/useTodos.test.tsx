import { renderHook } from "@testing-library/react-hooks";

import { useTodos } from "./useTodos";

test("loads todos", async () => {
  jest.spyOn(window, "fetch");
  (window.fetch as any).mockReturnValue({
    json: () => ({
      todos: [{ id: "1", title: "My Todo", description: "Lorem ipsum" }],
    }),
  });

  const { result, waitForNextUpdate }: any = renderHook(() => useTodos());

  let [todos, isLoading] = result.current;
  expect(isLoading).toEqual(true);
  expect(todos).toHaveLength(0);

  await waitForNextUpdate();

  [todos, isLoading] = result.current;
  expect(isLoading).toEqual(false);
  expect(todos).toHaveLength(1);
});
