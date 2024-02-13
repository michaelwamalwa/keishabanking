import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiProjectorScreenDuotone } from 'react-icons/pi';
import { CgDetailsMore } from 'react-icons/cg';
import { MdRoomPreferences } from 'react-icons/md';
import { FaMoneyBill } from 'react-icons/fa';
import { TbHistory } from 'react-icons/tb';
import { ImProfile } from 'react-icons/im';
import { BiMessageSquareCheck } from 'react-icons/bi';
import { GrShieldSecurity } from 'react-icons/gr';
import { MdLiveHelp } from 'react-icons/md';
import './Dashboard.css'; // Import the CSS file for styling
import AccountOverview from './AccountOverview.js';
import AccountDetails from './AccountDetails.js';
import AccountPreferences from './AccountPreferences.js';
import BillPayments from './BillPayments.js';
import TransactionHistory from './TransactionHistory.js';
import ProfileSettings from './ProfileSettings.js';
import SecurityMeasures from './SecurityMeasures.js';
import SecureMessages from './SecureMessages.js';
import HelpSupport from './HelpSupport.js';

const UserDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('personal-info');
  const navigate = useNavigate();

  //feth user information on component mount
  
    

 const handleLogout = () => {
  navigate('/login');
  };


  const renderContent = () => {
    switch (selectedTab) {
      case 'account-overview':
        return (
          <AccountOverview />
        )
        case 'account-preferences':
          return (
            <AccountPreferences />
          )
        case 'transaction-history':
          return (
           <TransactionHistory/>
          );
          case 'profile-settings':
            return (
             <ProfileSettings/>
            );
            case 'security-measures':
              return (
               <SecurityMeasures/>
              );
              case 'help-support':
                return (
                 <HelpSupport/>
                );
                case 'account-details':
                  return (
                   <AccountDetails/>
                  );
                  case 'bill-payments':
                  return (
                   <BillPayments/>
                  );
                  case 'secure-messages':
                    return (
                     <SecureMessages/>
                    );
      default:
        return null;
    }
  };

  return (
    <div className="user-dashboard">
      <div className="sidebar"> 
        <ul className="sidebar-nav">
          <li>
            <Link
              className={selectedTab === 'account-overview' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('account-overview')}
            >
         <PiProjectorScreenDuotone/>Account Overview
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'account-details' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('account-details')}
            >
            <CgDetailsMore />Account Details
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'account-preferences' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('account-preferences')}
            >
            <MdRoomPreferences/> Account Preferences
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'bill-payments' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('bill-payments')}
            >
            <FaMoneyBill/> Bill Payments
            </Link>
          </li>

          <li>
            <Link
              className={selectedTab === 'transaction-history' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('transaction-history')}
            >
             <TbHistory/> Transaction History
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'profile-settings' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('profile-settings')}
            >
            <ImProfile />Profile Settings
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'secure-messages' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('secure-messages')}
            >
            <BiMessageSquareCheck/>Secure Messages
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'security-measures' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('security-measures')}
            >
             <GrShieldSecurity/> Security Measures
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'help-support' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('help-support')}
            >
             <MdLiveHelp/> Help and Support
            </Link>
          </li>
        </ul>
        <button className='logout-button' onClick={handleLogout}>LOG OUT </button>  
      </div>
      <div className="content">
        {renderContent()}
      </div>
 
    </div>
  );
};

export default UserDashboard;
