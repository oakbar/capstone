'use client'
import React from 'react';
import Image from 'next/image';
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaTiktok,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black'>
      <div>
      <div className="relative mt-[-3px]" style={{ width: '150px', height: '30px' }}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/State_Farm_logo.svg/2560px-State_Farm_logo.svg.png"
        alt="State Farm Logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
        <p className='py-4'>Like a Good Neighbor.
</p>
{/* insert the address of company in line breaks */}
    <div class="address-col">
        <address class="contacts">
            <p class="address"> 1150 State St. <br />
                            Richardson, TX 75082</p>
                        <p>
                          {/* insert the email link of the company */}
    <a class="footer-link" href="team@allstarcode.org">statefarm@statefarm.com</a>
</p>
        </address>
    </div>

{/* implementating the contact logo links */}
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaTiktok size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
      {/* insert solutions column in footer */}
        <h6 className='font-medium text-black-400'>Links</h6>
        <ul>
            <li className='py-2 text-sm'>Sign up</li>
            <li className='py-2 text-sm'>Login</li>
        </ul>
    </div>
    <div>
      {/* insert support column in footer */}
        <h6 className='font-medium text-black-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Contact</li>
            <li className='py-2 text-sm'>FAQs</li>
        </ul>
    </div>
    <div>
      {/* insert company column in footer */}
        <h6 className='font-medium text-black-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About Us</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;