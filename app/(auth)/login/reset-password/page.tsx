'use client';

import ResetPasswordForm from '@/components/custom/forms/reset-password-form';

export default function ResetPasswordPage({
    params,
    searchParams
}: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    return <ResetPasswordForm />
}
