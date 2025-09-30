'use client';

import ForgetPasswordForm from '@/components/custom/forms/forgot-password-form';

export default function ForgetPasswordPage({
    params,
    searchParams
}: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    return <ForgetPasswordForm />
}
