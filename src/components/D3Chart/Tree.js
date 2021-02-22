import React from 'react'
import * as d3 from 'd3'

//1.文字超界处理
export default class TreeComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fontSize: 12,
      treeData: {},
    }
  }

  static defaultProps = {
    style: {},
    maxDepth: 5,
    width: 1200,
    height: 1200,
    sidebarWidth: 36,
    radius: 6, // 圆角平滑
    nodeWidth: { //传参null就按字数设置宽度
      _0: 160,
      _1: 160,
      _2: 160,
      _3: 160,
      _4: 160,
      _5: 160,
    }, // 默认节点宽度
    nodeHeight: 50, // 节点rect高度
    modelWidth: {
      _0: 180,
      _1: 180,
      _2: 180,
      _3: 180,
      _4: 180,
      _5: 180,
    },
    modelHeight: 80,
    gridPading: {
      top: 80,
      right: 220,
      bottom: 10,
      left: 20,
    },
    selector: null, //挂载元素
    fontNum: 1, //设置字体大小因子
    fontColor: { //字体颜色
      normal: "#fff",
      warning: '#e3e3e1',
      error: "#f00"
    },
    bgColor: {//node节点颜色
      normal: "#35ad5b",
      warning: "#e3e3e1",
      error: "#f00"
    },
    nodeColor: '#1F90E2',
    pathColor: '#35ad5b',
    data: {},
    router: {
      baseWidth: 40,
      arrowHeight: 30,
      gap: 10,
      paddingTop: 10,
    },
    routerClick: () => {},
    nodeClick: () => {},
    siderbarClick: () => {},
  }
  drawInit (dom) {
    console.log('drawinit')
    const {width, height, gridPading, } = this.props;
    const svg = d3.select(dom)
      .append('svg')
      .attr("width", width)
      .attr("height", height)
      .style('border', '1px solid #333')
    console.log(svg)
    const routeGroup = svg.append('g')
      .attr('transform', `translate(0,0)`)
    const contentGroup = svg.append('g')
      .attr('transform', `translate(${gridPading.left}, ${gridPading.top})`);
    // const {nodes, links} = this.getTreeData();
    this.getTreeData()
  }

  getTreeData () {
    const {width, height, gridPading, data, maxDepth} = this.props;
    console.log('getTreeData', data)
    const depthFilter = (children, depth, n = 1) => {
      const [item] = children.filter(item => item.children && item.children.length > 0)
      if (depth !== undefined && n > depth) {
        return {
          item,
          depth: n,
        }
      }
      if (item) {
        const {children} = item;
        return depthFilter(children, depth, ++n);
      }
      return {
        item,
        depth: n,
      }
    }
    const {depth} = depthFilter([data], undefined);
    const {item: dataSource} = depthFilter([data], depth - maxDepth)
    // 创建一个树状图
    const d3Tree = d3.tree()
      .size([width - gridPading.top - gridPading.bottom, height - gridPading.right - gridPading.left])
      .separation((a, b) => {
        //适应radial布局，可以简单的理解为深度越高，相邻子节点之间的距离越小。
        return a.parent === b.parent ? 1: 1;
      })
    // 创建一个层级布局
    const hierarchyData = d3.hierarchy(dataSource)
      .sum(function (d) {
        return d.value;
      })
    // 初始化树状图，传入数据得到绘制树的基本数据
    const treeData = d3Tree(hierarchyData);
    const nodes = treeData.descendants();
    const links = treeData.links();
    return {
      nodes,
      links,
    }
  }


  componentDidMount () {
    this.drawInit(this.dom)
  }
  componentDidUpdate () {
    this.dom.innerHTML = ''
    this.drawInit(this.dom)
  }

  render () {
    const {style} = this.props
    console.log('render.....')
    return (
      <div ref={dom => this.dom = dom} style={style}></div>
    )
  }

}