import React from "react";
import Skeleton from "react-loading-skeleton";

const ContestSkeleton = () => {
    return (
        <>
            <div className="upcoming_contest">
                <Skeleton width={250} height={30} />
            </div>
            <div className="upcomingContestGrid">
                {Array(4).fill(0).map((idx) => (
                    <div className="weekly_main" style={{marginTop: '2rem'}} key={idx}>
                        <div className="main_upcoming_container">
                            <div className="contest_flex">
                                <div className="upcoming_contest_name">
                                    <Skeleton width={230} height={25} />
                                </div>
                                <div className="contest_start_btn" style={{display: 'flex', gap: '1rem'}}>
                                    <Skeleton width={100} />
                                    <Skeleton width={100} />
                                </div>
                            </div>
                            <div className="upcoming_date_time">
                                <Skeleton style={{marginLeft: '1.25rem'}} width={160} count={3} />
                            </div>
                        </div>  
                    </div>
                ))}
                
            </div>
        </>
    );
};

export default ContestSkeleton;
