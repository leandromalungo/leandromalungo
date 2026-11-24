'use client';

import { Download } from 'lucide-react';

export default function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 bg-[#171717] text-white rounded-full px-5 py-2.5 text-xs font-semibold">
      <Download className="w-4 h-4" /> Guardar como PDF
    </button>
  );
}
