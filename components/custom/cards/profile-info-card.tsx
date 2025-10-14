import React, { useState } from 'react';

import { Button, Card, Image } from '@heroui/react';
import { Edit } from 'lucide-react';
import Link from 'next/link';

type UserProfile = {
    nama: string;
    username: string;
    nim: string;
    universitas: string;
    jurusan: string;
    email: string;
    password: string;
    foto: string;
};

export default function ProfileInfoCard({ user }: { user: UserProfile }) {
    const [formData] = useState(user);

    return (
        <div>
            <h2 className='text-[22px] font-semibold text-secondary mb-6'>My Profile</h2>

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

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Full Name</p>
                            <p className="text-base font-medium text-foreground">{user.nama}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Display Name</p>
                            <p className="text-base font-medium text-foreground">{user.username}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">NIM</p>
                            <p className="text-base font-medium text-foreground">{user.nim}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">University</p>
                            <p className="text-base font-medium text-foreground">{user.universitas}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Major</p>
                            <p className="text-base font-medium text-foreground">{user.jurusan}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Email</p>
                            <p className="text-base font-medium text-foreground">{user.email}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Password</p>
                            <p className="text-base font-medium text-foreground">••••••••</p>
                        </div>
                    </div>
                </div>

                <Link href='/user/settings' className='flex justify-end mt-10'>
                    <Button
                        startContent={<Edit size={16} />}
                        color={'primary'}
                        radius='md'
                        className='w-full md:w-auto'
                    >
                    Edit Profile
                    </Button>
                </Link>

                {/* <ProfileButton
                    isEditing={isEditing}
                    onToggleEdit={handleToggleEdit}
                    onSave={handleSave}
                /> */}
            </Card>
        </div>
    );
}
