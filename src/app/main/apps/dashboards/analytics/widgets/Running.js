import React, {useState, useEffect} from 'react';
import {Grid, Paper, Container} from '@material-ui/core';
import Widget4 from './Widget4';
export default function Running() {
    const [running, setRunning] = useState([]);

    useEffect(() => {
        // const interval = setInterval(() => {
            // fetch("http://localhost:5000/getLiveRunning").then(
            //     response => response.json().then(
            //         data => {
            //             let a = [];
            //             for (const item in data) {
            //                 a.push(data[item])
            //             }
            //             setRunning(a);
            //         }
            //     )
            // ); 
            const a = [{
                numbersOfHeaders:"Number Audio Files",
                visits:{
                    value: 0,
		            ofTarget: 13,
                }, 
	            chartType: "bar",
                datasets: [
                    { label: "visits", data: [333,343,233,12,43,343,] }
                ],
	            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                options: {
                    spanGaps: false,
                    legend: {
                        display: false,
                    },
		        maintainAspectRatio: false,
                    layout: {
                        padding: {
                            top: 24,
				            left: 16,
				            right: 16,
				            bottom: 16
                        }
                    },
                    scales: {
                        xAxes: [
                            { display: false }
                        ],
                        yAxes: [
                            {
                                display: false,
                                ticks: { min: 100, max: 500 }
                            }
                        ]
                }
                }
            },
                {
                    numbersOfHeaders: "Number pages with Audio Files",
                    visits: {
                        value: 0,
                        ofTarget: 13,
                    },
                    chartType: "bar",
                    datasets: [
                        { label: "visits", data: [333, 343, 233, 12, 43, 343,] }
                    ],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    options: {
                        spanGaps: false,
                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                left: 16,
                                right: 16,
                                bottom: 16
                            }
                        },
                        scales: {
                            xAxes: [
                                { display: false }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    ticks: { min: 100, max: 500 }
                                }
                            ]
                        }
                    }
                },
                {
                    numbersOfHeaders: "Number of Docs",
                    visits: {
                        value: 0,
                        ofTarget: 13,
                    },
                    chartType: "bar",
                    datasets: [
                        { label: "visits", data: [333, 343, 233, 12, 43, 343,] }
                    ],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    options: {
                        spanGaps: false,
                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                left: 16,
                                right: 16,
                                bottom: 16
                            }
                        },
                        scales: {
                            xAxes: [
                                { display: false }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    ticks: { min: 100, max: 500 }
                                }
                            ]
                        }
                    }
                },
                {
                    numbersOfHeaders: "Number of PPT",
                    visits: {
                        value: 0,
                        ofTarget: 13,
                    },
                    chartType: "bar",
                    datasets: [
                        { label: "visits", data: [333, 343, 233, 12, 43, 343,] }
                    ],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    options: {
                        spanGaps: false,
                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                left: 16,
                                right: 16,
                                bottom: 16
                            }
                        },
                        scales: {
                            xAxes: [
                                { display: false }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    ticks: { min: 100, max: 500 }
                                }
                            ]
                        }
                    }
                },
                {
                    numbersOfHeaders: "Number of PDF",
                    visits: {
                        value: 0,
                        ofTarget: 13,
                    },
                    chartType: "bar",
                    datasets: [
                        { label: "visits", data: [333, 343, 233, 12, 43, 343,] }
                    ],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    options: {
                        spanGaps: false,
                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                left: 16,
                                right: 16,
                                bottom: 16
                            }
                        },
                        scales: {
                            xAxes: [
                                { display: false }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    ticks: { min: 100, max: 500 }
                                }
                            ]
                        }
                    }
                },
                {
                    numbersOfHeaders: "Number  of Flash Files",
                    visits: {
                        value: 0,
                        ofTarget: 13,
                    },
                    chartType: "bar",
                    datasets: [
                        { label: "visits", data: [333, 343, 233, 12, 43, 343,] }
                    ],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    options: {
                        spanGaps: false,
                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                left: 16,
                                right: 16,
                                bottom: 16
                            }
                        },
                        scales: {
                            xAxes: [
                                { display: false }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    ticks: { min: 100, max: 500 }
                                }
                            ]
                        }
                    }
                },
                {
                    numbersOfHeaders: "Number of Files",
                    visits: {
                        value: 0,
                        ofTarget: 0,
                    },
                    chartType: "bar",
                    datasets: [
                        { label: "visits", data: [333, 343, 233, 12, 43, 343,] }
                    ],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    options: {
                        spanGaps: false,
                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                left: 16,
                                right: 16,
                                bottom: 16
                            }
                        },
                        scales: {
                            xAxes: [
                                { display: false }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    ticks: { min: 100, max: 500 }
                                }
                            ]
                        }
                    }
                },
                {
                    numbersOfHeaders: "Total Number of images",
                    visits: {
                        value: 413,
                        ofTarget: 0,
                    },
                    chartType: "bar",
                    datasets: [
                        { label: "visits", data: [333, 343, 233, 12, 43, 343,] }
                    ],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    options: {
                        spanGaps: false,
                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                left: 16,
                                right: 16,
                                bottom: 16
                            }
                        },
                        scales: {
                            xAxes: [
                                { display: false }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    ticks: { min: 100, max: 500 }
                                }
                            ]
                        }
                    }
                },
                {
                    numbersOfHeaders: "Number of pages with images",
                    visits: {
                        value: 5,
                        ofTarget: 0,
                    },
                    chartType: "bar",
                    datasets: [
                        { label: "visits", data: [333, 343, 233, 12, 43, 343,] }
                    ],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    options: {
                        spanGaps: false,
                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                left: 16,
                                right: 16,
                                bottom: 16
                            }
                        },
                        scales: {
                            xAxes: [
                                { display: false }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    ticks: { min: 100, max: 500 }
                                }
                            ]
                        }
                    }
                },
                {
                    numbersOfHeaders: "Number of images with alt tag",
                    visits: {
                        value: 382,
                        ofTarget: 0,
                    },
                    chartType: "bar",
                    datasets: [
                        { label: "visits", data: [333, 343, 233, 12, 43, 343,] }
                    ],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    options: {
                        spanGaps: false,
                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                left: 16,
                                right: 16,
                                bottom: 16
                            }
                        },
                        scales: {
                            xAxes: [
                                { display: false }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    ticks: { min: 100, max: 500 }
                                }
                            ]
                        }
                    }
                },
                {
                    numbersOfHeaders: "Number of images without alt tag",
                    visits: {
                        value: 31,
                        ofTarget: 0,
                    },
                    chartType: "bar",
                    datasets: [
                        { label: "visits", data: [333, 343, 233, 12, 43, 343,] }
                    ],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    options: {
                        spanGaps: false,
                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                left: 16,
                                right: 16,
                                bottom: 16
                            }
                        },
                        scales: {
                            xAxes: [
                                { display: false }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    ticks: { min: 100, max: 500 }
                                }
                            ]
                        }
                    }
                },
                {
                    numbersOfHeaders: "Number of pages without h1 tags",
                    visits: {
                        value: 5,
                        ofTarget: 0,
                    },
                    chartType: "bar",
                    datasets: [
                        { label: "visits", data: [333, 343, 233, 12, 43, 343,] }
                    ],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    options: {
                        spanGaps: false,
                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                left: 16,
                                right: 16,
                                bottom: 16
                            }
                        },
                        scales: {
                            xAxes: [
                                { display: false }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    ticks: { min: 100, max: 500 }
                                }
                            ]
                        }
                    }
                },
                {
                    numbersOfHeaders: "Number of pages without h2 tags",
                    visits: {
                        value: 5,
                        ofTarget: 0,
                    },
                    chartType: "bar",
                    datasets: [
                        { label: "visits", data: [333, 343, 233, 12, 43, 343,] }
                    ],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    options: {
                        spanGaps: false,
                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                left: 16,
                                right: 16,
                                bottom: 16
                            }
                        },
                        scales: {
                            xAxes: [
                                { display: false }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    ticks: { min: 100, max: 500 }
                                }
                            ]
                        }
                    }
                },
                {
                    numbersOfHeaders: "Number of pages without h3 tags",
                    visits: {
                        value: 3,
                        ofTarget: 0,
                    },
                    chartType: "bar",
                    datasets: [
                        { label: "visits", data: [333, 343, 233, 12, 43, 343,] }
                    ],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    options: {
                        spanGaps: false,
                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                left: 16,
                                right: 16,
                                bottom: 16
                            }
                        },
                        scales: {
                            xAxes: [
                                { display: false }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    ticks: { min: 100, max: 500 }
                                }
                            ]
                        }
                    }
                },
                {
                    numbersOfHeaders: "Number of pages without h4 tags",
                    visits: {
                        value: 3,
                        ofTarget: 0,
                    },
                    chartType: "bar",
                    datasets: [
                        { label: "visits", data: [333, 343, 233, 12, 43, 343,] }
                    ],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    options: {
                        spanGaps: false,
                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                left: 16,
                                right: 16,
                                bottom: 16
                            }
                        },
                        scales: {
                            xAxes: [
                                { display: false }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    ticks: { min: 100, max: 500 }
                                }
                            ]
                        }
                    }
                },
                {
                    numbersOfHeaders: "Number of pages without h5 tags",
                    visits: {
                        value: 3,
                        ofTarget: 0,
                    },
                    chartType: "bar",
                    datasets: [
                        { label: "visits", data: [333, 343, 233, 12, 43, 343,] }
                    ],
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    options: {
                        spanGaps: false,
                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                top: 24,
                                left: 16,
                                right: 16,
                                bottom: 16
                            }
                        },
                        scales: {
                            xAxes: [
                                { display: false }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    ticks: { min: 100, max: 500 }
                                }
                            ]
                        }
                    }
                }

            ]
   
   
            setRunning(a);
        // }, 500);

        // return () => clearInterval(interval);
    }, []);


    return (


            running.map((item) => (
                /*{ <Paper style={{
                    padding: 30,
                    display: 'flex',
                    overflow: 'auto',
                    flexDirection: 'column'
                }}>
                    home_url: {item.home_url}<br/>
                    browser: {item.browser}<br/>
                    resolution: {item.resolution}<br/>
                    pages: {item.number_of_pages_scraped}
                </Paper> */

                <div className = "widget flex w-full sm:w-1/4 p-16" >
                    <Widget4 data={item} />
                </div>
                            
    ))

    )
} 