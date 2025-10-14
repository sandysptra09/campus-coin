import React, { useState } from 'react';

import { Button, addToast } from '@heroui/react';
import { Edit, X } from 'lucide-react';

interface ProfileButtonProps {
    isEditing: boolean;
    onToggleEdit: () => void;
    onSave: () => void;
}

export default function ProfileButton({ isEditing, onToggleEdit, onSave }: ProfileButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleSave = async () => {
        setIsLoading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            onSave();

            addToast({
                title: "Berhasil",
                description: "Profil berhasil disimpan.",
                color: "success",
                timeout: 3000,
            });
        } catch (error) {
            addToast({
                title: "Gagal",
                description: "Terjadi kesalahan saat menyimpan profil.",
                color: "danger",
                timeout: 3000,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='flex flex-col md:flex-row justify-end gap-3 mt-6'>
            <Button
                startContent={isEditing ? <X size={16} /> : <Edit size={16} />}
                color={isEditing ? 'danger' : 'secondary'}
                variant='flat'
                radius='md'
                className='w-full md:w-auto'
                onPress={onToggleEdit}
                isDisabled={isLoading}
            >
                {isEditing ? 'Batal' : 'Edit Profile'}
            </Button>

            <Button
                color="success"
                variant="solid"
                radius="md"
                className="w-full md:w-auto"
                onPress={handleSave}
                isLoading={isLoading}
                isDisabled={!isEditing || isLoading}
            >
                {isLoading ? "Menyimpan..." : "Simpan"}
            </Button>
        </div>
    );
}


