'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, TriangleAlert } from 'lucide-react';

interface VerifClientProps {
  nomor: string;
  ket?: string;
}

const VerifClient = ({ nomor, ket }: VerifClientProps) => {
  const isNotFound = !ket;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm text-center"
      >
        <div className="flex flex-col items-center">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center ${isNotFound ? 'bg-red-100' : 'bg-green-100'}`}
          >
            {isNotFound ? (
              <TriangleAlert className="w-8 h-8 text-red-600" />
            ) : (
              <ShieldCheck className="w-8 h-8 text-green-600" />
            )}
          </div>

          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {nomor}
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
            {ket ?? 'Nomor dokumen tidak ditemukan.'}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifClient;
