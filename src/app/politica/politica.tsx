// @ts-nocheck
'use client'


import { useEffect } from 'react';
import Link from 'next/link';

export default function Politica() {
    useEffect(() => {
        // Функция для отслеживания кликов
        const handleClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            // Пример отслеживания клика по ссылке
            if (target.tagName === "A") {
                const href = target.getAttribute("href");
                if (href) {
                    gtag("event", "click", {
                        event_category: "outbound link",
                        event_label: href,
                        value: 1,
                    });
                }
            }
        };

        // Добавляем обработчик кликов на весь документ
        document.addEventListener("click", handleClick);

        // Очистка обработчика при размонтировании компонента
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div className="bg-gray-900 text-gray-200 font-sans antialiased p-8">
            {/* Заголовок страницы */}
            <h1 className="text-3xl font-bold text-yellow-500 border-b border-gray-700 pb-4 mb-8">
                Политика конфиденциальности персональных данных
            </h1>

            {/* Вводный текст */}
            <p className="mb-6">
                Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности)
                действует в
                отношении всей информации, которую сайт (далее – данная Web-страница), расположенный на доменном
                имени{" "}
                <strong>ваш-сайт.ру</strong> (а также его субдоменах), может получить о Пользователе во время
                использования
                сайта (а также его субдоменов), его программ и продуктов.
            </p>

            {/* Ссылка с телефоном */}
            <Link
                href="tel:+375333004799"
                className="text-yellow-400"
                onClick={(e) => {
                    // Отправка события в Google Analytics при клике на ссылку
                    gtag("event", "click", {
                        event_category: "Phone Link",
                        event_label: "tel:+375333004799",
                        value: 1,
                    });
                }}
            >
                +375 (33) 300 47 99
            </Link>
        </div>
    );
}
