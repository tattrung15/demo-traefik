import React from "react";

class CounterItem extends React.Component {
  render() {
    const { count } = this.props;

    return (
      <>
        <p>{count}</p>
      </>
    );
  }
}

export default CounterItem;
