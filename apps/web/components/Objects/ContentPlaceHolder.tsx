'use client';
import React from 'react'
import useAdminStatus from '../Hooks/useAdminStatus'
import { useTranslations } from 'next-intl';


// Terrible name and terible implementation, need to be refactored asap 
function ContentPlaceHolderIfUserIsNotAdmin({ text }: { text: string }) {
    const isUserAdmin = useAdminStatus() as any
    const t = useTranslations("General");
    return (
        <span>{isUserAdmin ? text : t('noContentYet')}</span>
    )
}

export default ContentPlaceHolderIfUserIsNotAdmin