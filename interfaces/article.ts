export interface Article {
  id: number
  nama_artikel: string
  deskripsi_singkat: string
  konten: string
  kategori: string
  gambar: string
  lama_baca: string
  penulis: {
    nama: string
    foto: string
  }
  tanggal_publikasi: string
  total_komen: number
}
