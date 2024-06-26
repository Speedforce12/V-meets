import Banner from "@/components/Banner";
import CallGroups from "@/components/call-groups";
import MeetingCard from "@/components/meeting-card";
import SeeAllButton from "@/components/seeall-button";
import { meetingCard } from "@/constant/constant";

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Banner />
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 gap-4'>
        {meetingCard.map((meeting, index) => (
          <MeetingCard key={meeting.id} {...meeting} index={index} />
        ))}
      </section>

      <div className='flex flex-col'>
        <div className='flex items-center justify-between my-5'>
          <h2 className='md:text-xl  font-bold'>
            Today&apos;s Upcoming Meetings
          </h2>
          <SeeAllButton />
        </div>

        <CallGroups type='homepage' />
      </div>
    </main>
  );
}
