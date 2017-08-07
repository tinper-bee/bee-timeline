
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Timeline from '../src';
import Icon from 'bee-icon';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


/**
*
* @title 这是标题
* @description 这是描述
*
*/
class Demo1 extends Component {
    render () {
        return (
            <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
        )
    }
}

/**
*
* @title 这是标题
* @description 这是描述
*
*/
class Demo2 extends Component {
    render () {
        return (
            <Timeline>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="red">
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
            </Timeline>
        )
    }
}

/**
*
* @title 这是标题
* @description 这是描述
*
*/
class Demo3 extends Component {
    render () {
        return (
            <Timeline pending={<a href="#">See more</a>}>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            </Timeline>
        )
    }
}


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
                <Timeline.Item dot={<Icon type="uf-time-c-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
        )
    }
}


var DemoArray = [{"example":<Demo1 />,"title":" 这是标题","code":"/**\n*\n* @title 这是标题\n* @description 这是描述\n*\n*/\nclass Demo1 extends Component {\n    render () {\n        return (\n            <Timeline>\n                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>\n                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>\n                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>\n            </Timeline>\n        )\n    }\n}\n\n","desc":" 这是描述"},{"example":<Demo2 />,"title":" 这是标题","code":"/**\n*\n* @title 这是标题\n* @description 这是描述\n*\n*/\nclass Demo2 extends Component {\n    render () {\n        return (\n            <Timeline>\n                <Timeline.Item color=\"green\">Create a services site 2015-09-01</Timeline.Item>\n                <Timeline.Item color=\"green\">Create a services site 2015-09-01</Timeline.Item>\n                <Timeline.Item color=\"red\">\n                    <p>Solve initial network problems 1</p>\n                    <p>Solve initial network problems 2</p>\n                    <p>Solve initial network problems 3 2015-09-01</p>\n                </Timeline.Item>\n                <Timeline.Item>\n                    <p>Technical testing 1</p>\n                    <p>Technical testing 2</p>\n                    <p>Technical testing 3 2015-09-01</p>\n                </Timeline.Item>\n            </Timeline>\n        )\n    }\n}\n\n","desc":" 这是描述"},{"example":<Demo3 />,"title":" 这是标题","code":"/**\n*\n* @title 这是标题\n* @description 这是描述\n*\n*/\nclass Demo3 extends Component {\n    render () {\n        return (\n            <Timeline pending={<a href=\"#\">See more</a>}>\n                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>\n                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>\n            </Timeline>\n        )\n    }\n}\n\n\n","desc":" 这是描述"},{"example":<Demo4 />,"title":" 这是标题","code":"/**\n*\n* @title 这是标题\n* @description 这是描述\n*\n*/\nclass Demo4 extends Component {\n    render () {\n        return (\n            <Timeline>\n                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>\n                <Timeline.Item dot={<Icon type=\"uf-time-c-o\" style={{ fontSize: '16px' }} />} color=\"red\">Technical testing 2015-09-01</Timeline.Item>\n                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>\n            </Timeline>\n        )\n    }\n}\n\n\n","desc":" 这是描述"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
