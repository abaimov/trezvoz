// @ts-nocheck
'use client'
import {motion, useMotionValueEvent, useScroll,} from 'framer-motion';
import React, {useState} from 'react';
import clsx from 'clsx'
import Image from 'next/image'
import Link from "next/link";
import img from '../assets/yKEFdG3JSD212a7L-mYSBQ_1-removebg-preview 1.png'
import {IoPhonePortraitOutline} from "react-icons/io5";

const StickyMenu = () => {

    const {scrollY} = useScroll()
    const [hidden, setHidden] = useState(false)
    useMotionValueEvent(scrollY, 'change', (latest) => {
        const prev: any = scrollY.getPrevious()
        if (latest > prev && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    const handlePhoneClick = (phoneNumber) => {
        // Отправляем событие в Google Analytics с параметром link_url
        if (typeof window !== 'undefined' && window.gtag) {
            gtag('event', 'link_url', {
                event_category: 'Phone',
                event_label: phoneNumber, // Отправляем номер телефона
            });
        }
    };
    return (
        <motion.div
            className={clsx(`max-w-[1440px] m-auto w-full flex sticky top-0 z-50 h-[70px] justify-between items-center text-white bg-black/80 px-4`)}
        >
            <div className={'w-[170px] h-[50px]'}>
                <a href="/"><Image className={'w-full'}
                                   src={img}
                                   alt=""/>
                </a>
            </div>
            <ul className={`gap-3 justify-center items-center hidden sm:flex`}>
                <Link href={'/#services'}>
                    <li>Цены</li>
                </Link>
                <Link href={'/#success'}>
                    <li>Преимущества</li>
                </Link>
                <Link href={'/#contacts'}>
                    <li>Контакты</li>
                </Link>
            </ul>
            <a href="tel:+375333004799"
               className={'flex sm:hidden bg-green-500 text-4xl cursor-pointer p-2 rounded-full'} onClick={(e) => {
                e.preventDefault(); // Предотвращаем действие по умолчанию
                handlePhoneClick('+375333004799'); // Отправляем событие
                window.location.href = 'tel:+375333004799'; // Переход по ссылке для звонка
            }}><IoPhonePortraitOutline/></a>
        </motion.div>
    );
};

export default StickyMenu