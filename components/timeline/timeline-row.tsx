import TimelinePost from './timeline-post';

const TimelineRow = () => {
  return (
    <div className="bg-red-400 px-8">
      <div className="flex flex-col md:flex-row gap-4">
        <TimelinePost />
        <TimelinePost />
        <TimelinePost />
      </div>
    </div>
  );
};

export default TimelineRow;
