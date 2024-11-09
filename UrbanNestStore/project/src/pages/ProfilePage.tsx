import React, { useState } from 'react';
import Navbar from '../components/NavigationBar';
import Footer from '../components/Footer';
import avatar from "../assets/avatar.png";
import { useStore } from '../store/useStore';
import { Link, useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const { resetPassword } = useStore();
  const Signout = useStore((state) => state.Signout);

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handlePasswordChange = () => {
    if (newPassword === confirmPassword) {
      resetPassword(newPassword);
      setError('');
      setFirstName('');
      setLastName('');
      setDisplayName('');
      setEmail('');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-screen-lg mx-auto mb-12">
        <h1 className="text-5xl font-medium text-center my-12">My Account</h1>

        <div className="lg:flex lg:space-x-8">
          <div className="lg:w-1/3 mt-8 lg:mt-0 bg-color-grayish px-5 py-10 flex flex-col">
            <div className="flex flex-col items-center mb-8">
              <img src={avatar} alt="avatar image" />
              <p className="font-semibold text-xl">Sophia Collins</p>
            </div>
            <div>
              <ul className="flex flex-col justify-between gap-3">
                <li className="text-base font-semibold border-b border-color-black py-2">Account</li>
                <li className="text-base font-semibold text-color-gray py-2">Address</li>
                <li className="text-base font-semibold text-color-gray py-2">
                  <Link to={'/wishlist'}>Wishlist</Link>
                </li>
                <li className="text-base font-semibold text-color-gray py-2">
                  <button
                    onClick={() => {
                      Signout();
                      navigate("/"); 
                    }}
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-8">
            <div className="space-y-4 px-5 pb-10">
              <h2 className="text-xl font-medium">Account Details</h2>
              <div>
                <label className="block text-xs font-bold text-color-gray uppercase">First Name*</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  className="w-full mt-2 border border-color-lightgray p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-color-gray uppercase">Last Name*</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  className="w-full mt-2 border border-color-lightgray p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-color-gray uppercase">Display name *</label>
                <input
                  type="tel"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Display name"
                  className="w-full border border-color-lightgray p-2 mt-2 rounded"
                />
                <span className="text-xs font-normal italic text-color-gray">
                  This will be how your name will be displayed in the account section and in reviews
                </span>
              </div>
              <div>
                <label className="block text-xs font-bold text-color-gray uppercase">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full border border-color-lightgray p-2 mt-2 rounded"
                />
              </div>
            </div>

            <div className="space-y-4 px-5 py-10">
              <h1 className="text-xl font-medium">Password</h1>
              <div>
                <label className="block text-xs font-bold text-color-gray uppercase">Old password</label>
                <input
                  type="text"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="Old password"
                  className="w-full mt-2 border border-color-lightgray p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-color-gray uppercase">New password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New password"
                  className="w-full mt-2 border border-color-lightgray p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-color-gray uppercase mt-4">Repeat new password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat new password"
                  className="w-full mt-2 border border-color-lightgray p-2 rounded"
                />
              </div>
              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </div>

            <button
              className="bg-color-blue text-white text-base font-medium p-3 px-8 rounded-lg mt-4 ml-5"
              onClick={handlePasswordChange}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;