import React, { useState } from 'react';

import { Card, Image, Input } from '@heroui/react';
import ProfileButton from '../buttons/profile-button';

type UserProfile = {
    nama: string;
    nim: string;
    universitas: string;
    jurusan: string;
    email: string;
    password: string;
    foto: string;
};

export default function ProfileInfoCard({ user }: { user: UserProfile }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(user);

    const handleChange = (key: keyof UserProfile, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleToggleEdit = () => {
        setIsEditing((prev) => !prev);
        if (isEditing) {
            setFormData(user);
        }
    };

    const handleSave = () => {
        console.log('Data tersimpan:', formData);
        setIsEditing(false);
    };

    return (
        <div>
            <h2 className='text-[22px] font-semibold text-secondary mb-6'>Profil Saya</h2>

            <Card shadow='sm' radius='lg' className='p-8'>
                <div className='flex flex-col md:flex-row items-center gap-8'>
                    <Image
                        src={formData.foto}
                        alt={formData.nama}
                        width={150}
                        height={150}
                        radius='full'
                        className='object-cover border-2 border-gray-200'
                    />

                    <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                        <Input
                            label='Nama Lengkap'
                            value={formData.nama}
                            onChange={(e) => handleChange('nama', e.target.value)}
                            isReadOnly={!isEditing}
                            variant='bordered'
                            radius='md'
                        />
                        <Input
                            label='NIM'
                            value={formData.nim}
                            onChange={(e) => handleChange('nim', e.target.value)}
                            isReadOnly={!isEditing}
                            variant='bordered'
                            radius='md'
                        />
                        <Input
                            label='Universitas'
                            value={formData.universitas}
                            onChange={(e) => handleChange('universitas', e.target.value)}
                            isReadOnly={!isEditing}
                            variant='bordered'
                            radius='md'
                        />
                        <Input
                            label='Jurusan'
                            value={formData.jurusan}
                            onChange={(e) => handleChange('jurusan', e.target.value)}
                            isReadOnly={!isEditing}
                            variant='bordered'
                            radius='md'
                        />
                        <Input
                            label='Email Kampus'
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            isReadOnly={!isEditing}
                            variant='bordered'
                            radius='md'
                        />
                        <Input
                            label='Password'
                            type={isEditing ? 'text' : 'password'}
                            value={formData.password}
                            onChange={(e) => handleChange('password', e.target.value)}
                            isReadOnly={!isEditing}
                            variant='bordered'
                            radius='md'
                        />
                    </div>
                </div>

                <ProfileButton
                    isEditing={isEditing}
                    onToggleEdit={handleToggleEdit}
                    onSave={handleSave}
                />
            </Card>
        </div>
    );
}
