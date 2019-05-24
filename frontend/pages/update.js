import React from 'react';
import UpdateItem from '../components/UpdateItem';

export default function Sell(props) {
  return (
    <div>
      <UpdateItem id={props.query.id} />
    </div>
  );
}
