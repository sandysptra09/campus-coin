'use client';

import React from 'react'

export default function RegisterPage({
  params,
  searchParams
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return (
    <>
      Register Page
    </>
  )
}
