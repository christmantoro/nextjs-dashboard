"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';


import { usePathname } from 'next/navigation';

import Link from 'next/link';
import { links } from '@/app/links'
import { ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode, Key } from 'react';
import { UrlObject } from 'url';

import clsx from 'clsx';

// ...

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link: { icon: any; name: boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | Key | null | undefined; href: string | UrlObject; }) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}