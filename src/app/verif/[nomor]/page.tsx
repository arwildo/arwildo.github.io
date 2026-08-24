import { notFound } from 'next/navigation';
import documents from '@/data/db_document.json';
import VerifClient from '@/app/verif/[nomor]/verif-client';

// generate halaman statis untuk semua nomor di db (wajib untuk static export)
export function generateStaticParams() {
  return documents.map((doc) => ({ nomor: doc.nomor }));
}

export async function generateMetadata({ params }: { params: { nomor: string } }) {
  return { title: `Verifikasi ${params.nomor} - Arwildo` };
}

export default function VerifPage({ params }: { params: { nomor: string } }) {
  const document = documents.find((doc) => doc.nomor === params.nomor);

  if (!document) {
    notFound();
  }

  return <VerifClient nomor={document.nomor} ket={document.ket} />;
}
