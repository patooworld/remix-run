<!-- markdownlint-disable no-duplicate-header no-emphasis-as-heading no-inline-html -->

# Remix Releases

This page lists all releases/release notes for Remix back to `v2.0.0`. For releases prior to v2, please refer to the [Github Releases Page](https://github.com/remix-run/remix/releases).

We manage release notes in this file instead of the paginated Github Releases Page for 2 reasons:

- Pagination in the Github UI means that you cannot easily search release notes for a large span of releases at once
- The paginated Github interface also cuts off longer releases notes without indication in list view, and you need to click into the detail view to see the full set of release notes

<details>
  <summary>Table of Contents</summary>

- [Remix Releases](#remix-releases)
  - [v2.7.0](#v270)
    - [What's Changed](#whats-changed)
      - [Stabilized Vite Plugin](#stabilized-vite-plugin)
      - [New `Layout` Export](#new-layout-export)
      - [Basename support](#basename-support)
      - [Cloudflare Proxy as a Vite Plugin](#cloudflare-proxy-as-a-vite-plugin)
    - [Minor Changes](#minor-changes)
    - [Patch Changes](#patch-changes)
    - [Updated Dependencies](#updated-dependencies)
    - [Changes by Package](#changes-by-package)
  - [v2.6.0](#v260)
    - [What's Changed](#whats-changed-1)
      - [Unstable Vite Plugin updates](#unstable-vite-plugin-updates)
    - [Minor Changes](#minor-changes-1)
    - [Patch Changes](#patch-changes-1)
    - [Updated Dependencies](#updated-dependencies-1)
    - [Changes by Package](#changes-by-package-1)
  - [v2.5.1](#v251)
    - [Patch Changes](#patch-changes-2)
    - [Updated Dependencies](#updated-dependencies-2)
    - [Changes by Package](#changes-by-package-2)
  - [v2.5.0](#v250)
    - [What's Changed](#whats-changed-2)
      - [SPA Mode (unstable)](#spa-mode-unstable)
      - [Server Bundles (unstable)](#server-bundles-unstable)
    - [Minor Changes](#minor-changes-2)
    - [Patch Changes](#patch-changes-3)
    - [Updated Dependencies](#updated-dependencies-3)
    - [Changes by Package](#changes-by-package-3)
  - [v2.4.1](#v241)
    - [Patch Changes](#patch-changes-4)
    - [Updated Dependencies](#updated-dependencies-4)
    - [Changes by Package](#changes-by-package-4)
  - [v2.4.0](#v240)
    - [What's Changed](#whats-changed-3)
      - [Client Data](#client-data)
      - [`future.v3_relativeSplatPath`](#futurev3_relativesplatpath)
      - [Vite Updates (Unstable)](#vite-updates-unstable)
    - [Minor Changes](#minor-changes-3)
    - [Patch Changes](#patch-changes-5)
    - [Updated Dependencies](#updated-dependencies-5)
    - [Changes by Package](#changes-by-package-5)
  - [v2.3.1](#v231)
    - [Patch Changes](#patch-changes-6)
    - [Updated Dependencies](#updated-dependencies-6)
    - [Changes by Package](#changes-by-package-6)
  - [v2.3.0](#v230)
    - [What's Changed](#whats-changed-4)
      - [Stabilized `useBlocker`](#stabilized-useblocker)
      - [`unstable_flushSync` API](#unstable_flushsync-api)
    - [Minor Changes](#minor-changes-4)
    - [Patch Changes](#patch-changes-7)
    - [Updated Dependencies](#updated-dependencies-7)
    - [Changes by Package](#changes-by-package-7)
  - [v2.2.0](#v220)
    - [What's Changed](#whats-changed-5)
      - [Vite!](#vite)
      - [New Fetcher APIs](#new-fetcher-apis)
      - [Persistence Future Flag](#persistence-future-flag)
    - [Minor Changes](#minor-changes-5)
    - [Patch Changes](#patch-changes-8)
    - [Updated Dependencies](#updated-dependencies-8)
    - [Changes by Package](#changes-by-package-8)
  - [v2.1.0](#v210)
    - [What's Changed](#whats-changed-6)
      - [View Transitions](#view-transitions)
      - [Stable `createRemixStub`](#stable-createremixstub)
    - [Minor Changes](#minor-changes-6)
    - [Patch Changes](#patch-changes-9)
    - [Updated Dependencies](#updated-dependencies-9)
    - [Changes by Package](#changes-by-package-9)
  - [v2.0.1](#v201)
    - [Patch Changes](#patch-changes-10)
    - [Changes by Package 🔗](#changes-by-package-)
  - [v2.0.0](#v200)
    - [Breaking Changes](#breaking-changes)
      - [Upgraded Dependency Requirements](#upgraded-dependency-requirements)
      - [Removed Future Flags](#removed-future-flags)
      - [Breaking Changes/API Removals](#breaking-changesapi-removals)
        - [With deprecation warnings](#with-deprecation-warnings)
        - [Without deprecation warnings](#without-deprecation-warnings)
        - [Breaking Type Changes](#breaking-type-changes)
    - [New Features](#new-features)
    - [Other Notable Changes](#other-notable-changes)
    - [Updated Dependencies](#updated-dependencies-10)
    - [Changes by Package](#changes-by-package-10)

</details>

<!--
To add a new release, copy from this template:

## v2.X.Y

Date: YYYY-MM-DD

### What's Changed

#### Big New Feature 1

#### Big New Feature 2

### Minor Changes

### Patch Changes

### Updated Dependencies

- [`react-router-dom@6.X.Y`](https://github.com/remix-run/react-router/releases/tag/react-router%406.X.Y)
- [`@remix-run/router@1.X.Y`](https://github.com/remix-run/react-router/blob/main/packages/router/CHANGELOG.md#1XY)

### Changes by Package

- [`create-remix`](https://github.com/remix-run/remix/blob/remix%402.X.Y/packages/create-remix/CHANGELOG.md#2XY)
- [`@remix-run/architect`](https://github.com/remix-run/remix/blob/remix%402.X.Y/packages/remix-architect/CHANGELOG.md#2XY)
- [`@remix-run/cloudflare`](https://github.com/remix-run/remix/blob/remix%402.X.Y/packages/remix-cloudflare/CHANGELOG.md#2XY)
- [`@remix-run/cloudflare-pages`](https://github.com/remix-run/remix/blob/remix%402.X.Y/packages/remix-cloudflare-pages/CHANGELOG.md#2XY)
- [`@remix-run/cloudflare-workers`](https://github.com/remix-run/remix/blob/remix%402.X.Y/packages/remix-cloudflare-workers/CHANGELOG.md#2XY)
- [`@remix-run/css-bundle`](https://github.com/remix-run/remix/blob/remix%402.X.Y/packages/remix-css-bundle/CHANGELOG.md#2XY)
- [`@remix-run/deno`](https://github.com/remix-run/remix/blob/remix%402.X.Y/packages/remix-deno/CHANGELOG.md#2XY)
- [`@remix-run/dev`](https://github.com/remix-run/remix/blob/remix%402.X.Y/packages/remix-dev/CHANGELOG.md#2XY)
- [`@remix-run/eslint-config`](https://github.com/remix-run/remix/blob/remix%402.X.Y/packages/remix-eslint-config/CHANGELOG.md#2XY)
- [`@remix-run/express`](https://github.com/remix-run/remix/blob/remix%402.X.Y/packages/remix-express/CHANGELOG.md#2XY)
- [`@remix-run/node`](https://github.com/remix-run/remix/blob/remix%402.X.Y/packages/remix-node/CHANGELOG.md#2XY)
- [`@remix-run/react`](https://github.com/remix-run/remix/blob/remix%402.X.Y/packages/remix-react/CHANGELOG.md#2XY)
- [`@remix-run/serve`](https://github.com/remix-run/remix/blob/remix%402.X.Y/packages/remix-serve/CHANGELOG.md#2XY)
- [`@remix-run/server-runtime`](https://github.com/remix-run/remix/blob/remix%402.X.Y/packages/remix-server-runtime/CHANGELOG.md#2XY)
- [`@remix-run/testing`](https://github.com/remix-run/remix/blob/remix%402.X.Y/packages/remix-testing/CHANGELOG.md#2XY)

**Full Changelog**: [`v2.X.Y...v2.X.Y`](https://github.com/remix-run/remix/compare/remix@2.X.Y...remix@2.X.Y)

-->

## 2.7.2

Date: 2024-02-21

### Patch Changes

- Vite: Fix error when building projects with `.css?url` imports ([#8829](https://github.com/remix-run/remix/pull/8829))

## 2.7.1

Date: 2024-02-20

### Patch Changes

- Fix breaking change for `@remix-run/cloudflare-pages` ([#8819](https://github.com/remix-run/remix/pull/8819))
  - Restore Cloudflare event context fields in `getLoadContext` argument for backwards compatibility.

## v2.7.0

Date: 2024-02-20

### What's Changed

#### Stabilized Vite Plugin

We're excited to announce that support for [Vite](https://vitejs.dev/) is now stable in Remix `2.7.0`! Ever since the [initial unstable release of Remix Vite](https://remix.run/blog/remix-heart-vite), we’ve been hard at work refining and extending it over the past few months with help from all of our early adopters and community contributors. This also means that Vite-only features such as [SPA Mode](https://remix.run/docs/en/main/future/spa-mode), [Server Bundles](https://remix.run/docs/future/server-bundles), and [`basename` support](https://remix.run/docs/en/dev/future/vite#basename) are now officially stable as well 😊.

For more information, check out the [blog post](https://remix.run/blog/remix-vite-stable) and the [Vite docs](https://remix.run/docs/en/main/future/vite).

#### New `Layout` Export

We've found that it's _super_ common to create your own component in your root route to hold the shared layout/app shell between your `Component`/`ErrorBoundary`/`HydrateFallback`. This is so common (and can also cause some minor edge-case issues such as a FOUC on hydration) that we've incorporated this as a first-class API in `2.7.0`.

You can now export an optional `Layout` component from your root route which will be provided your route component, ErrorBoundary, or HydrateFallback as it's `children`. For more information, please see the [`Layout` docs](https://remix.run/docs/en/dev/file-conventions/root#layout-export) and the [RFC](https://github.com/remix-run/remix/discussions/8702).

#### Basename support

React Router has long supported a [`basename`](https://reactrouter.com/en/main/routers/create-browser-router#basename) config that allows you to serve your app within a subpath such as `http://localhost/myapp/*` without having to include the `/myapp` segment in all of your route paths. This was originally omitted from Remix because v1 nested folders file-convention made it pretty easy to put your route files in a `routes/myapp/` folder, giving you the same functionality. There has also been an [open proposal from the community](https://github.com/remix-run/remix/discussions/2891) to add this functionality.

Two things have since changed that made us reconsider the lack of `basename` support:

- We switched to a flat-file based convention in v2, and it gets far less ergonomic to have to prefix all of your route files with `myapp.` compared to the nested folder convention
- We moved to Vite which has it's own `base` config which is often (and easily) confused with the concept of a React Router `basename` (when in reality it's more aligned with the old Remix `publicPath` config)

In `2.7.0` we've added support for a `basename` in the Vite plugin config. For more information, please check out the [`basename` docs](https://remix.run/docs/en/dev/future/vite#basename).

_Note: This is a Vite-only feature and is not available via the `esbuild` compiler._

#### Cloudflare Proxy as a Vite Plugin

⚠️ This is a breaking change for projects relying on Cloudflare support from the unstable Vite plugin

The Cloudflare preset (`unstable_cloudflarePreset`) as been removed and replaced with a new Vite plugin:

```diff
 import {
    unstable_vitePlugin as remix,
-   unstable_cloudflarePreset as cloudflare,
+   cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
  } from "@remix-run/dev";
  import { defineConfig } from "vite";

  export default defineConfig({
    plugins: [
+     remixCloudflareDevProxy(),
+     remix(),
-     remix({
-       presets: [cloudflare()],
-     }),
    ],
-   ssr: {
-     resolve: {
-       externalConditions: ["workerd", "worker"],
-     },
-   },
  });
```

A few notes on the new plugin:

- `remixCloudflareDevProxy` must come _before_ the `remix` plugin so that it can override Vite's dev server middleware to be compatible with Cloudflare's proxied environment
- Because it is a Vite plugin, `remixCloudflareDevProxy` can set `ssr.resolve.externalConditions` to be `workerd`-compatible for you
- `remixCloudflareDevProxy` accepts a `getLoadContext` function that replaces the old `getRemixDevLoadContext`
- If you were using a `nightly` version that required `getBindingsProxy` or `getPlatformProxy`, that is no longer required
- Any options you were passing to `getBindingsProxy` or `getPlatformProxy` should now be passed to `remixCloudflareDevProxy` instead
- This API also better aligns with future plans to support Cloudflare with a framework-agnostic Vite plugin that makes use of Vite's (experimental) Runtime API.

### Minor Changes

- `@remix-run/react` - Allow an optional `Layout` export from the root route ([#8709](https://github.com/remix-run/remix/pull/8709))
- `@remix-run/cloudflare-pages` - Make `getLoadContext` optional for Cloudflare Pages ([#8701](https://github.com/remix-run/remix/pull/8701))
  - Defaults to `(context) => ({ env: context })`, which is what we used to have in all the templates
  - This gives parity with the Cloudflare preset for the Remix Vite plugin and keeps our templates leaner
- `@remix-run/dev` - Vite: Cloudflare Proxy as a Vite plugin ([#8749](https://github.com/remix-run/remix/pull/8749))
  - **⚠️ This is a breaking change for projects relying on Cloudflare support from the unstable Vite plugin**
- `@remix-run/dev` - Vite: Add a new `basename` option to the Vite plugin, allowing users to set the internal React Router [`basename`](https://reactrouter.com/en/main/routers/create-browser-router#basename) in order to to serve their applications underneath a subpath ([#8145](https://github.com/remix-run/remix/pull/8145))
- `@remix-run/dev` - Vite: Stabilize the Remix Vite plugin, Cloudflare preset, and all related types by removing all `unstable_` / `Unstable_` prefixes ([#8713](https://github.com/remix-run/remix/pull/8713))
  - While this is a breaking change for existing Remix Vite plugin consumers, now that the plugin has stabilized, there will no longer be any breaking changes outside of a major release. Thank you to all of our early adopters and community contributors for helping us get here! 🙏
- `@remix-run/dev` - Vite: Stabilize "SPA Mode" by renaming the Remix vite plugin config from `unstable_ssr -> ssr` ([#8692](https://github.com/remix-run/remix/pull/8692))

### Patch Changes

- `@remix-run/express` - Use `req.originalUrl` instead of `req.url` so that Remix sees the full URL ([#8145](https://github.com/remix-run/remix/pull/8145))
  - Remix relies on the knowing the full URL to ensure that server and client code can function together, and does not support URL rewriting prior to the Remix handler
- `@remix-run/react` - Fix a bug with SPA mode when the root route had no children ([#8747](https://github.com/remix-run/remix/pull/8747))
- `@remix-run/server-runtime` - Add a more specific error if a user returns a `defer` response from a resource route ([#8726](https://github.com/remix-run/remix/pull/8726))
- `@remix-run/dev` - Always prepend `DOCTYPE` in SPA mode `entry.server.tsx`, can opt out via remix reveal ([#8725](https://github.com/remix-run/remix/pull/8725))
- `@remix-run/dev` - Fix build issue in SPA mode when using a `basename` ([#8720](https://github.com/remix-run/remix/pull/8720))
- `@remix-run/dev` - Fix type error in Remix config for synchronous `routes` function ([#8745](https://github.com/remix-run/remix/pull/8745))
- `@remix-run/dev` - Vite: Fix issue where client route file requests fail if search params have been parsed and serialized before reaching the Remix Vite plugin ([#8740](https://github.com/remix-run/remix/pull/8740))
- `@remix-run/dev` - Vite: Validate that the MDX Rollup plugin, if present, is placed before Remix in Vite config ([#8690](https://github.com/remix-run/remix/pull/8690))
- `@remix-run/dev` - Vite: Fix issue resolving critical CSS during development when the current working directory differs from the project root ([#8752](https://github.com/remix-run/remix/pull/8752))
- `@remix-run/dev` - Vite: Require version `5.1.0` to support `.css?url` imports ([#8723](https://github.com/remix-run/remix/pull/8723))
- `@remix-run/dev` - Vite: Support Vite `5.1.0`'s `.css?url` imports ([#8684](https://github.com/remix-run/remix/pull/8684))
- `@remix-run/dev` - Vite: Enable use of [`vite preview`](https://main.vitejs.dev/guide/static-deploy.html#deploying-a-static-site) to preview Remix SPA applications ([#8624](https://github.com/remix-run/remix/pull/8624))
  - In the SPA template, `npm run start` has been renamed to `npm run preview` which uses `vite preview` instead of a standalone HTTP server such as `http-server` or `serv-cli`
- `@remix-run/dev` - Vite: Remove the ability to pass `publicPath` as an option to the Remix vite plugin ([#8145](https://github.com/remix-run/remix/pull/8145))
  - **⚠️ This is a breaking change for projects using the unstable Vite plugin with a `publicPath`**
  - This is already handled in Vite via the [`base`](https://vitejs.dev/guide/build.html#public-base-path) config so we now set the Remix `publicPath` from the Vite `base` config
- `@remix-run/dev` - Vite: Enable HMR for `.md` and `.mdx` files ([#8711](https://github.com/remix-run/remix/pull/8711))
- `@remix-run/dev` - Vite: reliably detect non-root routes in Windows ([#8806](https://github.com/remix-run/remix/pull/8806))
- `@remix-run/dev` - Vite: Pass `remixUserConfig` to preset `remixConfig` hook ([#8797](https://github.com/remix-run/remix/pull/8797))
- `@remix-run/dev` - Vite: Ensure CSS file URLs that are only referenced in the server build are available on the client ([#8796](https://github.com/remix-run/remix/pull/8796))
- `@remix-run/dev` - Vite: fix server exports dead-code elimination for routes outside of app directory ([#8795](https://github.com/remix-run/remix/pull/8795))

### Updated Dependencies

- [`react-router-dom@6.22.Y`](https://github.com/remix-run/react-router/releases/tag/react-router%406.22.1)
- [`@remix-run/router@1.15.Y`](https://github.com/remix-run/react-router/blob/main/packages/router/CHANGELOG.md#1151)

### Changes by Package

- [`create-remix`](https://github.com/remix-run/remix/blob/remix%402.7.0/packages/create-remix/CHANGELOG.md#270)
- [`@remix-run/architect`](https://github.com/remix-run/remix/blob/remix%402.7.0/packages/remix-architect/CHANGELOG.md#270)
- [`@remix-run/cloudflare`](https://github.com/remix-run/remix/blob/remix%402.7.0/packages/remix-cloudflare/CHANGELOG.md#270)
- [`@remix-run/cloudflare-pages`](https://github.com/remix-run/remix/blob/remix%402.7.0/packages/remix-cloudflare-pages/CHANGELOG.md#270)
- [`@remix-run/cloudflare-workers`](https://github.com/remix-run/remix/blob/remix%402.7.0/packages/remix-cloudflare-workers/CHANGELOG.md#270)
- [`@remix-run/css-bundle`](https://github.com/remix-run/remix/blob/remix%402.7.0/packages/remix-css-bundle/CHANGELOG.md#270)
- [`@remix-run/deno`](https://github.com/remix-run/remix/blob/remix%402.7.0/packages/remix-deno/CHANGELOG.md#270)
- [`@remix-run/dev`](https://github.com/remix-run/remix/blob/remix%402.7.0/packages/remix-dev/CHANGELOG.md#270)
- [`@remix-run/eslint-config`](https://github.com/remix-run/remix/blob/remix%402.7.0/packages/remix-eslint-config/CHANGELOG.md#270)
- [`@remix-run/express`](https://github.com/remix-run/remix/blob/remix%402.7.0/packages/remix-express/CHANGELOG.md#270)
- [`@remix-run/node`](https://github.com/remix-run/remix/blob/remix%402.7.0/packages/remix-node/CHANGELOG.md#270)
- [`@remix-run/react`](https://github.com/remix-run/remix/blob/remix%402.7.0/packages/remix-react/CHANGELOG.md#270)
- [`@remix-run/serve`](https://github.com/remix-run/remix/blob/remix%402.7.0/packages/remix-serve/CHANGELOG.md#270)
- [`@remix-run/server-runtime`](https://github.com/remix-run/remix/blob/remix%402.7.0/packages/remix-server-runtime/CHANGELOG.md#270)
- [`@remix-run/testing`](https://github.com/remix-run/remix/blob/remix%402.7.0/packages/remix-testing/CHANGELOG.md#270)

**Full Changelog**: [`v2.6.0...v2.7.0`](https://github.com/remix-run/remix/compare/remix@2.6.0...remix@2.7.0)

## v2.6.0

Date: 2024-02-01

### What's Changed

#### Unstable Vite Plugin updates

As we continue moving towards stabilizing the Vite plugin, we've introduced a few breaking changes to the unstable Vite plugin in this release. Please read the `@remix-run/dev` changes below closely and update your app accordingly if you've opted into using the Vite plugin.

We've also removed the `unstable_` prefix from the `serverBundles` option as we're now confident in the API ([#8596](https://github.com/remix-run/remix/pull/8596)).

🎉 And last, but certainly not least - we've added much anticipated Cloudflare support in [#8531](https://github.com/remix-run/remix/pull/8531)! To get started with Cloudflare, you can use the `unstable-vite-cloudflare` template:

```shellscript nonumber
npx create-remix@latest --template remix-run/remix/templates/unstable-vite-cloudflare
```

For more information, please refer to the docs at [Future > Vite > Cloudflare](https://remix.run/docs/future/vite#cloudflare) and [Future > Vite > Migrating > Migrating Cloudflare Functions](https://remix.run/docs/future/vite#migrating-cloudflare-functions).

### Minor Changes

- `@remix-run/server-runtime` - Add `future.v3_throwAbortReason` flag to throw `request.signal.reason` when a request is aborted instead of an `Error` such as `new Error("query() call aborted: GET /path")` ([#8251](https://github.com/remix-run/remix/pull/8251))

### Patch Changes

- `@remix-run/server-runtime` - Unwrap thrown `Response`'s from `entry.server` into `ErrorResponse`'s and preserve the status code ([#8577](https://github.com/remix-run/remix/pull/8577))
- `@remix-run/dev` - Vite: Add `manifest` option to Vite plugin to enable writing a `.remix/manifest.json` file to the build directory ([#8575](https://github.com/remix-run/remix/pull/8575))
  - ⚠️ **This is a breaking change for consumers of the Vite plugin's "server bundles" feature**
  - The `build/server/bundles.json` file has been superseded by the more general `build/.remix/manifest.json`
  - While the old server bundles manifest was always written to disk when generating server bundles, the build manifest file must be explicitly enabled via the `manifest` option
- `@remix-run/dev` - Vite: Rely on Vite plugin ordering ([#8627](https://github.com/remix-run/remix/pull/8627))

  - ⚠️ **This is a breaking change for projects using the unstable Vite plugin**
  - The Remix plugin expects to process JavaScript or TypeScript files, so any transpilation from other languages must be done first.
  - For example, that means putting the MDX plugin _before_ the Remix plugin:

    ```diff
      import mdx from "@mdx-js/rollup";
      import { unstable_vitePlugin as remix } from "@remix-run/dev";
      import { defineConfig } from "vite";

      export default defineConfig({
        plugins: [
    +     mdx(),
          remix()
    -     mdx(),
        ],
      });
    ```

  - Previously, the Remix plugin misused `enforce: "post"` from Vite's plugin API to ensure that it ran last
  - However, this caused other unforeseen issues
  - Instead, we now rely on standard Vite semantics for plugin ordering
  - The official [Vite React SWC plugin](https://github.com/vitejs/vite-plugin-react-swc/blob/main/src/index.ts#L97-L116) also relies on plugin ordering for MDX

- `@remix-run/dev` - Vite: Remove interop with `<LiveReload />`, rely on `<Scripts />` instead ([#8636](https://github.com/remix-run/remix/pull/8636))

  - ⚠️ **This is a breaking change for projects using the unstable Vite plugin**
  - Vite provides a robust client-side runtime for development features like HMR, making the `<LiveReload />` component obsolete
  - In fact, having a separate dev scripts component was causing issues with script execution order
  - To work around this, the Remix Vite plugin used to override `<LiveReload />` into a bespoke implementation that was compatible with Vite
  - Instead of all this indirection, now the Remix Vite plugin instructs the `<Scripts />` component to automatically include Vite's client-side runtime and other dev-only scripts
  - To adopt this change, you can remove the LiveReload component from your `root.tsx` component:

    ```diff
      import {
    -   LiveReload,
        Outlet,
        Scripts,
      }

      export default function App() {
        return (
          <html>
            <head>
            </head>
            <body>
              <Outlet />
              <Scripts />
    -         <LiveReload />
            </body>
          </html>
        )
      }
    ```

- `@remix-run/dev` - Vite: Only write Vite manifest files if `build.manifest` is enabled within the Vite config ([#8599](https://github.com/remix-run/remix/pull/8599))

  - ⚠️ **This is a breaking change for consumers of Vite's `manifest.json` files**
  - To explicitly enable generation of Vite manifest files, you must set `build.manifest` to `true` in your Vite config:

    ```ts
    export default defineConfig({
      build: { manifest: true },
      // ...
    });
    ```

- `@remix-run/dev` - Vite: Add new `buildDirectory` option with a default value of `"build"` ([#8575](https://github.com/remix-run/remix/pull/8575))

  - ⚠️ **This is a breaking change for consumers of the Vite plugin that were using the `assetsBuildDirectory` and `serverBuildDirectory` options**
  - This replaces the old `assetsBuildDirectory` and `serverBuildDirectory` options which defaulted to `"build/client"` and `"build/server"` respectively
  - The Remix Vite plugin now builds into a single directory containing `client` and `server` directories
  - If you've customized your build output directories, you'll need to migrate to the new `buildDirectory` option, e.g.:

    ```diff
    import { unstable_vitePlugin as remix } from "@remix-run/dev";
    import { defineConfig } from "vite";

    export default defineConfig({
      plugins: [
        remix({
    -      serverBuildDirectory: "dist/server",
    -      assetsBuildDirectory: "dist/client",
    +      buildDirectory: "dist",
        })
      ],
    });
    ```

- `@remix-run/dev` - Vite: Write Vite manifest files to `build/.vite` directory rather than being nested within `build/client` and `build/server` directories ([#8599](https://github.com/remix-run/remix/pull/8599))
  - ⚠️ **This is a breaking change for consumers of Vite's `manifest.json` files**
  - Vite manifest files are now written to the Remix build directory
  - Since all Vite manifests are now in the same directory, they're no longer named `manifest.json`
  - Instead, they're named `build/.vite/client-manifest.json` and `build/.vite/server-manifest.json`, or `build/.vite/server-{BUNDLE_ID}-manifest.json` when using server bundles
- `@remix-run/dev` - Vite: Remove `unstable` prefix from `serverBundles` option ([#8596](https://github.com/remix-run/remix/pull/8596))
- `@remix-run/dev` - Vite: Add `--sourcemapClient` and `--sourcemapServer` flags to `remix vite:build` ([#8613](https://github.com/remix-run/remix/pull/8613))
  - `--sourcemapClient`, `--sourcemapClient=inline`, or `--sourcemapClient=hidden`
  - `--sourcemapServer`, `--sourcemapServer=inline`, or `--sourcemapServer=hidden`
  - See https://vitejs.dev/config/build-options.html#build-sourcemap
- `@remix-run/dev` - Vite: Validate IDs returned from the `serverBundles` function to ensure they only contain alphanumeric characters, hyphens and underscores ([#8598](https://github.com/remix-run/remix/pull/8598))
- `@remix-run/dev` - Vite: Fix "could not fast refresh" false alarm ([#8580](https://github.com/remix-run/remix/pull/8580))
  - HMR is already functioning correctly but was incorrectly logging that it "could not fast refresh" on internal client routes
  - Now internal client routes correctly register Remix exports like `meta` for fast refresh, which removes the false alarm.
- `@remix-run/dev` - Vite: Cloudflare Pages support ([#8531](https://github.com/remix-run/remix/pull/8531))
- `@remix-run/dev` - Vite: Add `getRemixDevLoadContext` option to Cloudflare preset ([#8649](https://github.com/remix-run/remix/pull/8649))
- `@remix-run/dev` - Vite: Remove undocumented backwards compatibility layer for Vite v4 ([#8581](https://github.com/remix-run/remix/pull/8581))
- `@remix-run/dev` - Vite: Add `presets` option to ease integration with different platforms and tools ([#8514](https://github.com/remix-run/remix/pull/8514))
- `@remix-run/dev` - Vite: Add `buildEnd` hook ([#8620](https://github.com/remix-run/remix/pull/8620))
- `@remix-run/dev` - Vite: Add `mode` field into generated server build ([#8539](https://github.com/remix-run/remix/pull/8539))
- `@remix-run/dev` - Vite: Reduce network calls for route modules during HMR ([#8591](https://github.com/remix-run/remix/pull/8591))
- `@remix-run/dev` - Vite: Export `Unstable_ServerBundlesFunction` and `Unstable_VitePluginConfig` types ([#8654](https://github.com/remix-run/remix/pull/8654))

### Updated Dependencies

- [`react-router-dom@6.22.0`](https://github.com/remix-run/react-router/releases/tag/react-router%406.22.0)
- [`@remix-run/router@1.15.0`](https://github.com/remix-run/react-router/blob/main/packages/router/CHANGELOG.md#1150)

### Changes by Package

- [`create-remix`](https://github.com/remix-run/remix/blob/remix%402.6.0/packages/create-remix/CHANGELOG.md#260)
- [`@remix-run/architect`](https://github.com/remix-run/remix/blob/remix%402.6.0/packages/remix-architect/CHANGELOG.md#260)
- [`@remix-run/cloudflare`](https://github.com/remix-run/remix/blob/remix%402.6.0/packages/remix-cloudflare/CHANGELOG.md#260)
- [`@remix-run/cloudflare-pages`](https://github.com/remix-run/remix/blob/remix%402.6.0/packages/remix-cloudflare-pages/CHANGELOG.md#260)
- [`@remix-run/cloudflare-workers`](https://github.com/remix-run/remix/blob/remix%402.6.0/packages/remix-cloudflare-workers/CHANGELOG.md#260)
- [`@remix-run/css-bundle`](https://github.com/remix-run/remix/blob/remix%402.6.0/packages/remix-css-bundle/CHANGELOG.md#260)
- [`@remix-run/deno`](https://github.com/remix-run/remix/blob/remix%402.6.0/packages/remix-deno/CHANGELOG.md#260)
- [`@remix-run/dev`](https://github.com/remix-run/remix/blob/remix%402.6.0/packages/remix-dev/CHANGELOG.md#260)
- [`@remix-run/eslint-config`](https://github.com/remix-run/remix/blob/remix%402.6.0/packages/remix-eslint-config/CHANGELOG.md#260)
- [`@remix-run/express`](https://github.com/remix-run/remix/blob/remix%402.6.0/packages/remix-express/CHANGELOG.md#260)
- [`@remix-run/node`](https://github.com/remix-run/remix/blob/remix%402.6.0/packages/remix-node/CHANGELOG.md#260)
- [`@remix-run/react`](https://github.com/remix-run/remix/blob/remix%402.6.0/packages/remix-react/CHANGELOG.md#260)
- [`@remix-run/serve`](https://github.com/remix-run/remix/blob/remix%402.6.0/packages/remix-serve/CHANGELOG.md#260)
- [`@remix-run/server-runtime`](https://github.com/remix-run/remix/blob/remix%402.6.0/packages/remix-server-runtime/CHANGELOG.md#260)
- [`@remix-run/testing`](https://github.com/remix-run/remix/blob/remix%402.6.0/packages/remix-testing/CHANGELOG.md#260)

**Full Changelog**: [`v2.5.1...v2.6.0`](https://github.com/remix-run/remix/compare/remix@2.5.1...remix@2.6.0)

## v2.5.1

Date: 2024-01-18

### Patch Changes

- `create-remix` - high-contrast fg/bg for header colors ([#8503](https://github.com/remix-run/remix/pull/8503))
  - `bgWhite` and `whiteBright` are the same color in many terminal colorthemes, which was causing it to render as illegible white-on-white
- `@remix-run/dev` - Add `isSpaMode` to `@remix-run/dev/server-build` virtual module ([#8492](https://github.com/remix-run/remix/pull/8492))
- `@remix-run/dev` - SPA Mode: Automatically prepend `<!DOCTYPE html>` if not present to fix quirks mode warnings for SPA template ([#8495](https://github.com/remix-run/remix/pull/8495))
- `@remix-run/dev` - Vite: Errors for server-only code point to new docs ([#8488](https://github.com/remix-run/remix/pull/8488))
- `@remix-run/dev` - Vite: Fix HMR race condition when reading changed file contents ([#8479](https://github.com/remix-run/remix/pull/8479))
- `@remix-run/dev` - Vite: Tree-shake unused route exports in the client build ([#8468](https://github.com/remix-run/remix/pull/8468))
- `@remix-run/dev` - Vite: Performance profiling ([#8493](https://github.com/remix-run/remix/pull/8493))
  - Run `remix vite:build --profile` to generate a `.cpuprofile` that can be shared or uploaded to speedscope.app
  - In dev, press `p + enter` to start a new profiling session or stop the current session
  - If you need to profile dev server startup, run `remix vite:dev --profile` to initialize the dev server with a running profiling session
  - For more, see the new [Vite > Performance](https://remix.run/docs/future/vite#performance) docs
- `@remix-run/dev` - Vite: Improve performance of dev server requests by invalidating Remix's virtual modules on relevant file changes rather than on every request ([#8164](https://github.com/remix-run/remix/pull/8164))
- `@remix-run/react` - Remove leftover `unstable_` prefix from `Blocker`/`BlockerFunction` types ([#8530](https://github.com/remix-run/remix/pull/8530))
- `@remix-run/react` - Only use active matches in `<Meta>`/`<Links>` in SPA mode ([#8538](https://github.com/remix-run/remix/pull/8538))

### Updated Dependencies

- [`react-router-dom@6.21.3`](https://github.com/remix-run/react-router/releases/tag/react-router%406.21.3)

### Changes by Package

- [`create-remix`](https://github.com/remix-run/remix/blob/remix%402.5.1/packages/create-remix/CHANGELOG.md#251)
- [`@remix-run/architect`](https://github.com/remix-run/remix/blob/remix%402.5.1/packages/remix-architect/CHANGELOG.md#251)
- [`@remix-run/cloudflare`](https://github.com/remix-run/remix/blob/remix%402.5.1/packages/remix-cloudflare/CHANGELOG.md#251)
- [`@remix-run/cloudflare-pages`](https://github.com/remix-run/remix/blob/remix%402.5.1/packages/remix-cloudflare-pages/CHANGELOG.md#251)
- [`@remix-run/cloudflare-workers`](https://github.com/remix-run/remix/blob/remix%402.5.1/packages/remix-cloudflare-workers/CHANGELOG.md#251)
- [`@remix-run/css-bundle`](https://github.com/remix-run/remix/blob/remix%402.5.1/packages/remix-css-bundle/CHANGELOG.md#251)
- [`@remix-run/deno`](https://github.com/remix-run/remix/blob/remix%402.5.1/packages/remix-deno/CHANGELOG.md#251)
- [`@remix-run/dev`](https://github.com/remix-run/remix/blob/remix%402.5.1/packages/remix-dev/CHANGELOG.md#251)
- [`@remix-run/eslint-config`](https://github.com/remix-run/remix/blob/remix%402.5.1/packages/remix-eslint-config/CHANGELOG.md#251)
- [`@remix-run/express`](https://github.com/remix-run/remix/blob/remix%402.5.1/packages/remix-express/CHANGELOG.md#251)
- [`@remix-run/node`](https://github.com/remix-run/remix/blob/remix%402.5.1/packages/remix-node/CHANGELOG.md#251)
- [`@remix-run/react`](https://github.com/remix-run/remix/blob/remix%402.5.1/packages/remix-react/CHANGELOG.md#251)
- [`@remix-run/serve`](https://github.com/remix-run/remix/blob/remix%402.5.1/packages/remix-serve/CHANGELOG.md#251)
- [`@remix-run/server-runtime`](https://github.com/remix-run/remix/blob/remix%402.5.1/packages/remix-server-runtime/CHANGELOG.md#251)
- [`@remix-run/testing`](https://github.com/remix-run/remix/blob/remix%402.5.1/packages/remix-testing/CHANGELOG.md#251)

**Full Changelog**: [`v2.5.0...v2.5.1`](https://github.com/remix-run/remix/compare/remix@2.5.0...remix@2.5.1)

## v2.5.0

Date: 2024-01-11

### What's Changed

#### SPA Mode (unstable)

SPA Mode ([RFC](https://github.com/remix-run/remix/discussions/7638)) allows you to generate your Remix app as a standalone SPA served from a static `index.html` file. You can opt into SPA Mode by setting `unstable_ssr: false` in your Remix Vite plugin config:

```js
// vite.config.ts
import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [remix({ unstable_ssr: false })],
});
```

Development in SPA Mode is just like a normal Remix app, and still uses the Remix dev server for HMR/HDR:

```sh
remix vite:dev
```

Building in SPA Mode will generate an `index.html` file in your client assets directory:

```sh
remix vite:build
```

To run your SPA, you serve your client assets directory via an HTTP server:

```sh
npx http-server build/client
```

For more information, please refer to the [SPA Mode docs](https://remix.run/future/spa-mode).

#### Server Bundles (unstable)

This is an advanced feature designed for hosting provider integrations where you may want to split server code into multiple request handlers. When compiling your app into multiple server bundles, there will need to be a custom routing layer in front of your app directing requests to the correct bundle. This feature is currently unstable and only designed to gather early feedback.

You can control the server bundles generated by your Remix Vite build by setting the `unstable_serverBundles` option in your vite config:

```ts
import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    remix({
      unstable_serverBundles: ({ branch }) => {
        const isAuthenticatedRoute = branch.some(
          (route) => route.id === "routes/_authenticated"
        );

        return isAuthenticatedRoute ? "authenticated" : "unauthenticated";
      },
    }),
  ],
});
```

### Minor Changes

- Add unstable support for "SPA Mode" ([#8457](https://github.com/remix-run/remix/pull/8457))
- Add `unstable_serverBundles` option to Vite plugin to support splitting server code into multiple request handlers ([#8332](https://github.com/remix-run/remix/pull/8332))

### Patch Changes

- `create-remix`: Only update `*` versions for Remix dependencies ([#8458](https://github.com/remix-run/remix/pull/8458))
- `remix-serve`: Don't try to load sourcemaps if they don't exist on disk ([#8446](https://github.com/remix-run/remix/pull/8446))
- `@remix-run/dev`: Fix issue with `isbot@4` released on 1/1/2024 ([#8415](https://github.com/remix-run/remix/pull/8415))
  - `remix dev` will now add `"isbot": "^4"` to `package.json` instead of using `latest`
  - Update built-in `entry.server` files to work with both `isbot@3` and `isbot@4` for backwards-compatibility with Remix apps that have pinned `isbot@3`
  - Templates are updated to use `isbot@4` moving forward via `create-remix`
- `@remix-run/dev`: Vite - Fix HMR issues when altering exports for non-rendered routes ([#8157](https://github.com/remix-run/remix/pull/8157))
- `@remix-run/dev`: Vite - Default `NODE_ENV` to `"production"` when running `remix vite:build` command ([#8405](https://github.com/remix-run/remix/pull/8405))
- `@remix-run/dev`: Vite - Remove Vite plugin config option `serverBuildPath` in favor of separate `serverBuildDirectory` and `serverBuildFile` options ([#8332](https://github.com/remix-run/remix/pull/8332))
- `@remix-run/dev`: Vite - Loosen strict route exports restriction, reinstating support for non-Remix route exports ([#8420](https://github.com/remix-run/remix/pull/8420))
- `@remix-run/react`: Vite - Fix type conflict with `import.meta.hot` from the existing Remix compiler ([#8459](https://github.com/remix-run/remix/pull/8459))
- `@remix-run/server-runtime`: Updated `cookie` dependency to [`0.6.0`](https://github.com/jshttp/cookie/blob/master/HISTORY.md#060--2023-11-06) to inherit support for the [`Partitioned`](https://developer.mozilla.org/en-US/docs/Web/Privacy/Partitioned_cookies) attribute ([#8375](https://github.com/remix-run/remix/pull/8375))

### Updated Dependencies

- [`react-router-dom@6.21.2`](https://github.com/remix-run/react-router/releases/tag/react-router%406.21.2)
- [`@remix-run/router@1.14.2`](https://github.com/remix-run/react-router/blob/main/packages/router/CHANGELOG.md#1142)

### Changes by Package

- [`create-remix`](https://github.com/remix-run/remix/blob/remix%402.5.0/packages/create-remix/CHANGELOG.md#250)
- [`@remix-run/architect`](https://github.com/remix-run/remix/blob/remix%402.5.0/packages/remix-architect/CHANGELOG.md#250)
- [`@remix-run/cloudflare`](https://github.com/remix-run/remix/blob/remix%402.5.0/packages/remix-cloudflare/CHANGELOG.md#250)
- [`@remix-run/cloudflare-pages`](https://github.com/remix-run/remix/blob/remix%402.5.0/packages/remix-cloudflare-pages/CHANGELOG.md#250)
- [`@remix-run/cloudflare-workers`](https://github.com/remix-run/remix/blob/remix%402.5.0/packages/remix-cloudflare-workers/CHANGELOG.md#250)
- [`@remix-run/css-bundle`](https://github.com/remix-run/remix/blob/remix%402.5.0/packages/remix-css-bundle/CHANGELOG.md#250)
- [`@remix-run/deno`](https://github.com/remix-run/remix/blob/remix%402.5.0/packages/remix-deno/CHANGELOG.md#250)
- [`@remix-run/dev`](https://github.com/remix-run/remix/blob/remix%402.5.0/packages/remix-dev/CHANGELOG.md#250)
- [`@remix-run/eslint-config`](https://github.com/remix-run/remix/blob/remix%402.5.0/packages/remix-eslint-config/CHANGELOG.md#250)
- [`@remix-run/express`](https://github.com/remix-run/remix/blob/remix%402.5.0/packages/remix-express/CHANGELOG.md#250)
- [`@remix-run/node`](https://github.com/remix-run/remix/blob/remix%402.5.0/packages/remix-node/CHANGELOG.md#250)
- [`@remix-run/react`](https://github.com/remix-run/remix/blob/remix%402.5.0/packages/remix-react/CHANGELOG.md#250)
- [`@remix-run/serve`](https://github.com/remix-run/remix/blob/remix%402.5.0/packages/remix-serve/CHANGELOG.md#250)
- [`@remix-run/server-runtime`](https://github.com/remix-run/remix/blob/remix%402.5.0/packages/remix-server-runtime/CHANGELOG.md#250)
- [`@remix-run/testing`](https://github.com/remix-run/remix/blob/remix%402.5.0/packages/remix-testing/CHANGELOG.md#250)

**Full Changelog**: [`v2.4.1...v2.5.0`](https://github.com/remix-run/remix/compare/remix@2.4.1...remix@2.5.0)

## v2.4.1

Date: 2023-12-22

### Patch Changes

- `@remix-run/dev`: Vite - Remove `unstable_viteServerBuildModuleId` in favor of manually referencing virtual module name `"virtual:remix/server-build"` ([#8264](https://github.com/remix-run/remix/pull/8264))

  - ⚠️ **This is a breaking change for projects using the unstable Vite plugin with a custom server**
  - This change was made to avoid issues where `@remix-run/dev` could be inadvertently required in your server's production dependencies.
  - Instead, you should manually write the virtual module name `"virtual:remix/server-build"` when calling `ssrLoadModule` in development.

    ```diff
    -import { unstable_viteServerBuildModuleId } from "@remix-run/dev";

    // ...

    app.all(
      "*",
      createRequestHandler({
        build: vite
    -      ? () => vite.ssrLoadModule(unstable_viteServerBuildModuleId)
    +      ? () => vite.ssrLoadModule("virtual:remix/server-build")
          : await import("./build/server/index.js"),
      })
    );
    ```

- `@remix-run/dev`: Vite - Add `vite:dev` and `vite:build` commands to the Remix CLI ([#8211](https://github.com/remix-run/remix/pull/8211))

  - In order to handle upcoming Remix features where your plugin options can impact the number of Vite builds required, you should now run your Vite `dev` and `build` processes via the Remix CLI.

    ```diff
    {
      "scripts": {
    -    "dev": "vite dev",
    -    "build": "vite build && vite build --ssr"
    +    "dev": "remix vite:dev",
    +    "build": "remix vite:build"
      }
    }
    ```

- `@remix-run/dev`: Vite - Error messages when `.server` files are referenced by client ([#8267](https://github.com/remix-run/remix/pull/8267))
  - Previously, referencing a `.server` module from client code resulted in an error message like:
    - `The requested module '/app/models/answer.server.ts' does not provide an export named 'isDateType'`
  - This was confusing because `answer.server.ts` _does_ provide the `isDateType` export, but Remix was replacing `.server` modules with empty modules (`export {}`) for the client build
  - Now, Remix explicitly fails at compile time when a `.server` module is referenced from client code and includes dedicated error messages depending on whether the import occurs in a route or a non-route module
  - The error messages also include links to relevant documentation
- `@remix-run/dev`: Vite - Preserve names for exports from `.client` modules ([#8200](https://github.com/remix-run/remix/pull/8200))
  - Unlike `.server` modules, the main idea is not to prevent code from leaking into the server build since the client build is already public
  - Rather, the goal is to isolate the SSR render from client-only code
  - Routes need to import code from `.client` modules without compilation failing and then rely on runtime checks or otherwise ensure that execution only happens within a client-only context (e.g. event handlers, `useEffect`)
  - Replacing `.client` modules with empty modules would cause the build to fail as ESM named imports are statically analyzed
    - So instead, we preserve the named export but replace each exported value with `undefined`
    - That way, the import is valid at build time and standard runtime checks can be used to determine if the code is running on the server or client
- `@remix-run/dev`: Vite - Disable watch mode in Vite child compiler during build ([#8342](https://github.com/remix-run/remix/pull/8342))
- `@remix-run/dev`: Vite - Show warning when source maps are enabled in production build ([#8222](https://github.com/remix-run/remix/pull/8222))
- `@remix-run/react`: Propagate server `loader` errors through `serverLoader` in hydrating `clientLoader`'s ([#8304](https://github.com/remix-run/remix/pull/8304))
- `@remix-run/react` Re-export `Response` helpers (`defer`/`json`/`redirect`/`redirectDocument`) through `@remix-run/react` for use in `clientLoader`/`clientAction` ([#8351](https://github.com/remix-run/remix/pull/8351))
- `@remix-run/server-runtime`: Add optional `error` to `ServerRuntimeMetaArgs` type to align with `MetaArgs` ([#8238](https://github.com/remix-run/remix/pull/8238))
- `create-remix`: Switch to using `@remix-run/web-fetch` instead of `node-fetch` inside the `create-remix` CLI ([#7345](https://github.com/remix-run/remix/pull/7345))
- `remix-serve`: Use node `fileURLToPath` to convert source map URL to path ([#8321](https://github.com/remix-run/remix/pull/8321))

### Updated Dependencies

- [`react-router-dom@6.21.1`](https://github.com/remix-run/react-router/releases/tag/react-router%406.21.1)
- [`@remix-run/router@1.14.1`](https://github.com/remix-run/react-router/blob/main/packages/router/CHANGELOG.md#1141)

### Changes by Package

- [`create-remix`](https://github.com/remix-run/remix/blob/remix%402.4.1/packages/create-remix/CHANGELOG.md#241)
- [`@remix-run/architect`](https://github.com/remix-run/remix/blob/remix%402.4.1/packages/remix-architect/CHANGELOG.md#241)
- [`@remix-run/cloudflare`](https://github.com/remix-run/remix/blob/remix%402.4.1/packages/remix-cloudflare/CHANGELOG.md#241)
- [`@remix-run/cloudflare-pages`](https://github.com/remix-run/remix/blob/remix%402.4.1/packages/remix-cloudflare-pages/CHANGELOG.md#241)
- [`@remix-run/cloudflare-workers`](https://github.com/remix-run/remix/blob/remix%402.4.1/packages/remix-cloudflare-workers/CHANGELOG.md#241)
- [`@remix-run/css-bundle`](https://github.com/remix-run/remix/blob/remix%402.4.1/packages/remix-css-bundle/CHANGELOG.md#241)
- [`@remix-run/deno`](https://github.com/remix-run/remix/blob/remix%402.4.1/packages/remix-deno/CHANGELOG.md#241)
- [`@remix-run/dev`](https://github.com/remix-run/remix/blob/remix%402.4.1/packages/remix-dev/CHANGELOG.md#241)
- [`@remix-run/eslint-config`](https://github.com/remix-run/remix/blob/remix%402.4.1/packages/remix-eslint-config/CHANGELOG.md#241)
- [`@remix-run/express`](https://github.com/remix-run/remix/blob/remix%402.4.1/packages/remix-express/CHANGELOG.md#241)
- [`@remix-run/node`](https://github.com/remix-run/remix/blob/remix%402.4.1/packages/remix-node/CHANGELOG.md#241)
- [`@remix-run/react`](https://github.com/remix-run/remix/blob/remix%402.4.1/packages/remix-react/CHANGELOG.md#241)
- [`@remix-run/serve`](https://github.com/remix-run/remix/blob/remix%402.4.1/packages/remix-serve/CHANGELOG.md#241)
- [`@remix-run/server-runtime`](https://github.com/remix-run/remix/blob/remix%402.4.1/packages/remix-server-runtime/CHANGELOG.md#241)
- [`@remix-run/testing`](https://github.com/remix-run/remix/blob/remix%402.4.1/packages/remix-testing/CHANGELOG.md#241)

**Full Changelog**: [`v2.4.0...v2.4.1`](https://github.com/remix-run/remix/compare/remix@2.4.0...remix@2.4.1)

## v2.4.0

Date: 2023-12-13

### What's Changed

#### Client Data

We're excited to land the [Client Data RFC](https://github.com/remix-run/remix/discussions/7634) in this release! The final API differs slightly from the RFC, so please check out the docs for use-cases and final APIs:

- [Client Data Guide](https://remix.run/guides/client-data)
- [`clientLoader`](https://remix.run/route/client-loader)
- [`HydrateFallback`](https://remix.run/route/hydrate-fallback)
- [`clientAction`](https://remix.run/route/client-action)

While we still recommend server loaders/actions for the majority of your data needs in a Remix app - these provide some levers you can pull for more advanced use-cases such as:

- **Skip the Hop:** Query a data API directly from the browser, using loaders simply for SSR
- **Fullstack State:** Augment server data with client data for your full set of loader data
- **One or the Other:** Sometimes you use server loaders, sometimes you use client loaders, but not both on one route
- **Client Cache:** Cache server loader data in the client and avoid some server calls
- **Migration:** Ease your migration from React Router -> Remix SPA -> Remix SSR

#### `future.v3_relativeSplatPath`

We introduced a `future.v3_relativeSplatPath` flag to implement a breaking bug fix to relative routing when inside a splat route. For more information, please see the React Router [`6.21.0` Release Notes](https://github.com/remix-run/react-router/blob/main/CHANGELOG.md#futurev7_relativesplatpath) and the [`useResolvedPath` docs](https://remix.run/hooks/use-resolved-path#splat-paths)

#### Vite Updates (Unstable)

Remix now excludes modules within `.server` directories from client build.

Remix now enforces strict route exports, and will will throw an error if you have unsupported exports in your route modules. Previously, the Remix compiler would allow any export from routes. While this was convenient, it was also a common source of bugs that were hard to track down because they only surfaced at runtime. For more information, please see [the docs](https://remix.run/docs/en/main/future/vite#strict-route-exports).

### Minor Changes

- Add support for `clientLoader`/`clientAction`/`HydrateFallback` route exports ([#8173](https://github.com/remix-run/remix/pull/8173))
- Add a new `future.v3_relativeSplatPath` flag to implement a breaking bug fix to relative routing when inside a splat route ([#8216](https://github.com/remix-run/remix/pull/8216))
- Deprecate `DataFunctionArgs` in favor of `LoaderFunctionArgs`/`ActionFunctionArgs` ([#8173](https://github.com/remix-run/remix/pull/8173))
  - This is aimed at keeping the types aligned across server/client loaders/actions now that `clientLoader`/`clientActon` functions have `serverLoader`/`serverAction` parameters which differentiate `ClientLoaderFunctionArgs`/`ClientActionFunctionArgs`
- Vite: Exclude modules within `.server` directories from client build ([#8154](https://github.com/remix-run/remix/pull/8154))
- Vite: Strict route exports ([#8171](https://github.com/remix-run/remix/pull/8171))

### Patch Changes

- `@remix-run/server-runtime`: Fix flash of unstyled content for non-Express custom servers in Vite dev ([#8076](https://github.com/remix-run/remix/pull/8076))
- `@remix-run/server-runtime`: Pass request handler errors to `vite.ssrFixStacktrace` in Vite dev to ensure stack traces correctly map to the original source code ([#8066](https://github.com/remix-run/remix/pull/8066))
- `remix-serve`: Fix source map loading when file has `?t=timestamp` suffix (rebuilds) ([#8174](https://github.com/remix-run/remix/pull/8174))
- `@remix-run/dev`: Change Vite build output paths to fix a conflict between how Vite and the Remix compiler each manage the `public` directory ([#8077](https://github.com/remix-run/remix/pull/8077))
  - ⚠️ **This is a breaking change for projects using the unstable Vite plugin**
  - The server is now compiled into `build/server` rather than `build`, and the client is now compiled into `build/client` rather than `public`
  - For more information on the changes and guidance on how to migrate your project, refer to the updated [Remix Vite documentation](https://remix.run/future/vite)
- `@remix-run/dev`: Upgrade Vite peer dependency range to v5 ([#8172](https://github.com/remix-run/remix/pull/8172))
- `@remix-run/dev`: Support HMR for routes with `handle` export in Vite dev ([#8022](https://github.com/remix-run/remix/pull/8022))
- `@remix-run/dev`: Fix flash of unstyled content for non-Express custom servers in Vite dev ([#8076](https://github.com/remix-run/remix/pull/8076))
- `@remix-run/dev`: Bundle CSS imported in client entry file in Vite plugin ([#8143](https://github.com/remix-run/remix/pull/8143))
- `@remix-run/dev`: Remove undocumented `legacyCssImports` option from Vite plugin due to issues with `?url` imports of CSS files not being processed correctly in Vite ([#8096](https://github.com/remix-run/remix/pull/8096))
- `@remix-run/dev`: Vite: fix access to default `entry.{client,server}.tsx` within `pnpm` workspaces on Windows ([#8057](https://github.com/remix-run/remix/pull/8057))
- `@remix-run/dev`: Remove `unstable_createViteServer` and `unstable_loadViteServerBuild` which were only minimal wrappers around Vite's `createServer` and `ssrLoadModule` functions when using a custom server ([#8120](https://github.com/remix-run/remix/pull/8120))

  - ⚠️ **This is a breaking change for projects using the unstable Vite plugin with a custom server**
  - Instead, we now provide `unstable_viteServerBuildModuleId` so that custom servers interact with Vite directly rather than via Remix APIs, for example:

    ```diff
    -import {
    -  unstable_createViteServer,
    -  unstable_loadViteServerBuild,
    -} from "@remix-run/dev";
    +import { unstable_viteServerBuildModuleId } from "@remix-run/dev";
    ```

    Creating the Vite server in middleware mode:

    ```diff
    const vite =
      process.env.NODE_ENV === "production"
        ? undefined
    -    : await unstable_createViteServer();
    +    : await import("vite").then(({ createServer }) =>
    +        createServer({
    +          server: {
    +            middlewareMode: true,
    +          },
    +        })
    +      );
    ```

    Loading the Vite server build in the request handler:

    ```diff
    app.all(
      "*",
      createRequestHandler({
        build: vite
    -      ? () => unstable_loadViteServerBuild(vite)
    +      ? () => vite.ssrLoadModule(unstable_viteServerBuildModuleId)
          : await import("./build/server/index.js"),
      })
    );
    ```

- `@remix-run/dev`: Pass request handler errors to `vite.ssrFixStacktrace` in Vite dev to ensure stack traces correctly map to the original source code ([#8066](https://github.com/remix-run/remix/pull/8066))
- `@remix-run/dev`: Vite: Preserve names for exports from `.client` imports ([#8200](https://github.com/remix-run/remix/pull/8200))
  - Unlike `.server` modules, the main idea is not to prevent code from leaking into the server build since the client build is already public
  - Rather, the goal is to isolate the SSR render from client-only code
  - Routes need to import code from `.client` modules without compilation failing and then rely on runtime checks to determine if the code is running on the server or client
  - Replacing `.client` modules with empty modules would cause the build to fail as ESM named imports are statically analyzed
    - So instead, we preserve the named export but replace each exported value with an empty object
    - That way, the import is valid at build time and the standard runtime checks can be used to determine if then code is running on the server or client
- `@remix-run/dev`: Add `@remix-run/node` to Vite's `optimizeDeps.include` array ([#8177](https://github.com/remix-run/remix/pull/8177))
- `@remix-run/dev`: Improve Vite plugin performance ([#8121](https://github.com/remix-run/remix/pull/8121))
  - Parallelize detection of route module exports
  - Disable `server.preTransformRequests` in Vite child compiler since it's only used to process route modules
- `@remix-run/dev`: Remove automatic global Node polyfill installation from the built-in Vite dev server and instead allow explicit opt-in ([#8119](https://github.com/remix-run/remix/pull/8119))

  - ⚠️ **This is a breaking change for projects using the unstable Vite plugin without a custom server**
  - If you're not using a custom server, you should call `installGlobals` in your Vite config instead.

    ```diff
    import { unstable_vitePlugin as remix } from "@remix-run/dev";
    +import { installGlobals } from "@remix-run/node";
    import { defineConfig } from "vite";

    +installGlobals();

    export default defineConfig({
      plugins: [remix()],
    });
    ```

- `@remix-run/dev`: Vite: Errors at build-time when client imports .server default export ([#8184](https://github.com/remix-run/remix/pull/8184))
  - Remix already stripped .server file code before ensuring that server code never makes it into the client
  - That results in errors when client code tries to import server code, which is exactly what we want!
  - But those errors were happening at runtime for default imports
  - A better experience is to have those errors happen at build-time so that you guarantee that your users won't hit them
- `@remix-run/dev`: Fix `request instanceof Request` checks when using Vite dev server ([#8062](https://github.com/remix-run/remix/pull/8062))

### Updated Dependencies

- [`react-router-dom@6.21.0`](https://github.com/remix-run/react-router/releases/tag/react-router%406.21.0)
- [`@remix-run/router@1.14.0`](https://github.com/remix-run/react-router/blob/main/packages/router/CHANGELOG.md#1140)
- [`@remix-run/web-fetch@4.4.2`](https://github.com/remix-run/web-std-io/releases/tag/%40remix-run%2Fweb-fetch%404.4.2)

### Changes by Package

- [`create-remix`](https://github.com/remix-run/remix/blob/remix%402.4.0/packages/create-remix/CHANGELOG.md#240)
- [`@remix-run/architect`](https://github.com/remix-run/remix/blob/remix%402.4.0/packages/remix-architect/CHANGELOG.md#240)
- [`@remix-run/cloudflare`](https://github.com/remix-run/remix/blob/remix%402.4.0/packages/remix-cloudflare/CHANGELOG.md#240)
- [`@remix-run/cloudflare-pages`](https://github.com/remix-run/remix/blob/remix%402.4.0/packages/remix-cloudflare-pages/CHANGELOG.md#240)
- [`@remix-run/cloudflare-workers`](https://github.com/remix-run/remix/blob/remix%402.4.0/packages/remix-cloudflare-workers/CHANGELOG.md#240)
- [`@remix-run/css-bundle`](https://github.com/remix-run/remix/blob/remix%402.4.0/packages/remix-css-bundle/CHANGELOG.md#240)
- [`@remix-run/deno`](https://github.com/remix-run/remix/blob/remix%402.4.0/packages/remix-deno/CHANGELOG.md#240)
- [`@remix-run/dev`](https://github.com/remix-run/remix/blob/remix%402.4.0/packages/remix-dev/CHANGELOG.md#240)
- [`@remix-run/eslint-config`](https://github.com/remix-run/remix/blob/remix%402.4.0/packages/remix-eslint-config/CHANGELOG.md#240)
- [`@remix-run/express`](https://github.com/remix-run/remix/blob/remix%402.4.0/packages/remix-express/CHANGELOG.md#240)
- [`@remix-run/node`](https://github.com/remix-run/remix/blob/remix%402.4.0/packages/remix-node/CHANGELOG.md#240)
- [`@remix-run/react`](https://github.com/remix-run/remix/blob/remix%402.4.0/packages/remix-react/CHANGELOG.md#240)
- [`@remix-run/serve`](https://github.com/remix-run/remix/blob/remix%402.4.0/packages/remix-serve/CHANGELOG.md#240)
- [`@remix-run/server-runtime`](https://github.com/remix-run/remix/blob/remix%402.4.0/packages/remix-server-runtime/CHANGELOG.md#240)
- [`@remix-run/testing`](https://github.com/remix-run/remix/blob/remix%402.4.0/packages/remix-testing/CHANGELOG.md#240)

**Full Changelog**: [`v2.3.1...v2.4.0`](https://github.com/remix-run/remix/compare/remix@2.3.1...remix@2.4.0)

## v2.3.1

Date: 2023-11-22

### Patch Changes

- `@remix-run/dev`: Support `nonce` prop on `LiveReload` component in Vite dev ([#8014](https://github.com/remix-run/remix/pull/8014))
- `@remix-run/dev`: Ensure code-split JS files in the server build's assets directory aren't cleaned up after Vite build ([#8042](https://github.com/remix-run/remix/pull/8042))
- `@remix-run/dev`: Fix redundant copying of assets from `public` directory in Vite build ([#8039](https://github.com/remix-run/remix/pull/8039))
  - This ensures that static assets aren't duplicated in the server build directory
  - This also fixes an issue where the build would break if `assetsBuildDirectory` was deeply nested within the `public` directory

### Updated Dependencies

- [`react-router-dom@6.20.0`](https://github.com/remix-run/react-router/releases/tag/react-router%406.20.0)
- [`@remix-run/router@1.13.0`](https://github.com/remix-run/react-router/blob/main/packages/router/CHANGELOG.md#1130)

### Changes by Package

- [`create-remix`](https://github.com/remix-run/remix/blob/remix%402.3.1/packages/create-remix/CHANGELOG.md#231)
- [`@remix-run/architect`](https://github.com/remix-run/remix/blob/remix%402.3.1/packages/remix-architect/CHANGELOG.md#231)
- [`@remix-run/cloudflare`](https://github.com/remix-run/remix/blob/remix%402.3.1/packages/remix-cloudflare/CHANGELOG.md#231)
- [`@remix-run/cloudflare-pages`](https://github.com/remix-run/remix/blob/remix%402.3.1/packages/remix-cloudflare-pages/CHANGELOG.md#231)
- [`@remix-run/cloudflare-workers`](https://github.com/remix-run/remix/blob/remix%402.3.1/packages/remix-cloudflare-workers/CHANGELOG.md#231)
- [`@remix-run/css-bundle`](https://github.com/remix-run/remix/blob/remix%402.3.1/packages/remix-css-bundle/CHANGELOG.md#231)
- [`@remix-run/deno`](https://github.com/remix-run/remix/blob/remix%402.3.1/packages/remix-deno/CHANGELOG.md#231)
- [`@remix-run/dev`](https://github.com/remix-run/remix/blob/remix%402.3.1/packages/remix-dev/CHANGELOG.md#231)
- [`@remix-run/eslint-config`](https://github.com/remix-run/remix/blob/remix%402.3.1/packages/remix-eslint-config/CHANGELOG.md#231)
- [`@remix-run/express`](https://github.com/remix-run/remix/blob/remix%402.3.1/packages/remix-express/CHANGELOG.md#231)
- [`@remix-run/node`](https://github.com/remix-run/remix/blob/remix%402.3.1/packages/remix-node/CHANGELOG.md#231)
- [`@remix-run/react`](https://github.com/remix-run/remix/blob/remix%402.3.1/packages/remix-react/CHANGELOG.md#231)
- [`@remix-run/serve`](https://github.com/remix-run/remix/blob/remix%402.3.1/packages/remix-serve/CHANGELOG.md#231)
- [`@remix-run/server-runtime`](https://github.com/remix-run/remix/blob/remix%402.3.1/packages/remix-server-runtime/CHANGELOG.md#231)
- [`@remix-run/testing`](https://github.com/remix-run/remix/blob/remix%402.3.1/packages/remix-testing/CHANGELOG.md#231)

**Full Changelog**: [`v2.3.0...v2.3.1`](https://github.com/remix-run/remix/compare/remix@2.3.0...remix@2.3.1)

## v2.3.0

Date: 2023-11-16

### What's Changed

#### Stabilized `useBlocker`

We've removed the `unstable_` prefix from the [`useBlocker`](https://remix.run/hooks/use-blocker) hook as it's been in use for enough time that we are confident in the API. We do not plan to remove the prefix from [`unstable_usePrompt`](https://remix.run/hooks/use-prompt) due to differences in how browsers handle `window.confirm` that prevent React Router from guaranteeing consistent/correct behavior.

#### `unstable_flushSync` API

We've added a new `unstable_flushSync` option to the imperative APIs (`useSubmit`, `useNavigate`, `fetcher.submit`, `fetcher.load`) to let users opt-into synchronous DOM updates for pending/optimistic UI.

```js
function handleClick() {
  submit(data, { flushSync: true });
  // Everything is flushed to the DOM so you can focus/scroll to your pending/optimistic UI
  setFocusAndOrScrollToNewlyAddedThing();
}
```

### Minor Changes

- Remove the `unstable_` prefix from the [`useBlocker`](https://reactrouter.com/en/main/hooks/use-blocker) hook ([#7882](https://github.com/remix-run/remix/pull/7882))
- Add `unstable_flushSync` option to `useNavigate`/`useSubmit`/`fetcher.load`/`fetcher.submit` to opt-out of `React.startTransition` and into `ReactDOM.flushSync` for state updates ([#7996](https://github.com/remix-run/remix/pull/7996))

### Patch Changes

- `@remix-run/react`: Add missing `modulepreload` for the manifest ([#7684](https://github.com/remix-run/remix/pull/7684))
- `@remix-run/server-runtime`: Updated `cookie` dependency from `0.4.1` to [`0.5.0`](https://github.com/jshttp/cookie/blob/v0.5.0/HISTORY.md#050--2022-04-11) to inherit support for `Priority` attribute in Chrome ([#6770](https://github.com/remix-run/remix/pull/6770))
- `@remix-run/dev`: Fix `FutureConfig` type ([#7895](https://github.com/remix-run/remix/pull/7895))
- _Lots_ of small fixes for the unstable `vite` compiler:
  - Support optional rendering of the `LiveReload` component in Vite dev ([#7919](https://github.com/remix-run/remix/pull/7919))
  - Support rendering of the `LiveReload` component after `Scripts` in Vite dev ([#7919](https://github.com/remix-run/remix/pull/7919))
  - Fix `react-refresh/babel` resolution for custom server with `pnpm` ([#7904](https://github.com/remix-run/remix/pull/7904))
  - Support JSX usage in `.jsx` files without manual `React` import in Vite ([#7888](https://github.com/remix-run/remix/pull/7888))
  - Fix Vite production builds when plugins that have different local state between `development` and `production` modes are present (e.g. `@mdx-js/rollup`) ([#7911](https://github.com/remix-run/remix/pull/7911))
  - Cache resolution of Remix Vite plugin options ([#7908](https://github.com/remix-run/remix/pull/7908))
  - Support Vite 5 ([#7846](https://github.com/remix-run/remix/pull/7846))
  - Allow `process.env.NODE_ENV` values other than `"development"` in Vite dev ([#7980](https://github.com/remix-run/remix/pull/7980))
  - Attach CSS from shared chunks to routes in Vite build ([#7952](https://github.com/remix-run/remix/pull/7952))
  - Let Vite handle serving files outside of project root via `/@fs` ([#7913](https://github.com/remix-run/remix/pull/7913))
    - This fixes errors when using default client entry or server entry in a pnpm project where those files may be outside of the project root, but within the workspace root
    - By default, Vite prevents access to files outside the workspace root (when using workspaces) or outside of the project root (when not using workspaces) unless user explicitly opts into it via Vite's `server.fs.allow`
  - Improve performance of LiveReload proxy in Vite dev ([#7883](https://github.com/remix-run/remix/pull/7883))
  - Deduplicate `@remix-run/react` ([#7926](https://github.com/remix-run/remix/pull/7926))
    - Pre-bundle Remix dependencies to avoid Remix router duplicates
    - Our `remix-react-proxy` plugin does not process default client and server entry files since those come from within `node_modules`
    - That means that before Vite pre-bundles dependencies (e.g. first time dev server is run) mismatching Remix routers cause `Error: You must render this element inside a <Remix> element`
  - Fix React Fast Refresh error on load when using `defer` in Vite dev server ([#7842](https://github.com/remix-run/remix/pull/7842))
  - Handle multiple `Set-Cookie` headers in Vite dev server ([#7843](https://github.com/remix-run/remix/pull/7843))
  - Fix flash of unstyled content on initial page load in Vite dev when using a custom Express server ([#7937](https://github.com/remix-run/remix/pull/7937))
  - Populate `process.env` from `.env` files on the server in Vite dev ([#7958](https://github.com/remix-run/remix/pull/7958))
  - Emit assets that were only referenced in the server build into the client assets directory in Vite build ([#7892](https://github.com/remix-run/remix/pull/7892), cherry-picked in [`8cd31d65`](https://github.com/remix-run/remix/commit/8cd31d6543ef4c765220fc64dca9bcc9c61ee9eb))

### Updated Dependencies

- [`react-router-dom@6.19.0`](https://github.com/remix-run/react-router/releases/tag/react-router%406.19.0)
- [`@remix-run/router@1.12.0`](https://github.com/remix-run/react-router/blob/main/packages/router/CHANGELOG.md#1120)

### Changes by Package

- [`create-remix`](https://github.com/remix-run/remix/blob/remix%402.3.0/packages/create-remix/CHANGELOG.md#230)
- [`@remix-run/architect`](https://github.com/remix-run/remix/blob/remix%402.3.0/packages/remix-architect/CHANGELOG.md#230)
- [`@remix-run/cloudflare`](https://github.com/remix-run/remix/blob/remix%402.3.0/packages/remix-cloudflare/CHANGELOG.md#230)
- [`@remix-run/cloudflare-pages`](https://github.com/remix-run/remix/blob/remix%402.3.0/packages/remix-cloudflare-pages/CHANGELOG.md#230)
- [`@remix-run/cloudflare-workers`](https://github.com/remix-run/remix/blob/remix%402.3.0/packages/remix-cloudflare-workers/CHANGELOG.md#230)
- [`@remix-run/css-bundle`](https://github.com/remix-run/remix/blob/remix%402.3.0/packages/remix-css-bundle/CHANGELOG.md#230)
- [`@remix-run/deno`](https://github.com/remix-run/remix/blob/remix%402.3.0/packages/remix-deno/CHANGELOG.md#230)
- [`@remix-run/dev`](https://github.com/remix-run/remix/blob/remix%402.3.0/packages/remix-dev/CHANGELOG.md#230)
- [`@remix-run/eslint-config`](https://github.com/remix-run/remix/blob/remix%402.3.0/packages/remix-eslint-config/CHANGELOG.md#230)
- [`@remix-run/express`](https://github.com/remix-run/remix/blob/remix%402.3.0/packages/remix-express/CHANGELOG.md#230)
- [`@remix-run/node`](https://github.com/remix-run/remix/blob/remix%402.3.0/packages/remix-node/CHANGELOG.md#230)
- [`@remix-run/react`](https://github.com/remix-run/remix/blob/remix%402.3.0/packages/remix-react/CHANGELOG.md#230)
- [`@remix-run/serve`](https://github.com/remix-run/remix/blob/remix%402.3.0/packages/remix-serve/CHANGELOG.md#230)
- [`@remix-run/server-runtime`](https://github.com/remix-run/remix/blob/remix%402.3.0/packages/remix-server-runtime/CHANGELOG.md#230)
- [`@remix-run/testing`](https://github.com/remix-run/remix/blob/remix%402.3.0/packages/remix-testing/CHANGELOG.md#230)

**Full Changelog**: [`v2.2.0...v2.3.0`](https://github.com/remix-run/remix/compare/remix@2.2.0...remix@2.3.0)

## v2.2.0

Date: 2023-10-31

### What's Changed

#### Vite!

Remix `2.2.0` adds unstable support for Vite for Node-based apps! See our [announcement blog post](https://remix.run/blog/remix-heart-vite) and the [_Future > Vite_ page in the Remix docs](https://remix.run/docs/en/2.2.0/future/vite) for more details.

You can try it out today with two new (unstable) templates:

```shellscript
# minimal server
npx create-remix@latest --template remix-run/remix/templates/unstable-vite

# custom server (Express example)
npx create-remix@latest --template remix-run/remix/templates/unstable-vite-express
```

- **New APIs in `@remix-run/dev`**
  - `unstable_vitePlugin`: The new Remix Vite plugin
  - `unstable_createViteServer`: Creates a Vite server in middleware mode for interop with custom servers
  - `unstable_loadViteServerBuild`: Allows your custom server to delegate SSR requests to Vite during development
- **Changed APIs**
  - `createRequestHandler`: Now also allows the `build` argument to be a function that will be used to dynamically load new builds for each request during development
- **Other Runtimes**
  - Deno support is untested, but should work through Deno's Node/`npm` interop
  - CloudFlare support is not yet available

#### New Fetcher APIs

Per this [RFC](https://github.com/remix-run/remix/discussions/7698), we've introduced some new APIs that give you more granular control over your fetcher behaviors:

- You may now specify your own fetcher identifier via `useFetcher({ key: string })`, which allows you to access the same fetcher instance from different components in your application without prop-drilling
- Fetcher keys are now exposed on the fetchers returned from `useFetchers` so that they can be looked up by `key`
- `Form` and `useSubmit` now support optional `navigate`/`fetcherKey` props/params to allow kicking off a fetcher submission under the hood with an optionally user-specified `key`
  - `<Form method="post" navigate={false} fetcherKey="my-key">`
  - `submit(data, { method: "post", navigate: false, fetcherKey: "my-key" })`
  - Invoking a fetcher in this way is ephemeral and stateless
  - If you need to access the state of one of these fetchers, you will need to leverage `useFetchers()` or `useFetcher({ key })` to look it up elsewhere

#### Persistence Future Flag

Per the same [RFC](https://github.com/remix-run/remix/discussions/7698) as above, we've introduced a new `future.v3_fetcherPersist` flag that allows you to opt-into the new fetcher persistence/cleanup behavior. Instead of being immediately cleaned up on unmount, fetchers will persist until they return to an `idle` state. This makes pending/optimistic UI _much_ easier in scenarios where the originating fetcher needs to unmount.

- This is sort of a long-standing bug fix as the `useFetchers()` API was always supposed to only reflect **in-flight** fetcher information for pending/optimistic UI -- it was not intended to reflect fetcher data or hang onto fetchers after they returned to an `idle` state
- Keep an eye out for the following specific behavioral changes when opting into this flag and check your app for compatibility:
  - Fetchers that complete _while still mounted_ will no longer appear in `useFetchers()` after completion - they served no purpose in there since you can access the data via `useFetcher().data`
  - Fetchers that previously unmounted _while in-flight_ will not be immediately aborted and will instead be cleaned up once they return to an `idle` state
    - They will remain exposed via `useFetchers` while in-flight so you can still access pending/optimistic data after unmount
    - If a fetcher is no longer mounted when it completes, then it's result will not be post processed - e.g., redirects will not be followed and errors will not bubble up in the UI
    - However, if a fetcher was re-mounted elsewhere in the tree using the same `key`, then it's result will be processed, even if the originating fetcher was unmounted

### Minor Changes

- Unstable `vite` support ([#7590](https://github.com/remix-run/remix/pull/7590))
- New fetcher `key` APIs and `navigate`/`fetcherKey` params for navigational APIs ([#10960](https://github.com/remix-run/react-router/pull/10960))
- New `future.v3_fetcherPersist` flag ([#10962](https://github.com/remix-run/react-router/pull/10962))

### Patch Changes

- `@remix-run/express`: Allow the Express adapter to work behind a proxy when using `app.enable('trust proxy')` ([#7323](https://github.com/remix-run/remix/pull/7323))
  - Previously, this used `req.get('host')` to construct the Remix `Request`, but that does not respect `X-Forwarded-Host`
  - This now uses `req.hostname` which will respect `X-Forwarded-Host`
- `@remix-run/react`: Fix warning that could be inadvertently logged when using route files with no `default` export ([#7745](https://github.com/remix-run/remix/pull/7745))
- `create-remix`: Support local tarballs with a `.tgz` extension which allows direct support for [`pnpm pack` tarballs](https://pnpm.io/cli/pack) ([#7649](https://github.com/remix-run/remix/pull/7649))
- `create-remix`: Default the Remix app version to the version of `create-remix` being used ([#7670](https://github.com/remix-run/remix/pull/7670))
  - This most notably enables easier usage of tags, e.g. `npm create remix@nightly`

### Updated Dependencies

- [`react-router-dom@6.18.0`](https://github.com/remix-run/react-router/releases/tag/react-router%406.18.0)
- [`@remix-run/router@1.11.0`](https://github.com/remix-run/react-router/blob/main/packages/router/CHANGELOG.md#1110)

### Changes by Package

- [`create-remix`](https://github.com/remix-run/remix/blob/remix%402.2.0/packages/create-remix/CHANGELOG.md#220)
- [`@remix-run/architect`](https://github.com/remix-run/remix/blob/remix%402.2.0/packages/remix-architect/CHANGELOG.md#220)
- [`@remix-run/cloudflare`](https://github.com/remix-run/remix/blob/remix%402.2.0/packages/remix-cloudflare/CHANGELOG.md#220)
- [`@remix-run/cloudflare-pages`](https://github.com/remix-run/remix/blob/remix%402.2.0/packages/remix-cloudflare-pages/CHANGELOG.md#220)
- [`@remix-run/cloudflare-workers`](https://github.com/remix-run/remix/blob/remix%402.2.0/packages/remix-cloudflare-workers/CHANGELOG.md#220)
- [`@remix-run/css-bundle`](https://github.com/remix-run/remix/blob/remix%402.2.0/packages/remix-css-bundle/CHANGELOG.md#220)
- [`@remix-run/deno`](https://github.com/remix-run/remix/blob/remix%402.2.0/packages/remix-deno/CHANGELOG.md#220)
- [`@remix-run/dev`](https://github.com/remix-run/remix/blob/remix%402.2.0/packages/remix-dev/CHANGELOG.md#220)
- [`@remix-run/eslint-config`](https://github.com/remix-run/remix/blob/remix%402.2.0/packages/remix-eslint-config/CHANGELOG.md#220)
- [`@remix-run/express`](https://github.com/remix-run/remix/blob/remix%402.2.0/packages/remix-express/CHANGELOG.md#220)
- [`@remix-run/node`](https://github.com/remix-run/remix/blob/remix%402.2.0/packages/remix-node/CHANGELOG.md#220)
- [`@remix-run/react`](https://github.com/remix-run/remix/blob/remix%402.2.0/packages/remix-react/CHANGELOG.md#220)
- [`@remix-run/serve`](https://github.com/remix-run/remix/blob/remix%402.2.0/packages/remix-serve/CHANGELOG.md#220)
- [`@remix-run/server-runtime`](https://github.com/remix-run/remix/blob/remix%402.2.0/packages/remix-server-runtime/CHANGELOG.md#220)
- [`@remix-run/testing`](https://github.com/remix-run/remix/blob/remix%402.2.0/packages/remix-testing/CHANGELOG.md#220)

**Full Changelog**: [`v2.1.0...v2.2.0`](https://github.com/remix-run/remix/compare/remix@2.1.0...remix@2.2.0)

## v2.1.0

Date: 2023-10-16

### What's Changed

#### View Transitions

We're excited to release experimental support for the the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition) in Remix! You can now trigger navigational DOM updates to be wrapped in `document.startViewTransition` to enable CSS animated transitions on SPA navigations in your application.

The simplest approach to enabling a View Transition in your Remix app is via the new [`<Link unstable_viewTransition>`](https://remix.run/docs/components/link#unstable_viewtransition) prop. This will cause the navigation DOM update to be wrapped in `document.startViewTransition` which will enable transitions for the DOM update. Without any additional CSS styles, you'll get a basic cross-fade animation for your page.

If you need to apply more fine-grained styles for your animations, you can leverage the [`unstable_useViewTransitionState`](https://remix.run/docs/hooks/use-view-transition-state) hook which will tell you when a transition is in progress and you can use that to apply classes or styles:

```jsx
function ImageLink(to, src, alt) {
  const isTransitioning = unstable_useViewTransitionState(to);
  return (
    <Link to={to} unstable_viewTransition>
      <img
        src={src}
        alt={alt}
        style={{
          viewTransitionName: isTransitioning ? "image-expand" : "",
        }}
      />
    </Link>
  );
}
```

You can also use the [`<NavLink unstable_viewTransition>`](https://remix.run/docs/components/nav-link#unstable_viewtransition) shorthand which will manage the hook usage for you and automatically add a `transitioning` class to the `<a>` during the transition:

```css
a.transitioning img {
  view-transition-name: "image-expand";
}
```

```jsx
<NavLink to={to} unstable_viewTransition>
  <img src={src} alt={alt} />
</NavLink>
```

For an example usage of View Transitions, check out [our fork](https://github.com/brophdawg11/react-router-records) of the [Astro Records](https://github.com/Charca/astro-records) demo (which uses React Router but so does Remix 😉).

For more information on using the View Transitions API, please refer to the [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) guide from the Google Chrome team.

#### Stable `createRemixStub`

After real-world experience, we're confident in the [`createRemixStub`](https://remix.run/docs/utils/create-remix-stub) API and ready to commit to it, so in `2.1.0` we've removed the `unstable_` prefix.

⚠️ Please note that this did involve 1 _small_ breaking change - the `<RemixStub remixConfigFuture>` prop has been renamed to `<RemixStub future>` to decouple the `future` prop from a specific file location.

### Minor Changes

- Added unstable support for the View Transition API ([#10916](https://github.com/remix-run/react-router/pull/10916))
- Stabilized the `@remix-run/testing` `createRemixStub` helper ([#7647](https://github.com/remix-run/remix/pull/7647))

### Patch Changes

- Emulate types for `JSON.parse(JSON.stringify(x))` in `SerializeFrom` ([#7605](https://github.com/remix-run/remix/pull/7605))
  - Notably, type fields that are only assignable to `undefined` after serialization are now omitted since `JSON.stringify |> JSON.parse` will omit them. See test cases for examples
  - This fixes type errors when upgrading to v2 from 1.19
- Avoid mutating `meta` object when `tagName` is specified ([#7594](https://github.com/remix-run/remix/pull/7594))
- Fix FOUC on subsequent client-side navigations to `route.lazy` routes ([#7576](https://github.com/remix-run/remix/pull/7576))
- Export the proper Remix `useMatches` wrapper to fix `UIMatch` typings ([#7551](https://github.com/remix-run/remix/pull/7551))
- `@remix-run/cloudflare` - sourcemap takes into account special chars in output file ([#7574](https://github.com/remix-run/remix/pull/7574))
- `@remix-run/express` - Flush headers for `text/event-stream` responses ([#7619](https://github.com/remix-run/remix/pull/7619))

### Updated Dependencies

- [`react-router-dom@6.17.0`](https://github.com/remix-run/react-router/releases/tag/react-router%406.17.0)
- [`@remix-run/router@1.10.0`](https://github.com/remix-run/react-router/blob/main/packages/router/CHANGELOG.md#1100)

### Changes by Package

- [`create-remix`](https://github.com/remix-run/remix/blob/remix%402.1.0/packages/create-remix/CHANGELOG.md#210)
- [`@remix-run/architect`](https://github.com/remix-run/remix/blob/remix%402.1.0/packages/remix-architect/CHANGELOG.md#210)
- [`@remix-run/cloudflare`](https://github.com/remix-run/remix/blob/remix%402.1.0/packages/remix-cloudflare/CHANGELOG.md#210)
- [`@remix-run/cloudflare-pages`](https://github.com/remix-run/remix/blob/remix%402.1.0/packages/remix-cloudflare-pages/CHANGELOG.md#210)
- [`@remix-run/cloudflare-workers`](https://github.com/remix-run/remix/blob/remix%402.1.0/packages/remix-cloudflare-workers/CHANGELOG.md#210)
- [`@remix-run/css-bundle`](https://github.com/remix-run/remix/blob/remix%402.1.0/packages/remix-css-bundle/CHANGELOG.md#210)
- [`@remix-run/deno`](https://github.com/remix-run/remix/blob/remix%402.1.0/packages/remix-deno/CHANGELOG.md#210)
- [`@remix-run/dev`](https://github.com/remix-run/remix/blob/remix%402.1.0/packages/remix-dev/CHANGELOG.md#210)
- [`@remix-run/eslint-config`](https://github.com/remix-run/remix/blob/remix%402.1.0/packages/remix-eslint-config/CHANGELOG.md#210)
- [`@remix-run/express`](https://github.com/remix-run/remix/blob/remix%402.1.0/packages/remix-express/CHANGELOG.md#210)
- [`@remix-run/node`](https://github.com/remix-run/remix/blob/remix%402.1.0/packages/remix-node/CHANGELOG.md#210)
- [`@remix-run/react`](https://github.com/remix-run/remix/blob/remix%402.1.0/packages/remix-react/CHANGELOG.md#210)
- [`@remix-run/serve`](https://github.com/remix-run/remix/blob/remix%402.1.0/packages/remix-serve/CHANGELOG.md#210)
- [`@remix-run/server-runtime`](https://github.com/remix-run/remix/blob/remix%402.1.0/packages/remix-server-runtime/CHANGELOG.md#210)
- [`@remix-run/testing`](https://github.com/remix-run/remix/blob/remix%402.1.0/packages/remix-testing/CHANGELOG.md#210)

**Full Changelog**: [`v2.0.1...v2.1.0`](https://github.com/remix-run/remix/compare/remix@2.0.1...remix@2.1.0)

## v2.0.1

Date: 2023-09-21

### Patch Changes

- Fix types for MDX files when using pnpm ([#7491](https://github.com/remix-run/remix/pull/7491))
- Update `getDependenciesToBundle` to handle ESM packages without main exports ([#7272](https://github.com/remix-run/remix/pull/7272))
  - Note that these packages must expose `package.json` in their `exports` field so that their path can be resolved
- Fix server builds where `serverBuildPath` extension is `.cjs` ([#7180](https://github.com/remix-run/remix/pull/7180))
- Fix HMR for CJS projects using `remix-serve` and manual mode (`remix dev --manual`) ([#7487](https://github.com/remix-run/remix/pull/7487))
  - By explicitly busting the `require` cache, `remix-serve` now correctly re-imports new server changes in CJS
  - ESM projects were already working correctly and are not affected by this.
- Fix error caused by partially written server build ([#7470](https://github.com/remix-run/remix/pull/7470))
  - Previously, it was possible to trigger a reimport of the app server code before the new server build had completely been written. Reimporting the partially written server build caused issues related to `build.assets` being undefined and crashing when reading `build.assets.version`
- Add second generic to `UIMatch` for `handle` field ([#7464](https://github.com/remix-run/remix/pull/7464))
- Fix resource routes being loaded through `route.lazy` ([#7498](https://github.com/remix-run/remix/pull/7498))
- Throw a semantically correct 405 `ErrorResponse` instead of just an `Error` when submitting to a route without an `action` ([#7423](https://github.com/remix-run/remix/pull/7423))
- Update to latest version of `@remix-run/web-fetch` ([#7477](https://github.com/remix-run/remix/pull/7477))
- Switch from `crypto.randomBytes` to `crypto.webcrypto.getRandomValues` for file session storage ID generation ([#7203](https://github.com/remix-run/remix/pull/7203))
- Use native `Blob` class instead of polyfill ([#7217](https://github.com/remix-run/remix/pull/7217))

### Changes by Package 🔗

- [`@remix-run/dev`](https://github.com/remix-run/remix/blob/remix%402.0.1/packages/remix-dev/CHANGELOG.md#201)
- [`@remix-run/node`](https://github.com/remix-run/remix/blob/remix%402.0.1/packages/remix-node/CHANGELOG.md#201)
- [`@remix-run/react`](https://github.com/remix-run/remix/blob/remix%402.0.1/packages/remix-react/CHANGELOG.md#201)
- [`@remix-run/serve`](https://github.com/remix-run/remix/blob/remix%402.0.1/packages/remix-serve/CHANGELOG.md#201)

**Full Changelog**: [`v2.0.0...v2.0.1`](https://github.com/remix-run/remix/compare/remix@2.0.0...remix@2.0.1)

## v2.0.0

Date: 2023-09-15

We're _**so**_ excited to release Remix v2 to you and we really hope this upgrade is one of the smoothest framework upgrades you've ever experienced! That was our primary goal with v2 - something we aimed to achieve through a heavy use of deprecation warnings and [Future Flags](https://remix.run/blog/future-flags) in Remix v1.

If you are on the latest `1.x` version and you've enabled all future flags and addressed all console warnings, then our hope is that you are 90% of the way to being upgraded for v2. There are always going to be a few things that we _can't_ put behind a flag (like breaking type changes) or come up at the very last moment and don't have time to add as a warning or flag in `1.x`.

If you're _not_ yet on the latest 1.x version we'd recommend first upgrading to that and resolving any flag/console warnings:

```sh
> npx upgrade-remix 1.19.3
```

### Breaking Changes

Below is a _very concise_ list of the breaking changes in v2.

- For the most thorough discussion of breaking changes, please read the [**Upgrading to v2**](https://remix.run/docs/en/main/start/v2) guide. This document provides a comprehensive walkthrough of the breaking changes that come along with v2 - and instructions on how to adapt your application to handle them
- For additional details, you can refer to the [Changes by Package](#changes-by-package) section below

#### Upgraded Dependency Requirements

Remix v2 has upgraded it's minimum version support for React and Node and now officially requires:

- React 18 ([#7121](https://github.com/remix-run/remix/pull/7121))
  - For information on upgrading to React 18, please see the React [upgrade guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide)
- Node 18 or later ([#6939](https://github.com/remix-run/remix/pull/6939), [#7292](https://github.com/remix-run/remix/pull/7292))
  - For information on upgrading to Node 18, please see the Node [v18 announcement](https://nodejs.org/en/blog/announcements/v18-release-announce)
  - Please refer to the [Remix documentation](https://remix.run/docs/en/main/other-api/node#version-support) for an overview of when we drop support for Node versions

#### Removed Future Flags

The following future flags were removed and their behavior is now the default - you can remove all of these from your `remix.config.js` file.

- [`v2_dev`](https://remix.run/docs/en/main/start/v2#remix-dev) - New dev server with HMR+HDR ([#7002](https://github.com/remix-run/remix/pull/7002))
  - If you had configurations in `future.v2_dev` instead of just the boolean value (i.e., `future.v2_dev.port`), you can lift them into a root `dev` object in your `remix.config.js`
- [`v2_errorBoundary`](https://remix.run/docs/en/main/start/v2#catchboundary-and-errorboundary) - Removed `CatchBoundary` in favor of a singular `ErrorBoundary` ([#6906](https://github.com/remix-run/remix/pull/6906))
- [`v2_headers`](https://remix.run/docs/en/main/start/v2#route-headers) - Altered the logic for `headers` in nested route scenarios ([#6979](https://github.com/remix-run/remix/pull/6979))
- [`v2_meta`](https://remix.run/docs/en/main/start/v2#route-meta) - Altered the return format of `meta()` ([#6958](https://github.com/remix-run/remix/pull/6958))
- [`v2_normalizeFormMethod`](https://remix.run/docs/en/main/start/v2#formmethod) - Normalize `formMethod` APIs to uppercase ([#6875](https://github.com/remix-run/remix/pull/6875))
- [`v2_routeConvention`](https://remix.run/docs/en/main/start/v2#file-system-route-convention) - Routes use a flat route convention by default now ([#6969](https://github.com/remix-run/remix/pull/6969))

#### Breaking Changes/API Removals

##### With deprecation warnings

The following lists other breaking changes/API removals which had deprecation warnings in Remix v1. If you're on the latest `1.19.3` release without any console warnings, then you're probably good to go on all of these!

- `remix.config.js`
  - Renamed [`browserBuildDirectory`](https://remix.run/docs/en/main/start/v2#browserbuilddirectory) to `assetsBuildDirectory` ([#6900](https://github.com/remix-run/remix/pull/6900))
  - Removed [`devServerBroadcastDelay`](https://remix.run/docs/en/main/start/v2#devserverbroadcastdelay) ([#7063](https://github.com/remix-run/remix/pull/7063))
  - Renamed [`devServerPort`](https://remix.run/docs/en/main/start/v2#devserverport) to `dev.port` ([`000457e0`](https://github.com/remix-run/remix/commit/000457e0ae025d9b94e721af254c319e83438923))
    - Note that if you are opting into this in a `1.x` release, your config flag will be `future.v2_dev.port`, but on a stable `2.x` release it will be `dev.port`
  - Changed the default [`serverModuleFormat`](https://remix.run/docs/en/main/start/v2#servermoduleformat) from `cjs` to `esm` ([#6949](https://github.com/remix-run/remix/pull/6949))
  - Removed [`serverBuildTarget`](https://remix.run/docs/en/main/start/v2#serverbuildtarget) ([#6896](https://github.com/remix-run/remix/pull/6896))
  - Changed [`serverBuildDirectory`](https://remix.run/docs/en/main/start/v2#serverbuilddirectory) to `serverBuildPath` ([#6897](https://github.com/remix-run/remix/pull/6897))
  - Node built-ins are no longer polyfilled on the server by default, you must opt-into polyfills via [`serverNodeBuiltinsPolyfill`](https://remix.run/docs/en/main/start/v2#servernodebuiltinspolyfill) ([#6911](https://github.com/remix-run/remix/pull/6911)
- `@remix-run/react`
  - Removed [`useTransition`](https://remix.run/docs/en/main/start/v2#usetransition) ([#6870](https://github.com/remix-run/remix/pull/6870))
  - Removed [`fetcher.type`](https://remix.run/docs/en/main/start/v2#usefetcher) and flattened [`fetcher.submission`](https://remix.run/docs/en/main/start/v2#usefetcher) ([#6874](https://github.com/remix-run/remix/pull/6874))
    - `<fetcher.Form method="get">` is now more accurately categorized as `state:"loading"` instead of `state:"submitting"` to better align with the underlying GET request
  - Require camelCased versions of [`imagesrcset`/`imagesizes`](https://remix.run/docs/en/main/start/v2#links-imagesizes-and-imagesrcset) ([#6936](https://github.com/remix-run/remix/pull/6936))

##### Without deprecation warnings

Unfortunately, we didn't manage to get a deprecation warning on _every_ breaking change or API removal 🙃. Here's a list of remaining changes that you may need to look into to upgrade to v2:

- `remix.config.js`
  - Node built-ins are no longer polyfilled in the browser by default, you must opt-into polyfills via [`browserNodeBuiltinsPolyfill`](https://remix.run/docs/en/main/start/v2#browsernodebuiltinspolyfill) ([#7269](https://github.com/remix-run/remix/pull/7269))
  - PostCSS/Tailwind will be enabled by default if config files exist in your app, you may disable this via the [`postcss` and `tailwind`](https://remix.run/docs/en/main/start/v2#built-in-postcsstailwind-support) flags ([#6909](https://github.com/remix-run/remix/pull/6909))
- `@remix-run/cloudflare`
  - Remove `createCloudflareKVSessionStorage` ([#6898](https://github.com/remix-run/remix/pull/6898))
  - Drop `@cloudflare/workers-types` v2 & v3 support ([#6925](https://github.com/remix-run/remix/pull/6925))
- `@remix-run/dev`
  - Removed `REMIX_DEV_HTTP_ORIGIN` in favor of `REMIX_DEV_ORIGIN` ([#6963](https://github.com/remix-run/remix/pull/6963))
  - Removed `REMIX_DEV_SERVER_WS_PORT` in favor of `dev.port` or `--port` ([#6965](https://github.com/remix-run/remix/pull/6965))
  - Removed `--no-restart`/`restart` flag in favor of `--manual`/`manual` ([#6962](https://github.com/remix-run/remix/pull/6962))
  - Removed `--scheme`/`scheme` and `--host`/`host` in favor of `REMIX_DEV_ORIGIN` instead ([#6962](https://github.com/remix-run/remix/pull/6962))
  - Removed the `codemod` command ([#6918](https://github.com/remix-run/remix/pull/6918))
- `@remix-run/eslint-config`
  - Remove `@remix-run/eslint-config/jest` config ([#6903](https://github.com/remix-run/remix/pull/6903))
  - Remove magic imports ESLint warnings ([#6902](https://github.com/remix-run/remix/pull/6902))
- `@remix-run/netlify`
  - The [`@remix-run/netlify`](https://remix.run/docs/en/main/start/v2#netlify-adapter) adapter has been removed in favor of the Netlify official adapters ([#7058](https://github.com/remix-run/remix/pull/7058))
- `@remix-run/node`
  - `fetch` is no longer polyfilled by default - apps must call [`installGlobals()`](https://remix.run/docs/en/main/start/v2#installglobals) to install the polyfills ([#7009](https://github.com/remix-run/remix/pull/7009))
  - `fetch` and related APIs are no longer exported from `@remix-run/node` - apps should use the versions in the global namespace ([#7293](https://github.com/remix-run/remix/pull/7293))
  - Apps must call [`sourceMapSupport.install()`](https://remix.run/docs/en/main/start/v2#source-map-support) to setup source map support
- `@remix-run/react`
  - Remove `unstable_shouldReload` in favor of `shouldRevalidate` ([#6865](https://github.com/remix-run/remix/pull/6865))
- `@remix-run/serve`
  - `remix-serve` picks an open port if 3000 is taken and `PORT` is not specified ([#7278](https://github.com/remix-run/remix/pull/7278))
  - Integrate `manual` mode ([#7231](https://github.com/remix-run/remix/pull/7231))
  - Remove undocumented `createApp` Node API ([#7229](https://github.com/remix-run/remix/pull/7229))
  - Preserve dynamic imports in remix-serve for external bundle ([#7173](https://github.com/remix-run/remix/pull/7173))
- `@remix-run/vercel`
  - The [`@remix-run/vercel`](https://remix.run/docs/en/main/start/v2#vercel-adapter) adapter has been removed in favor of out of the box functionality provided by Vercel ([#7035](https://github.com/remix-run/remix/pull/7035))
- `create-remix`
  - Stop passing `isTypeScript` to `remix.init` script ([#7099](https://github.com/remix-run/remix/pull/7099))
- `remix`
  - Removed magic exports ([#6895](https://github.com/remix-run/remix/pull/6895))

##### Breaking Type Changes

- Removed `V2_` prefixes from `future.v2_meta` types as they are now the default behavior ([#6958](https://github.com/remix-run/remix/pull/6958))
  - `V2_MetaArgs` -> `MetaArgs`
  - `V2_MetaDescriptor` -> `MetaDescriptor`
  - `V2_MetaFunction` -> `MetaFunction`
  - `V2_MetaMatch` -> `MetaMatch`
  - `V2_MetaMatches` -> `MetaMatches`
  - `V2_ServerRuntimeMetaArgs` -> `ServerRuntimeMetaArgs`
  - `V2_ServerRuntimeMetaDescriptor` -> `ServerRuntimeMetaDescriptor`
  - `V2_ServerRuntimeMetaFunction` -> `ServerRuntimeMetaFunction`
  - `V2_ServerRuntimeMetaMatch` -> `ServerRuntimeMetaMatch`
  - `V2_ServerRuntimeMetaMatches` -> `ServerRuntimeMetaMatches`
- The following types were adjusted to prefer `unknown` over `any` and to align with underlying React Router types ([#7319](https://github.com/remix-run/remix/pull/7319)):
  - Renamed the `useMatches()` return type from `RouteMatch` to `UIMatch`
  - Renamed `LoaderArgs`/`ActionArgs` to `LoaderFunctionArgs`/`ActionFunctionArgs`
  - `AppData` changed from `any` to `unknown`
  - `Location["state"]` (`useLocation.state`) changed from `any` to `unknown`
  - `UIMatch["data"]` (`useMatches()[i].data`) changed from `any` to `unknown`
  - `UIMatch["handle"]` (`useMatches()[i].handle`) changed from `{ [k: string]: any }` to `unknown`
  - `Fetcher["data"]` (`useFetcher().data`) changed from `any` to `unknown`
  - `MetaMatch.handle` (used in `meta()`) changed from `any` to `unknown`
  - `AppData`/`RouteHandle` are no longer exported as they are just aliases for `unknown`

### New Features

- New [`create-remix`](https://remix.run/docs/en/main/other-api/create-remix) CLI ([#6887](https://github.com/remix-run/remix/pull/6887))
  - Most notably, this removes the dropdown to choose your template/stack in favor of the `--template` flag and our ever-growing list of [available templates](https://remix.run/docs/en/main/guides/templates)
  - Adds a new `--overwrite` flag ([#7062](https://github.com/remix-run/remix/pull/7062))
  - Supports the `bun` package manager ([#7074](https://github.com/remix-run/remix/pull/7074))
- Detect built mode via `build.mode` ([#6964](https://github.com/remix-run/remix/pull/6964))
- Support polyfilling node globals via `serverNodeBuiltinsPolyfill.globals`/`browserNodeBuiltinsPolyfill.globals` ([#7269](https://github.com/remix-run/remix/pull/7269))
- New `redirectDocument` utility to redirect via a fresh document load ([#7040](https://github.com/remix-run/remix/pull/7040), [#6842](https://github.com/remix-run/remix/pull/6842))
- Add `error` to `meta` params so you can render error titles, etc. ([#7105](https://github.com/remix-run/remix/pull/7105))
- `unstable_createRemixStub` now supports adding `meta`/`links` functions on stubbed Remix routes ([#7186](https://github.com/remix-run/remix/pull/7186))
  - `unstable_createRemixStub` no longer supports the `element`/`errorElement` properties on routes. You must use `Component`/`ErrorBoundary` to match what you would export from a Remix route module.

### Other Notable Changes

- Remix now uses React Router's `route.lazy` method internally to load route modules on navigations ([#7133](https://github.com/remix-run/remix/pull/7133))
- Removed the `@remix-run/node` `atob`/`btoa` polyfills in favor of the built-in versions ([#7206](https://github.com/remix-run/remix/pull/7206))
- Decouple the `@remix-run/dev` package from the contents of the `@remix-run/css-bundle` package ([#6982](https://github.com/remix-run/remix/pull/6982))
  - The contents of the `@remix-run/css-bundle` package are now entirely managed by the Remix compiler. Even though it's still recommended that your Remix dependencies all share the same version, this change ensures that there are no runtime errors when upgrading `@remix-run/dev` without upgrading `@remix-run/css-bundle`.
- `remix-serve` now picks an open port if 3000 is taken ([#7278](https://github.com/remix-run/remix/pull/7278))
  - If `PORT` env var is set, `remix-serve` will use that port
  - Otherwise, `remix-serve` picks an open port (3000 unless that is already taken)

### Updated Dependencies

- [`react-router-dom@6.16.0`](https://github.com/remix-run/react-router/releases/tag/react-router%406.16.0)
- [`@remix-run/router@1.9.0`](https://github.com/remix-run/react-router/blob/main/packages/router/CHANGELOG.md#190)
- [`@remix-run/web-fetch@4.4.0`](https://github.com/remix-run/web-std-io/releases/tag/%40remix-run%2Fweb-fetch%404.4.0)
- [`@remix-run/web-file@3.1.0`](https://github.com/remix-run/web-std-io/releases/tag/%40remix-run%2Fweb-file%403.1.0)
- [`@remix-run/web-stream@1.1.0`](https://github.com/remix-run/web-std-io/releases/tag/%40remix-run%2Fweb-stream%401.1.0)

### Changes by Package

- [`create-remix`](https://github.com/remix-run/remix/blob/remix%402.0.0/packages/create-remix/CHANGELOG.md#200)
- [`@remix-run/architect`](https://github.com/remix-run/remix/blob/remix%402.0.0/packages/remix-architect/CHANGELOG.md#200)
- [`@remix-run/cloudflare`](https://github.com/remix-run/remix/blob/remix%402.0.0/packages/remix-cloudflare/CHANGELOG.md#200)
- [`@remix-run/cloudflare-pages`](https://github.com/remix-run/remix/blob/remix%402.0.0/packages/remix-cloudflare-pages/CHANGELOG.md#200)
- [`@remix-run/cloudflare-workers`](https://github.com/remix-run/remix/blob/remix%402.0.0/packages/remix-cloudflare-workers/CHANGELOG.md#200)
- [`@remix-run/css-bundle`](https://github.com/remix-run/remix/blob/remix%402.0.0/packages/remix-css-bundle/CHANGELOG.md#200)
- [`@remix-run/deno`](https://github.com/remix-run/remix/blob/remix%402.0.0/packages/remix-deno/CHANGELOG.md#200)
- [`@remix-run/dev`](https://github.com/remix-run/remix/blob/remix%402.0.0/packages/remix-dev/CHANGELOG.md#200)
- [`@remix-run/eslint-config`](https://github.com/remix-run/remix/blob/remix%402.0.0/packages/remix-eslint-config/CHANGELOG.md#200)
- [`@remix-run/express`](https://github.com/remix-run/remix/blob/remix%402.0.0/packages/remix-express/CHANGELOG.md#200)
- [`@remix-run/node`](https://github.com/remix-run/remix/blob/remix%402.0.0/packages/remix-node/CHANGELOG.md#200)
- [`@remix-run/react`](https://github.com/remix-run/remix/blob/remix%402.0.0/packages/remix-react/CHANGELOG.md#200)
- [`@remix-run/serve`](https://github.com/remix-run/remix/blob/remix%402.0.0/packages/remix-serve/CHANGELOG.md#200)
- [`@remix-run/server-runtime`](https://github.com/remix-run/remix/blob/remix%402.0.0/packages/remix-server-runtime/CHANGELOG.md#200)
- [`@remix-run/testing`](https://github.com/remix-run/remix/blob/remix%402.0.0/packages/remix-testing/CHANGELOG.md#200)
