import React from 'react';
import Mastercard from '../../components/mastercardUI';
import Activity from '../../components/activity';
import DepositForm from '../../components/deposite';
import Greeting from '../../components/greeting';
import SearchBar from '../../components/searchbar';

export default function Page() {
  return (
    <>
      <div className="flex flex-col">
        {/* Top Section: Greeting and SearchBar */}
        <div className="flex items-center justify-evenly gap-[20rem] pb-2">
          <div className="m-2 ">
            <Greeting />
          </div>
          <div className="m-2">
            <SearchBar />
          </div>
        </div>

        <div className="flex items-center justify-evenly">
          <div className="m-2">
            <DepositForm />
          </div>
          <div className="m-2">
            <Mastercard />
          </div>
        </div>

        <div className="flex items-end justify-end ">
          <div className=" mx-3 px-7">
            <Activity />
          </div>
        </div>
      </div>
    </>
  );
}
