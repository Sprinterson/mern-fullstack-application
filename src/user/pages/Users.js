import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Charles Raviaud',
            image: 'https://i-mom.unimedias.fr/2020/09/16/je-decouvre-le-chat.jpg',
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;