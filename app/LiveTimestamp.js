'use client';

import TimeAgo from 'react-timeago';

function LiveTimestamp({ time }) {
  return <TimeAgo data={time} />;
}

export default LiveTimestamp;
