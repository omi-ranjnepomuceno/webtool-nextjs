import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./app/(auth)/_lib/utils";

const AUTH_PAGES = ["/login"];

export default async function middleware(request: NextRequest) {
  const { url, nextUrl, cookies, headers } = request;
  const authToken = cookies.get("token");

  const isAuthPage = () =>
    AUTH_PAGES.some((page) => nextUrl.pathname.includes(page));

  const createRedirectResponse = (path: string) =>
    NextResponse.redirect(new URL(path, url));

  // private pages
  if (!isAuthPage()) {
    if (!authToken) {
      return createRedirectResponse("/login");
    }

    const result = await verifyToken(authToken.value);
    if (result.errors) {
      const response = createRedirectResponse("/login");
      response.cookies.delete("token");
      return response;
    }

    const requestHeaders = new Headers(headers);
    requestHeaders.set("authorization", `JWT ${authToken.value}`);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  // auth pages (login)
  if (authToken && isAuthPage()) {
    return createRedirectResponse("/");
  }

  return NextResponse.next();
}

export const config = { matcher: ["/", "/login"] };
