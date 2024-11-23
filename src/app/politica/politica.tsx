// @ts-nocheck
'use client'
import {useEffect} from "react";


export default function Politica() {
    useEffect(() => {
        // Функция для отслеживания кликов
        const handleClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            // Пример отслеживания клика по ссылкам
            if (target.tagName === "A") {
                gtag("event", "click", {
                    event_category: "outbound link",
                    event_label: target.getAttribute("href"),
                    value: 1,
                });
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

            {/* Определение терминов */}
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">1. Определение терминов</h2>
            <p className="mb-4">
                <strong>1.1 В настоящей Политике конфиденциальности используются следующие термины:</strong>
            </p>

            {/* Список определений */}
            <ul className="list-disc list-inside space-y-3 pl-4">
                <li>
                    <strong>Администрация сайта</strong> — уполномоченные сотрудники на управление сайтом, которые
                    организуют
                    и (или) осуществляют обработку персональных данных.
                </li>
                <li>
                    <strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно
                    определенному
                    физическому лицу.
                </li>
                <li>
                    <strong>Обработка персональных данных</strong> — любое действие с использованием или без
                    использования
                    средств автоматизации.
                </li>
                <li>
                    <strong>Конфиденциальность персональных данных</strong> — обязательное требование не допускать их
                    распространения без согласия.
                </li>
                <li>
                    <strong>Cookies</strong> — небольшой фрагмент данных, отправленный веб-сервером и хранимый на
                    компьютере
                    пользователя.
                </li>
                <li>
                    <strong>IP-адрес</strong> — уникальный сетевой адрес узла в компьютерной сети.
                </li>
            </ul>

            {/* Общие положения */}
            <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-4">2. Общие положения</h2>
            <p className="mb-4">
                <strong>2.1.</strong> Использование сайта данной Web-страницы Пользователем означает согласие с
                настоящей
                Политикой конфиденциальности и условиями обработки персональных данных Пользователя.
            </p>
            <p className="mb-4">
                <strong>2.2.</strong> В случае несогласия с условиями Политики конфиденциальности Пользователь должен
                прекратить использование сайта данной Web-страницы.
            </p>

            {/* Предмет политики конфиденциальности */}
            <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-4">3. Предмет политики конфиденциальности</h2>
            <p className="mb-4">
                Настоящая Политика конфиденциальности устанавливает обязательства Администрации по неразглашению и
                обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет по
                запросу Администрации.
            </p>

            {/* Список персональных данных */}
            <ul className="list-decimal list-inside pl-6 space-y-3">
                <li>Фамилия, имя, отчество Пользователя</li>
                <li>Контактный телефон Пользователя</li>
                <li>Адрес электронной почты</li>
                <li>Место жительства Пользователя (при необходимости)</li>
                <li>Фотография (при необходимости)</li>
            </ul>

            {/* Цели сбора персональной информации */}
            <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-4">4. Цели сбора персональной информации
                пользователя</h2>
            <p className="mb-4">4.1. Персональные данные Пользователя Администрация может использовать в целях:</p>
            <ul className="list-disc list-inside pl-4 space-y-3">
                <li>Идентификации Пользователя для его дальнейшей авторизации.</li>
                <li>Предоставления доступа к персонализированным данным сайта.</li>
                <li>Установления с Пользователем обратной связи.</li>
                <li>Обеспечения безопасности и предотвращения мошенничества.</li>
            </ul>

            {/* Заключительные положения */}
            <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-4">5. Дополнительные условия</h2>
            <p className="mb-4">
                Администрация вправе вносить изменения в настоящую Политику конфиденциальности без согласия
                Пользователя.
                Новая Политика конфиденциальности вступает в силу с момента её размещения на сайте данной Web-страницы.
            </p>
            <a href="tel:+375333004799" className="text-yellow-400">
                +375 (33) 300 47 99
            </a>
        </div>
    );
}
