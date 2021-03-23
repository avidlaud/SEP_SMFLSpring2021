import React, { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../../../styles/Portfolio/PortfolioChart.scss';

const PortfolioChartPage = () => {
    const [state, setState] = useState('start');
    const [username, setUsername] = useState('');
    const [league, setLeague] = useState('');
    const [days, setDays] = useState([]);
    const [prices, setPrices] = useState([]);
    const [accountValue, setAccountValue] = useState('');
    const [buyingPower, setBuyingPower] = useState('');
    const [totalReturn, setTotalReturn] = useState('');

    const getData = () => {
        setDays([]);
        setPrices([]);
        axios.get(`http://localhost:3000/portfolio/${league}/${username}`)
            .then((response) => {
                const { data } = response;
                for (let i = 0; i < data.netWorth.length; i += 1) {
                    /* eslint-disable */
                    setDays((days) => [...days, i]);
                    setPrices((prices) => [...prices, data.netWorth[i].worth]);
                    /* eslint-enable */
                }
                setAccountValue(data.currentNetWorth);
                setBuyingPower(data.cashAvailable);
                let returnTotal = data.netWorth[data.netWorth.length - 1].worth;
                returnTotal /= data.netWorth[0].worth;
                setTotalReturn(((returnTotal - 1) * 100).toFixed(3));
            })
            .catch((err) => console.error(err));
        setState('chart');
    };

    return (
        <div>
            <div>
                <h2>Portfolio Viewer (temporary form/still need to fix)</h2>
                <p>Type in username and league name for now for correct routing and scroll down</p>
                <Container className="portfolio-container">
                    <Form className="portfolio-form">
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label required>Username:</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicLeague">
                            <Form.Label required>League:</Form.Label>
                            <Form.Control type="text" placeholder="Enter league name" onChange={(e) => setLeague(e.target.value)} />
                        </Form.Group>
                        <Button onClick={getData}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
            <div>
                {state === 'chart' && (
                    <div className="portfolioInfo">
                        <h1>
                            Portfolio for&nbsp;
                            {league}
                        </h1>
                        <p>
                            <b>Account Value:&nbsp;</b>
                            $
                            {accountValue}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <b>Buying Power:&nbsp;</b>
                            $
                            {buyingPower}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <b>Total Return:&nbsp;</b>
                            {totalReturn}
                            %
                        </p>
                    </div>
                )}
            </div>
            <div>
                {state === 'chart' && (
                    <Line
                        data={{
                            labels: days,
                            datasets: [
                                {
                                    label: 'Net Worth($)',
                                    data: prices,
                                    borderColor: 'green',
                                    hoverBackgroundColor: 'red',
                                    fill: false,
                                    borderWidth: 1,
                                    lineTension: 0.1,
                                },
                            ],
                        }}
                        height={400}
                        width={600}
                        options={{
                            /* title: {
                                display: true,
                                text: `Portfolio for ${league}`,
                                fontSize: 25,
                            }, */
                            backgroundColor: 'white',
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [{
                                    gridLines: {
                                        color: 'white',
                                    },
                                    scaleLabel: {
                                        display: true,
                                        fontSize: 15,
                                        fontColor: 'white',
                                        fontStyle: 'bold',
                                        labelString: '$',
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                }],
                                xAxes: [{
                                    gridLines: {
                                        color: 'white',
                                    },
                                    scaleLabel: {
                                        display: true,
                                        fontSize: 15,
                                        fontColor: 'white',
                                        fontStyle: 'bold',
                                        labelString: 'Days',
                                    },
                                }],
                            },
                            legend: {
                                labels: {
                                    fontSize: 12,
                                },
                            },
                        }}
                    />

                )}
            </div>
        </div>
    );
};

export default PortfolioChartPage;
