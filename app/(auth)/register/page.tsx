import React from 'react'

export default function RegisterPage({
    params,
    searchParams
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return <h1>Register Page</h1>
}
