"use client"

import React, { useEffect, useState } from 'react';

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  location: {
    city: string;
  };
  email: string;
  phone: string;
}

const Testimonial: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=3');
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  const loremIpsums = [
    "Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna praesent",
    "Tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra",
    "Sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla",
  ];

  return (
    <section className="bg-gray-100 py-20">
    <h2 className="text-4xl font-bold text-center mb-12 text-black">Testimonial</h2>
    <p className="text-center text-gray-700 sm:mb-5">What Our Customers Say</p>
    <p className="text-center mb-8 text-gray-700 sm:px-5">Gaining Trust from Business Partners Around the WorldGaining Trust from Business Partners Around the World</p>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <div key={index} className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center justify-center">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={user.picture.large}
                    alt={`${user.name.first} ${user.name.last}`}
                  />
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-800">
                      {user.name.first} {user.name.last}
                    </p>
                    <p className="text-sm text-gray-600">{user.location.city}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-gray-700 text-base">
                    {loremIpsums[index]}
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-200">
                <p className="text-gray-700 text-base">{user.email}</p>
                <p className="text-gray-700 text-base">{user.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
