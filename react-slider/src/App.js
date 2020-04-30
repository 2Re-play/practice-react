import React, { useState } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./components"; // example render components - source below

const sliderStyle = {
    position: "relative",
    width: "100%"
};

const domain = [0, 1000];
const defaultValues = [0, 1000];

function App (){
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(1000);

    const onChange = (arr) => {
        if (arr[0] >= 0 && arr[0] <=80) {
            arr[0] = 0; // 0
        } else if(arr[0] > 80 && arr[0] <= 230) {
            arr[0] = 50; // 50
        } else if (arr[0] > 230 && arr[0] <= 400) {
            arr[0] = 100; // 100
        } else if (arr[0] > 400 && arr[0] <= 550) {
            arr[0] = 200; //200
        } else if (arr[0] > 550 && arr[0] <= 700) {
            arr[0] = 300; //300
        } else if (arr[0] > 700 && arr[0] <= 900) {
            arr[0] = 500; //500
        } else if (arr[0] > 900 && arr[0] <= 1000) {
            arr[0] = 1000; //1000
        }
        if (arr[1] >= 0 && arr[1] <=80) {
            arr[1] = 0; // 0
        } else if(arr[1] > 80 && arr[1] <= 230) {
            arr[1] = 50; // 50
        } else if (arr[1] > 230 && arr[1] <= 400) {
            arr[1] = 100; // 100
        } else if (arr[1] > 400 && arr[1] <= 550) {
            arr[1] = 200; //200
        } else if (arr[1] > 550 && arr[1] <= 700) {
            arr[1] = 300; //300
        } else if (arr[1] > 700 && arr[1] <= 900) {
            arr[1] = 500; //500
        } else if (arr[1] > 900 && arr[1] <= 1000) {
            arr[1] = 1000; //1000
        }
      setMinValue(arr[0]);
      setMaxValue(arr[1]);
    }

    const data = [
        {"id":"$$-0","value":0,"percent":0, "index" : 0},
        {"id":"$$-50","value":50,"percent":5, "index" : 1},
        {"id":"$$-100","value":100,"percent":10, "index" : 2},
        {"id":"$$-200","value":200,"percent":20, "index" : 3},
        {"id":"$$-300","value":300,"percent":30, "index" : 4},
        {"id":"$$-500","value":500,"percent":50, "index" : 5},
        {"id":"$$-1000","value":1000,"percent":100, "index" : 6}]

    return (
        <div style={{ margin: "10%", height: 120, width: "80%" }}>
            <h2>min : {minValue}</h2>
            <h2>max : {maxValue}</h2>
            <Slider
                mode={2}
                step={1}
                domain={domain}
                rootStyle={sliderStyle}
                onChange={onChange}
                values={defaultValues}
            >

                <Rail>
                    {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                </Rail>
                <Handles>
                    {({ handles, getHandleProps }) => {
                        console.log(handles)
                        return (<div className="slider-handles">
                                {handles.map((handle) => (
                                    <Handle
                                        key={handle.id}
                                        handle={handle}
                                        domain={domain}
                                        getHandleProps={getHandleProps}
                                    />
                                ))}
                            </div>
                        )}}
                </Handles>
                <Tracks left={false} right={false}>
                    {({ tracks, getTrackProps }) => (
                        <div className="slider-tracks">
                            {tracks.map(({ id, source, target }) => (
                                <Track
                                    key={id}
                                    source={source}
                                    target={target}
                                    getTrackProps={getTrackProps}
                                />
                            ))}
                        </div>
                    )}
                </Tracks>
                <Ticks count={7}>
                    {() => {
                        return (<div className="slider-ticks">
                            {data.map(tick => (
                                <Tick key={tick.id} tick={tick} count={data.length} />
                            ))}
                        </div>);
                    }}
                </Ticks>
            </Slider>
        </div>
    );

}

export default App;
