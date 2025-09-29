'use client';

import VerifyOtpResetForm from '@/components/custom/forms/verify-otp-reset-form';

export default function VerifyOtpPage({
    params,
    searchParams
}: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    return <VerifyOtpResetForm />
}
