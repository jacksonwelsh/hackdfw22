import Link from "next/link";
import { useRouter } from "next/router";
import { AnimateSharedLayout, motion } from 'framer-motion'

const isActiveLink = (href: string, currentPathname: string): boolean => {
  if (href === '/') {
      return href === currentPathname
  }

  return currentPathname.startsWith(href)
}

interface RouteProps {
    route: string;
    label: string;
    icon: React.ReactNode;
}

const ROUTES: RouteProps[] = [
  {
    route: '/timeline',
    label: 'Timeline',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  },
  {
    route: '/shavings',
    label: 'Shavings',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>  
  },
  {
    route: '/simulator',
    label: 'Simulator',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>
  },
  {
    route: '/foryou',
    label: 'For You',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
  },
]

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
const router = useRouter();

return (
  <AnimateSharedLayout>
  <nav className="fixed inset-x-0 bottom-0 h-16 p-4 bg-neutral-800">
    <div className="max-w-2xl mx-auto h-full flex justify-around items-center">
      {ROUTES.map(({route, label, icon}) => {
        return (
          <Link key={label} href={route} scroll={false}>
          <a className=" flex flex-col relative">
              <span className="flex flex-col gap-1 items-center sm:flex-row">{icon}<span className="text-xs">{label}</span></span>
              {isActiveLink(route, router.pathname) && (
                  <motion.div
                      layoutId="navigation-underline"
                      className="w-full border white-300"
                      animate
                  />
              )}
          </a>
      </Link>
        )
      })}
    </div>
  </nav>
  </AnimateSharedLayout>
  );
};

export default NavBar;