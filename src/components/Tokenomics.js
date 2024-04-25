"use client";
import React, { useEffect, useRef } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const Tokenomics = () => {
    const chartRef = useRef(null);

    // useEffect(() => {
    //     let root = am5.Root.new(chartRef.current);

    //     root.setThemes([
    //         am5themes_Animated.new(root)
    //     ]);

    //     let chart = root.container.children.push(am5percent.PieChart.new(root, {
    //         innerRadius: am5.percent(50),
    //         layout: root.verticalLayout
    //     }));

    //     let series = chart.series.push(am5percent.PieSeries.new(root, {
    //         valueField: "size",
    //         categoryField: "sector"
    //     }));

    //     series.data.setAll([
    //         { sector: "Reserved for the SNS treasury", size: 45 },
    //         { sector: "To be distributed by the NNS run decentralisation swap", size: 28 },
    //         { sector: "Allocated to the team", size: 7 },
    //         { sector: "Allocated to investors", size: 5 },
    //         { sector: "Allocated to founders", size: 15 }
    //     ]);

    //     series.appear(1000, 100);

    //     return () => {
    //         root.dispose();
    //     };
    // }, []);
  
    useEffect(() => {
        let root = am5.Root.new(chartRef.current);
    
        root.setThemes([
            am5themes_Animated.new(root)
        ]);
    
        let chart = root.container.children.push(am5percent.PieChart.new(root, {
            innerRadius: am5.percent(50),
            layout: root.verticalLayout
        }));
    
        let series = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "size",
            categoryField: "sector"
        }));
    
        // Configuring labels to be outside and connected by lines
        series.labels.template.setAll({
            forceHidden: false,
            textType: "regular",
            inside: false,
            radius: 20
        });
    
        series.ticks.template.setAll({
            forceHidden: false,
            stroke: am5.color(0xffffff), // white arrows
            strokeWidth: 2,
            length: 20 // Length of the tick line (arrow)
        });
    
        series.labels.template.set("text", "{category}: {value.percent.formatNumber('#.0')}");
        series.labels.template.set("fill", am5.color(0xffffff)); // White text
    
        series.data.setAll([
            { sector: "Reserved for the SNS treasury", size: 45 },
            { sector: " NNS decentralisation swap", size: 28 },
            { sector: "Allocated to the team", size: 7 },
            { sector: "Allocated to investors", size: 5 },
            { sector: "Allocated to founders", size: 15 }
        ]);
    
        series.appear(1000, 100);
    
        return () => {
            root.dispose();
        };
    }, []);
    
    

    return (
        <div className="overflow-hidden" id='tokenomics'>
            <div className="container">
                <div className="section-title mb-45">
                    <h1 className="title">Tokenomics</h1>
                </div>
                <div className="tokenomics-chart" style={{ display: "flex", justifyContent: "center" }}>
                    <div ref={chartRef} style={{ width: "100%", height: "500px" }}></div>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;
