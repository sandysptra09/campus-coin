'use client';

import RegisterForm from '@/components/custom/forms/register-form';

export default function RegisterPage({
  params,
  searchParams
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return <RegisterForm />
}
