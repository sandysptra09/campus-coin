export interface Event {
  id: string
  nama_event: string
  tagline: string
  deskripsi_event: string
  gambar: string
  tipe_event: 'seminar' | 'competition' | 'workshop' | 'talkshow' | 'festival' | 'volunteer'
  tanggal_mulai_event: string
  tanggal_berakhir_event: string
  jam: string
  lokasi: 'online' | 'offline'
  detail_lokasi: string
  status: 'upcoming' | 'ongoing' | 'ended'
  total_koin: number
  benefit_utama: string
  total_partisipasi: number
  link_event: string
  penyelenggara: string
  quota_peserta: number
}
