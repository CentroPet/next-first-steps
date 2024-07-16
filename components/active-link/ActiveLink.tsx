'use client';

import Link from "next/link";
import Style  from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';
import { use } from "react";

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props ) => {

    const pathName = usePathname();
    console.log(pathName);

  return (
    <Link
    className={ `${Style.link} ${ (pathName === path ) && Style['active-link']}`} // condicional solo mantiene en color en rutas
    href= { path }>
          { text }
    </Link>
  )
}

