'use client'
import {sendGAEvent} from '@next/third-parties/google';

export const googleEventHandler = (value: string): void => {
    sendGAEvent({
        event: 'click_tel',
        event_label: 'Phone',
        value: value,
    });

};