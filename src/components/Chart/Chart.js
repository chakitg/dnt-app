import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BarChart, Bar, ResponsiveContainer, XAxis, Tooltip} from "recharts";
import chartImg from '../../images/chart-img.png'
import './Chart.css';

class Chart extends Component {
    constructor(){
        super();
        this.state={
            data:[
                {Technology:'Java', Projects:100},
                {Technology:'Kotlin', Projects:40},
                {Technology:'Sql', Projects:90},
                {Technology:'Bootstrap', Projects:95},
                {Technology:'Jquery', Projects:60},
                {Technology:'React', Projects:90},
                {Technology:'PHP', Projects:100},
                {Technology:'Angular', Projects:65}
            ]
        }
    }
    render() {
        const green = "rgba(46, 204, 113,0.9)";
        return (
            <>
                <Container className="border-bottom" style={{marginTop:'8rem'}}>
                    <Row>
                        <Col lg={6} md={12} sm={12} style={{width:'100%', height:'330px'}}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology"/>
                                    <Tooltip/>
                                    <Bar dataKey="Projects" fill={green} >
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <img className="chart-img" src={chartImg} alt=""/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Chart;