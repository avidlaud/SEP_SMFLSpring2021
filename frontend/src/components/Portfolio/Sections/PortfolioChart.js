import React, { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Tab, Tabs } from 'react-bootstrap';
import '../../../styles/Portfolio/PortfolioChart.scss';

const PortfolioChartPage = () => {
    sessionStorage.setItem('username', 'chris'); /* take out this line */
    const username = sessionStorage.getItem('username');
    const [state, setState] = useState('start');
    const [league, setLeague] = useState('');
    const [days, setDays] = useState([]);
    const [prices, setPrices] = useState([]);
    const [holdings, setHoldings] = useState([]);
    const [accountValue, setAccountValue] = useState('');
    const [buyingPower, setBuyingPower] = useState('');
    const [totalReturn, setTotalReturn] = useState('');

    const getData = () => {
        setDays([]);
        setPrices([]);
        setHoldings([]);
        axios.get(`http://localhost:3000/user/${username}/league`)
            .then((response) => {
                const { data } = response;
                // portfolio graph
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
                // positions
                for (let i = 0; i < data.holdings.length; i += 1) {
                    /* eslint-disable */
                    setHoldings((holdings) => [...holdings, data.holdings[i]])
                    /* eslint-enable */
                }
            })
            .catch((err) => console.error(err));
        setState('chart');
    };

    return (
        <div>
            <div>
                <h2>Portfolio</h2>
                <p>Enter username/league, click button and scroll for portfolio information.</p>
            </div>
            <div className="portfolio">
                {state === 'chart' && (
                    <div className="portfolioInfo">
                        <h1>
                            Portfolio for&nbsp;
                            <b>{league}</b>
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
            <div className="lineChart">
                {state === 'chart' && (
                    <Tabs defaultActiveKey="profile">
                        <Tab eventKey="1d" title="1D">
                            <Line
                                data={{
                                    labels: days,
                                    datasets: [
                                        {
                                            label: 'Net Worth($)',
                                            data: prices,
                                            borderColor: 'rgba(98, 252, 3, 1)',
                                            hoverBackgroundColor: 'blue',
                                            fill: false,
                                            borderWidth: 1,
                                            lineTension: 0.1,
                                        },
                                    ],
                                }}
                                height={400}
                                width={600}
                                options={{
                                    backgroundColor: 'white',
                                    maintainAspectRatio: false,
                                    tooltips: {
                                        backgroundColor: 'blue',
                                    },
                                    scales: {
                                        yAxes: [{
                                            gridLines: {
                                                color: 'gray',
                                                zeroLineColor: 'white',
                                            },
                                            scaleLabel: {
                                                display: true,
                                                fontSize: 15,
                                                fontColor: 'white',
                                                fontStyle: 'bold',
                                                labelString: '$',
                                            },
                                            ticks: {
                                                fontColor: 'white',
                                            },
                                        }],
                                        xAxes: [{
                                            gridLines: {
                                                color: 'gray',
                                                zeroLineColor: 'white',
                                            },
                                            scaleLabel: {
                                                display: true,
                                                fontSize: 15,
                                                fontColor: 'white',
                                                fontStyle: 'bold',
                                                labelString: 'Days',
                                            },
                                            ticks: {
                                                fontColor: 'white',
                                            },
                                        }],
                                    },
                                    legend: {
                                        labels: {
                                            fontSize: 12,
                                            fontColor: 'white',
                                        },
                                    },
                                }}
                            />
                        </Tab>
                    </Tabs>
                )}
            </div>
            <div className="positions-title">
                {state === 'chart' && (
                    <h1>Current Positions</h1>
                )}
            </div>
            <div className="positions">
                {state === 'chart' && (
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Ticker Symbol</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                holdings.map((item) => (
                                    <tr>
                                        <td>{item.ticker}</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                )}
            </div>
        </div>
    );
};

export default PortfolioChartPage;
