import React from 'react';
import Link from 'next/link';
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <nav className='flex-center'>
      <ul className='flex-center'>
        <li><Link href='/'><span>{t("home")}</span></Link></li>
        <li><Link href='/projects'><span>{t("projects")}</span></Link></li>
        <li><Link href='/about-us'><span>{t("about-us")}</span></Link></li>
        <li><Link href='/contact'><span>{t("contact")}</span></Link></li>
      </ul>
    </nav>
  );
}
