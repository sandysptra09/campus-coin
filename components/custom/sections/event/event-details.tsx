import {
  Modal,
  ModalContent,
  Button,
  useDisclosure,
  Card,
  Image,
  CardBody,
  Tooltip,
  Link,
  ModalHeader,
} from "@heroui/react";

import ArrowRightIcon from "@/public/assets/icons/arrow-right-icon";
import EventTypeChip from "../../chips/event-type-chip";
import LocationIcon from "@/public/assets/icons/location-icon";
import CoinIcon from "@/public/assets/icons/coin-icon";

import { BiCalendarWeek } from "react-icons/bi";

interface EventCardProps {
  event: {
    id: string;
    nama_event: string;
    tagline: string;
    deskripsi_event: string;
    gambar: string;
    tipe_event: string;
    tanggal_mulai_event: string;
    tanggal_berakhir_event: string;
    jam: string;
    lokasi: string;
    detail_lokasi: string;
    status: string;
    total_koin: number;
    benefit_utama: string;
    total_partisipasi: number;
    link_event: string;
    penyelenggara: string;
    quota_peserta: number;
  };
}

export default function EventDetails({ event }: EventCardProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        as={Link}
        radius="full"
        size="sm"
        endContent={<ArrowRightIcon />}
        variant="bordered"
        className="border-gray-600 text-secondary font-medium hover:bg-gray-100 transition"
      >
        View Details
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" size="3xl">
        <ModalContent className="p-4">
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-between items-center">
                <p className="text-lg font-semibold text-secondary">
                  Event Details
                </p>
              </ModalHeader>

              <Card shadow="sm" radius="lg" className="overflow-hidden">
                <Image
                  src={event.gambar}
                  alt={event.nama_event}
                  width="100%"
                  className="object-cover w-full h-[220px]"
                />

                <CardBody className="p-6 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <p className="font-semibold text-xl text-secondary">
                      {event.nama_event}
                    </p>
                    <EventTypeChip>{event.tipe_event}</EventTypeChip>
                  </div>

                  <p className="text-sm italic text-gray-500">
                    {event.tagline}
                  </p>

                  <p className="flex text-sm text-gray-600 font-medium gap-2">
                    <BiCalendarWeek className="my-auto" size={15} />
                    {event.tanggal_mulai_event} - {event.tanggal_berakhir_event} |{" "}
                    {event.jam}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-secondary font-medium border-y border-gray-200 py-3">
                    <Tooltip content="Location">
                      <span className="flex items-center gap-1 capitalize">
                        <LocationIcon />
                        {event.detail_lokasi}
                      </span>
                    </Tooltip>

                    <Tooltip content="Total Coins">
                      <span className="flex items-center gap-1">
                        <CoinIcon />
                        {event.total_koin}
                      </span>
                    </Tooltip>

                    <Tooltip content="Status">
                      <span className="capitalize">{event.status}</span>
                    </Tooltip>

                    <Tooltip content="Participants">
                      <span>{event.total_partisipasi} peserta</span>
                    </Tooltip>

                    <Tooltip content="Quota">
                      <span>Kuota: {event.quota_peserta}</span>
                    </Tooltip>
                  </div>

                  <p className="text-sm leading-relaxed text-secondary">
                    {event.deskripsi_event}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm text-secondary">
                      <span className="font-semibold">Benefit: </span>
                      {event.benefit_utama}
                    </p>

                    <p className="text-sm text-secondary">
                      <span className="font-semibold">Penyelenggara: </span>
                      {event.penyelenggara}
                    </p>
                  </div>

                  <div className="flex justify-end pt-3">
                    <Button
                      as={Link}
                      href={'/event'}
                      isExternal
                      color="primary"
                      variant="solid"
                      className="font-medium text-sm"
                    >
                      Daftar Event
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
