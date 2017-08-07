/**
*
* @title 这是标题
* @description 这是描述
*
*/
class Demo4 extends Component {
    render () {
        return (
            <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<Icon type="uf-time-c-o" style={{ fontSize: '16px' }} />} color="danger">Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
        )
    }
}


