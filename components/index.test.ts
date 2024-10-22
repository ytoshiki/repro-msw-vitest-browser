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
import { render } from "vitest-browser-vue";
import { createApolloProvider } from "../mock/createApolloProvider";

const { provideApollo } = createApolloProvider();

describe("Index.vue", () => {
  // ⭐️Commenting out this mock, a test will pass
  vi.mock("anyModuleToMock", () => ({
    default: {
      key: "value",
    },
  }));

  beforeAll(async () => {
    await worker.start();
  });

  afterEach(async () => {
    worker.resetHandlers();
  });

  afterAll(async () => {
    // Commenting out for a testing purpose
    // worker.stop();
  });

  test("Pokemon Query is successfully mocked", async () => {
    const component = render(Index, {
      global: {
        provide: provideApollo(),
      },
    });

    await expect.element(component.getByText("Mocked Pokemon")).toBeVisible();
  });
});
