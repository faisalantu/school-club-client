import NevEventCard from './nevEventCard';

function EventBar(props ) {

    return (
        <div className={` px-2 pb-24 w-72 overflow-y-auto `} >
            {/* <h2 className={`text-center text-2xl`}> Events </h2> */}
            <NevEventCard
                img='/event-banner-2.png'
                heading='"Why you shoud not west your time in university" join if you dont want to west your time'
                volunteersCount={10} 
                participantsCount={100} 
                eventLink='/events/cse/123'
            />
            <NevEventCard
                img='/event-banner-2.png'
                heading='"Why you shoud not west your time in university" join if you dont want to west your time'
                volunteersCount={10} 
                participantsCount={100} 
                eventLink='/events/cse/123'
            />
            <NevEventCard
                img='/event-banner-2.png'
                heading='"Why you shoud not west your time in university" join if you dont want to west your time'
                volunteersCount={10} 
                participantsCount={100} 
                eventLink='/events/cse/123'
            />
            <NevEventCard/>
            <NevEventCard/>
            <NevEventCard/>
            <NevEventCard/>
            <NevEventCard/>
        </div>
    )       
}
export default EventBar;