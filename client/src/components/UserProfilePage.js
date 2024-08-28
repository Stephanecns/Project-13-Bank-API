import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../redux/actions/authActions';
import Account from './Account';

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails);

  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(userDetails.firstName || '');
  const [lastName, setLastName] = useState(userDetails.lastName || '');

  const accounts = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '2,082.79',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amount: '10,928.42',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amount: '184.30',
      description: 'Current Balance',
    },
  ];

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({ firstName, lastName }));
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back,<br /> {firstName} {lastName}!
        </h1>
        <button className="edit-button" onClick={handleEditToggle}>
          {isEditing ? 'Cancel' : 'Edit Name'}
        </button>
      </div>
      {isEditing ? (
        <form onSubmit={handleSave} className="edit-form">
          <div className="input-wrapper">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button type="submit" className="edit-button">
            Save
          </button>
        </form>
      ) : (
        <>
          {accounts.map((account, index) => (
            <Account
              key={index}
              title={account.title}
              amount={account.amount}
              description={account.description}
            />
          ))}
        </>
      )}
    </main>
  );
};

export default UserProfilePage;
