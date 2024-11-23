import type { Metadata } from "next";
import { PT_Sans_Caption } from "next/font/google";
import "./globals.css";
import StickyMenu from "@/app/Navbar";
import ContainerProvider from "@/app/ContainerProvider";
import Script from "next/script";


// Подключение шрифта PT Sans Caption
const sans_caption = PT_Sans_Caption({
    subsets: ["cyrillic", "latin"],
    weight: ["400", "700"],
});

// Метаданные страницы
export const metadata: Metadata = {
    title: "🚗 Трезвый водитель Минск: Безопасное возвращение домой",
    description:
        "🌟 Ваш надежный партнер на дороге — Trezvy 🚗. С нами вы всегда в безопасности, независимо от времени и места 🌃. Наши опытные водители гарантируют вам спокойствие и уверенность в том, что ваш путь домой будет таким же приятным, как и вечер 🏠.",
};

// Главный компонент макета
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={sans_caption.className}>
        {/* Основной контент приложения */}
        <ContainerProvider>
            <StickyMenu />
            {children}
            <div className="text-center bg-black h-[50px]">
                <a
                    href="/politica"
                    className="uppercase font-bold text-[12px] underline text-white"
                >
                    Политика конфиденциальности
                </a>
                <p className="uppercase font-bold text-[8px] text-white">
                    УНП 190010170
                </p>
            </div>
        </ContainerProvider>
        </body>

        {/*<Script*/}
        {/*    id="gtag-js"*/}
        {/*    strategy="afterInteractive"*/}
        {/*    src="https://www.googletagmanager.com/gtag/js?id=G-D9NWJ5P27W"*/}
        {/*/>*/}
        {/*<Script strategy="afterInteractive">*/}
        {/*    {`*/}
        {/*          window.dataLayer = window.dataLayer || [];*/}
        {/*          function gtag(){dataLayer.push(arguments);}*/}
        {/*          gtag('js', new Date());*/}
        {/*          gtag('config', 'G-D9NWJ5P27W');*/}
        {/*       `}*/}
        {/*</Script>*/}
        </html>
    );
}
