import React from 'react';
import Profile from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Friendlist from "./Friendlist/Friendlist.jsx";
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import transactions from '../transactions.json';
import friends from '../friends.json';
import user from '../user.json';
import statsData from '../statistical-data.json';


const App = () => {
  return (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statsData} />
    <Statistics stats={statsData} />
    <Friendlist
      friends={friends}
    />
    <TransactionHistory transactions={transactions}/>
  </div>
  );
};

export default App;