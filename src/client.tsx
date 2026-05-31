import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { Hydrate } from "@tanstack/react-start";
import { getRouter } from "./router";

const router = getRouter();

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <Hydrate
        when={router.state.matches.length ? router.state.matches.length : (undefined as never)}
      >
        {/* children required by type but content is handled by router */}
        null
      </Hydrate>
    </StrictMode>,
  );
});
