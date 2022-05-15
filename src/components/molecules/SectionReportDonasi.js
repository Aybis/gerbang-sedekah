import React from 'react';

export default function SectionReportDonasi() {
  return (
    <div className="relative mt-3 rounded-lg border border-zinc-200 p-4">
      <dl className="text-sm">
        <div className="pb-2 flex items-center justify-between">
          <dt className="text-gray-600">Total Donasi</dt>
          <dd className="font-medium text-gray-900">Rp xxx.xxx.xxx</dd>
        </div>
        <div className="py-2 flex items-center justify-between">
          <dt className="text-gray-600">Total Campaign</dt>
          <dd className="font-medium text-gray-900">
            xx <span className="text-zinc-500 font-light">Program</span>
          </dd>
        </div>
      </dl>
    </div>
  );
}
