import React from 'react'
import { useTranslations } from "next-intl";
import Link from 'next/link';
import Navbar from '../Navbar';

export default function Footer() {
    const t = useTranslations("Footer");
    return (
        <footer className='pt-12'>
            <div className='footer-container container'>
                <div className='flex-center'>
                    <div>
                        <ul className=''>
                            <li><span className='opacity-50'>{t("sitemap")}</span></li>
                            <li><Link href='/'><span>{t("home")}</span></Link></li>
                            <li><Link href='/projects'><span>{t("projects")}</span></Link></li>
                            <li><Link href='/about-us'><span>{t("about-us")}</span></Link></li>
                            <li><Link href='/contact'><span>{t("contact")}</span></Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><span className='opacity-50'>{t("follow")}</span></li>
                            <li>Linkedin</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>
                <div className='text-center pb-4 mt-12 text-sm'>{t("copyright")}</div>
            </div>
        </footer>
    )
}
