import CallGroups from "@/components/call-groups";

const UpcomingPage = () => {
  return (
    <section className='h-full flex flex-col'>
      <h1 className='font-semibold text-2xl tracking-tight'>
        Upcoming Meetings
      </h1>

      <CallGroups type="upcoming"/>
    </section>
  );
};

export default UpcomingPage;
