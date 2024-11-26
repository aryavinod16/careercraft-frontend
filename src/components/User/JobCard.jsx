import {  Bookmark } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { AvatarImage, Avatar } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Link } from 'react-router-dom';


const JobCard = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Avatar>
          <AvatarImage
            src="https://tse4.mm.bing.net/th?id=OIP.QfuBrrVrqpd--YpvS2QwwgAAAA&pid=Api&P=0&h=180"
            className="rounded-full bg-white p-1 object-cover"
          />
        </Avatar>
        <div>
          <h1 className="font-bold text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nostrum ipsam laborum debitis architecto at inventore adipisci ab, veniam voluptate libero perspiciatis, vitae porro consectetur labore. Magni nemo quas consequatur!</p>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="secondary">12 Positions</Badge>
        <Badge className="text-blue-700 font-bold" variant="secondary">Part time</Badge>
        <Badge className="text-blue-700 font-bold" variant="secondary">24LPA</Badge>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Link to="/description">
        <Button variant="outline">Details</Button>
        </Link>
        <Button className="text-yellow-400">Save for later</Button>
      </div>
    </div>
  );
};

export default JobCard;
