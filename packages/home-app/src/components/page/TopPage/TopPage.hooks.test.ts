import { act, cleanup, renderHook } from "@testing-library/react";

import { useTopPage } from "./TopPage.hooks";

describe("Testing useTopPage", () => {
  beforeEach(() => {
    cleanup();
  });

  test("inputNameの初期値が空文字列であること", () => {
    const { result } = renderHook(() => useTopPage());
    expect(result.current.inputName).toBe("");
  });

  test("resultTextの初期値がundefinedであること", () => {
    const { result } = renderHook(() => useTopPage());
    expect(result.current.resultText).toBe(undefined);
  });

  test("handleGreetClickを実行するとresultTextが更新されること", async () => {
    vi.mock("@wailsjs/go/homeapp/App", () => ({
      Greet: vitest.fn().mockResolvedValue("foo"),
    }));

    const { result } = renderHook(() => useTopPage());
    await act(async () => {
      result.current.handleGreetClick();
      await Promise.resolve(); /* 非同期処理の完了を待つ */
    });
    expect(result.current.resultText).toBe("foo");
  });

  test("handleInputChangeを実行すると引数で渡した文字列がinputNameにセットされること", () => {
    const { result } = renderHook(() => useTopPage());
    act(() => result.current.handleInputChange("foo"));
    expect(result.current.inputName).toBe("foo");
  });
});
