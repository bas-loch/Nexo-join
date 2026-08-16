import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/i18n/locales";

function detectLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0]!.trim().toLowerCase().slice(0, 2));

  for (const lang of preferred) {
    if ((locales as readonly string[]).includes(lang)) {
      return lang;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|vendor|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico|txt|xml|json)$).*)",
  ],
};
