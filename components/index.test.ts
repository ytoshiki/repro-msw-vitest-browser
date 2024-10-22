import {
  expect,
  test,
  describe,
  beforeAll,
  afterEach,
  afterAll,
  vi,
} from "vitest";
import Index from "./index.vue";
import { worker } from "../mock/worker";
import { flushPromises } from "@vue/test-utils";
import render from "../mock/render";
import { createApolloProvider } from "../mock/createApolloProvider";

const { provideApollo } = createApolloProvider();

describe("Index.vue", () => {
  beforeAll(async () => {
    await worker.start();
  });

  afterEach(async () => {
    worker.resetHandlers();
  });

  afterAll(async () => {
    worker.stop();
  });

  test("Query is mocked", async () => {
    const c = render(Index, provideApollo());
    // await c.getByRole("button").click();

    await new Promise((resolve) => setTimeout(resolve, 200));
    expect(c.text()).toContain("Mocked Pokemon");
    // await expect.element(c.getByText("Mocked Pokemon")).toBeVisible();
  });
});
