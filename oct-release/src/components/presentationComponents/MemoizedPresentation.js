import React from 'react';
import MemoPresentation from './MemoPresentation';

const MemoizedPresentation = React.memo(props => {
  return (
    <div>
      {/* this thing will render if there is change in the props */}
      <MemoPresentation props withMemo={props.withMemo} />
    </div>
  );
});

export default MemoizedPresentation;
