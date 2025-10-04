// types/next.d.ts
// import { NextRouter } from "next/router";

declare module 'next/navigation' {
  export function notFound(): never;
  export function usePathname(): string;
  export interface PageProps {
    params: Promise<{ slug: string }> | undefined;
    searchParams?: Record<string, string | string[] | undefined>;
  }
}

declare module 'next' {
  export interface PageProps {
    params: Promise<{ slug: string }> | undefined;
    searchParams?: Record<string, string | string[] | undefined>;
  }
  export type NextPage<P = unknown, IP = P> = React.ComponentType<P> & {
    getInitialProps?: (ctx: unknown) => IP | Promise<IP>;
  };
}