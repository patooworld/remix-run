import {
  createCookieFactory,
  createCookieSessionStorageFactory,
  createSessionStorageFactory,
} from "@remix-run/server-runtime";

import { sign, unsign } from "./crypto";
import { createKvSessionStorage } from "../sessions";

export const createCookie = createCookieFactory({ sign, unsign });
export const createCookieSessionStorage =
  createCookieSessionStorageFactory(createCookie);
export const createSessionStorage = createSessionStorageFactory(createCookie);
export const createKvSessionStorage =
  createKvStorageFactory(createSessionStorage);
