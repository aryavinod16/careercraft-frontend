import React from 'react';
import { Badge } from '../ui/badge';

function LatestJobCards() {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer hover:shadow-2xl transition-shadow duration-300">
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">Lorem consectetur adipisicing elit.</p>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="secondary">12 Positions</Badge>
        <Badge className="text-blue-700 font-bold" variant="secondary">Part time</Badge>
        <Badge className="text-blue-700 font-bold" variant="secondary">24LPA</Badge>
      </div>
    </div>
  );
}

export default LatestJobCards;
