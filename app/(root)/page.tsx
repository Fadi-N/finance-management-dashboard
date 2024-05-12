import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome,"
                        subtitle="Access  & manage account and transactions efficently."
                        user="Guest"
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={2}
                        totalCurrentBalance={1999.99}
                    />
                </header>
            </div>
            <RightSidebar/>
        </section>
    );
};

export default Home;