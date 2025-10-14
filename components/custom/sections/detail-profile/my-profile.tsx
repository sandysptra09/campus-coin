'use client';

import React from 'react'

import ProfileInfoCard from '../../cards/profile-info-card';
import CertificateCard from '../../cards/certificate-card';

export default function MyProfile() {
    const user = {
        nama: 'Ghassan Ariq Muzakki',
        username: 'malixa_ken',
        nim: '123456789',
        universitas: 'Univrersitas Pendidikan Indonesia',
        jurusan: 'S1 Rekayasa Perangkat Lunak',
        email: 'ghasan@upi.edu',
        password: 'password123',
        foto: 'https://i.pravatar.cc/150?img=1',
        sertifikat: [
            {
                id: 1,
                nama: 'E-Certificate Pelatihan Desain UI/UX Dasar',
                gambar: '/assets/images/e-certificates/e-certificate-1.png',
            },
            {
                id: 2,
                nama: 'E-Certificate Kepemimpinan Mahasiswa Aktif',
                gambar: '/assets/images/e-certificates/e-certificate-2.png',
            },
            {
                id: 3,
                nama: 'E-Certificate Seminar Inovasi Teknologi Kampus 2025',
                gambar: '/assets/images/e-certificates/e-certificate-3.png',
            },
        ]
    };

    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-20'>
            <ProfileInfoCard user={user} />
            <CertificateCard sertifikat={user.sertifikat} />
        </section>
    )
}
