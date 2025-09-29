'use client';

import VerifyOtpEmailForm from '@/components/custom/forms/verify-otp-email-form';

export default function VerifyOtpPage({
    params,
    searchParams
}: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    return <VerifyOtpEmailForm />
}
