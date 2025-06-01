import type { ReactNode } from '@tanstack/react-router'
import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    // Load the tailwind css file here so its preloaded on startup
    // links: [
    //   {
    //     rel: 'stylesheet',
    //     href: appCss,
    //   },
    // ],
  }),
  component: RootComponent,
  notFoundComponent: () => <div>Not Found</div>,
  errorComponent: ({ error, reset }) => {
    console.error(error)
    return (
      <div>
        <h1>An error occurred</h1>
        <pre>{error.message}</pre>
        <button onClick={reset}>Reset</button>
      </div>
    )
  },
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <TanStackRouterDevtools />
      </body>
    </html>
  )
}
