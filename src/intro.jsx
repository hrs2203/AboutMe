import './style/intro.css'
import meImage from './static/me.jpeg'
import { Col, Row, Image } from 'antd';

const IntorElement = () => {
    return (
        <div className="div-padder">
            <Row>
                <Col span={16}>
                    <div style={{ 'padding-right': "20px", "alignContent": "space-around" }}>
                        <h2>Introduction</h2>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iusto obcaecati, eaque non incidunt enim accusamus aliquam soluta natus quo dolorum voluptates odit laboriosam minus inventore deserunt? A, modi numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iusto obcaecati, eaque non incidunt enim accusamus aliquam soluta natus quo dolorum voluptates odit laboriosam minus inventore deserunt? A, modi numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iusto obcaecati, eaque non incidunt enim accusamus aliquam soluta natus quo dolorum voluptates odit laboriosam minus inventore deserunt? A, modi numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iusto obcaecati, eaque non incidunt enim accusamus aliquam soluta natus quo dolorum voluptates odit laboriosam minus inventore deserunt? A, modi numquam!
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className='image-box'>
                        <Image src={meImage} preview={false} />
                    </div>
                </Col>
            </Row>


        </div>
    )
}

export default IntorElement