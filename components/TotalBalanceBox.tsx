import React from 'react';
import AnimatedCounter from "@/components/AnimatedCounter";
import DoughnutChart from "@/components/DoughnutChart";

const TotalBalanceBox = ({accounts = [], totalBanks, totalCurrentBalance}: TotalBalanceBoxProps) => {
    return (
        <div className="total-balance">
            <div className="total-balance-chart">
                <DoughnutChart accounts={accounts}/>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="header-2">Bank accounts {totalBanks}</h2>
                <div className="flex flex-col gap-2">
                    <p className="total-balance-label">Total current balance</p>
                    <div className="total-balance-amount">
                        <AnimatedCounter amount={totalCurrentBalance}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalBalanceBox;