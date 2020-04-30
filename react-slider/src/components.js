// @flow weak

import React, { Fragment } from "react";
import PropTypes from "prop-types";

// *******************************************************
// RAIL
// *******************************************************
const railOuterStyle = {
    position: "absolute",
    width: "100%",
    height: 42,
    transform: "translate(0%, -50%)",
    borderRadius: 7,
    cursor: "pointer"
    // border: '1px solid white',
};

const railInnerStyle = {
    position: "absolute",
    width: "100%",
    height: 14,
    transform: "translate(0%, -50%)",
    borderRadius: 7,
    pointerEvents: "none",
    backgroundColor: "rgb(155,155,155)"
};

export function SliderRail({ getRailProps }) {
    return (
        <Fragment>
            <div style={railOuterStyle} {...getRailProps()} />
            <div style={railInnerStyle} />
        </Fragment>
    );
}

SliderRail.propTypes = {
    getRailProps: PropTypes.func.isRequired
};

// *******************************************************
// HANDLE COMPONENT
// *******************************************************
export function Handle({
                           domain: [min, max],
                           handle: { id, value, percent },
                           disabled,
                           getHandleProps
                       }) {
    if (percent >= 0 && percent <=8) {
        percent = 0; // 0
    } else if(percent > 8 && percent <= 23) {
        percent = 16; // 50
    } else if (percent > 23 && percent <= 40) {
        percent = 32; // 100
    } else if (percent > 40 && percent <= 55) {
        percent = 48; //200
    } else if (percent > 55 && percent <= 70) {
        percent = 64; //300
    } else if (percent > 70 && percent <= 90) {
        percent = 80; //500
    } else if (percent > 90 && percent <= 100) {
        percent = 100; //1000
    }
    return (
        <Fragment>
            <div
                style={{
                    left: `${percent}%`,
                    position: "absolute",
                    transform: "translate(-50%, -50%)",
                    WebkitTapHighlightColor: "rgba(0,0,0,0)",
                    zIndex: 5,
                    width: 28,
                    height: 42,
                    cursor: "pointer",
                    // border: '1px solid white',
                    backgroundColor: "none"
                }}
                {...getHandleProps(id)}
            />
            <div
                role="slider"
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={value}
                style={{
                    left: `${percent}%`,
                    position: "absolute",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",
                    backgroundColor: disabled ? "#666" : "#ffc400"
                }}
            />
        </Fragment>
    );
}


Handle.propTypes = {
    domain: PropTypes.array.isRequired,
    handle: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired
    }).isRequired,
    getHandleProps: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

Handle.defaultProps = {
    disabled: false
};

// *******************************************************
// KEYBOARD HANDLE COMPONENT
// Uses a button to allow keyboard events
// *******************************************************
export function KeyboardHandle({
                                   domain: [min, max],
                                   handle: { id, value, percent },
                                   disabled,
                                   getHandleProps
                               }) {
    return (
        <button
            role="slider"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            style={{
                left: `${percent}%`,
                position: "absolute",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                width: 24,
                height: 24,
                borderRadius: "50%",
                boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",
                backgroundColor: disabled ? "#666" : "#ffc400"
            }}
            {...getHandleProps(id)}
        />
    );
}

KeyboardHandle.propTypes = {
    domain: PropTypes.array.isRequired,
    handle: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired
    }).isRequired,
    getHandleProps: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

KeyboardHandle.defaultProps = {
    disabled: false
};

// *******************************************************
// TRACK COMPONENT
// *******************************************************
export function Track({ source, target, getTrackProps, disabled }) {
    console.log("hello" + source.percent)
    console.log(target.percent)

    if (source.percent >= 0 && source.percent <=8) {
        source.percent = 0; // 0
    } else if(source.percent > 8 && source.percent <= 23) {
        source.percent = 16; // 50
    } else if (source.percent > 23 && source.percent <= 40) {
        source.percent = 32; // 100
    } else if (source.percent > 40 && source.percent <= 55) {
        source.percent = 48; //200
    } else if (source.percent > 55 && source.percent <= 70) {
        source.percent = 64; //300
    } else if (source.percent > 70 && source.percent <= 90) {
        source.percent = 80; //500
    } else if (source.percent > 90 && source.percent <= 100) {
        source.percent = 100; //1000
    }

    if (target.percent >= 0 && target.percent <=8) {
        target.percent = 0; // 0
    } else if(target.percent > 8 && target.percent <= 23) {
        target.percent = 16; // 50
    } else if (target.percent > 23 && target.percent <= 40) {
        target.percent = 32; // 100
    } else if (target.percent > 40 && target.percent <= 55) {
        target.percent = 48; //200
    } else if (target.percent > 55 && target.percent <= 70) {
        target.percent = 64; //300
    } else if (target.percent > 70 && target.percent <= 90) {
        target.percent = 80; //500
    } else if (target.percent > 90 && target.percent <= 100) {
        target.percent = 100; //1000
    }
    return (
        <div
            style={{
                position: "absolute",
                transform: "translate(0%, -50%)",
                height: 14,
                zIndex: 1,
                backgroundColor: disabled ? "#999" : "#b28900",
                borderRadius: 7,
                cursor: "pointer",
                left: `${source.percent}%`,
                width: `${target.percent - source.percent}%`
            }}
            {...getTrackProps()}
        />
    );
}

Track.propTypes = {
    source: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired
    }).isRequired,
    target: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired
    }).isRequired,
    getTrackProps: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

Track.defaultProps = {
    disabled: false
};

// *******************************************************
// TICK COMPONENT
// *******************************************************
export function Tick({ tick, count, format }) {
    return (
        <div>
            <div
                style={{
                    position: "absolute",
                    marginTop: 14,
                    width: 1,
                    height: 5,
                    backgroundColor: "rgb(200,200,200)",
                    left: `${tick.index == 6 ? 100 : tick.index*16}%`
                }}
            />
            <div
                style={{
                    position: "absolute",
                    marginTop: 22,
                    fontSize: 10,
                    textAlign: "center",
                    marginLeft: `${-(100 / count) / 2}%`,
                    width: `${100 / count}%`,
                    left: `${tick.index == 6 ? 100 : tick.index*16}%`
                }}
            >
                {format(tick.value)}명
            </div>
        </div>
    );
}

Tick.propTypes = {
    tick: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired
    }).isRequired,
    count: PropTypes.number.isRequired,
    format: PropTypes.func.isRequired
};

Tick.defaultProps = {
    format: d => d
};
