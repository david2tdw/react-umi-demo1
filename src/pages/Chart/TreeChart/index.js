import React from 'react'
import {connect} from 'dva'

import Tree from '@/components/D3Chart/Tree'


class TreeChart extends React.Component {
  render () {
    const {dataset, dispatch, loading} = this.props;
    const handleClick = (name) => {
      dispatch({
        type: 'tree/getData',
        payload: {
          name,
        }
      })
    }
    return (
      <Tree 
        data={dataset}
        nodeClick={(d) => {
          const {data: {name}} = d;
          handleClick(name);
        }}
        maxDepth={5}
        siderbarClick={(d) => {
          console.log(d)
        }}
        routerCliick={(d) => {
          const { value } = d;
          handleClick(value);
        }}
      />
    );
  }
}

// export default TreeChart
// connect参数为namespace
export default connect(({tree}) => {
  return {
    ...tree
  }
})(TreeChart);
