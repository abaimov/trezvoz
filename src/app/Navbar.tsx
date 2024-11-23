// @ts-nocheck
'use client'
import {motion, useMotionValueEvent, useScroll,} from 'framer-motion';
import React, {MouseEvent, useState} from 'react';
import clsx from 'clsx'
import Image from 'next/image'
import Link from "next/link";
import img from '../assets/yKEFdG3JSD212a7L-mYSBQ_1-removebg-preview 1.png'
import {IoPhonePortraitOutline} from "react-icons/io5";
import {sendGAEvent} from "@/app/metrika/google.event";

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
    const handlePhoneClick = () => {
        sendGAEvent('click_tel', 'Phone', '+375333004799');
        window.location.href = 'tel:+375333004799'; // Переход после отправки события
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
               className={'flex sm:hidden bg-green-500 text-4xl cursor-pointer p-2 rounded-full'}
               onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                   e.preventDefault();
                   handlePhoneClick();
               }}><IoPhonePortraitOutline/></a>
        </motion.div>
    );
};

export default StickyMenu