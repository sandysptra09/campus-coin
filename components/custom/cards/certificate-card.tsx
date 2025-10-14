import React from 'react';

import { Card, CardHeader, CardBody, Image } from '@heroui/react';

type Certificate = {
    id: number;
    nama: string;
    gambar: string;
};

export default function CertificateCard({ sertifikat }: { sertifikat: Certificate[] }) {
    return (
        <div className='mt-8'>
            <h2 className='text-[22px] font-semibold text-secondary mb-6'>
                Sertifikat yang telah ditukarkan
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {sertifikat.map((cert) => (
                    <Card key={cert.id} shadow='sm' radius='lg' className=''>
                        <CardHeader className='p-0'>
                            <Image
                                src={cert.gambar}
                                alt={cert.nama}
                                width={'100%'}
                                height={200}
                                className='object-center rounded-t-lg w-full'
                            />
                        </CardHeader>
                        <CardBody className='p-4'>
                            <p className='text-sm md:text-base font-medium text-secondary'>{cert.nama}</p>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}
