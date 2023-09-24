import React from 'react';

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength - 3) + '...';
  }
}

interface LimitTo {
  text: string;
}

function LimitTo({ text }: LimitTo): JSX.Element {
  const truncatedText = truncateText(text, 30);

  return (
    <div>
      {truncatedText}
    </div>
  );
}

export default LimitTo;