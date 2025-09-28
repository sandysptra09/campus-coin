import React from 'react'

export default function LoginPage({
    params,
    searchParams
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return <h1>Login Page</h1>
}
