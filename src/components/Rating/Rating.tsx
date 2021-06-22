import React from "react";

type RatingPropsType = {
    // Instead number we can set fixed values
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    // Replace many if else declarations
    return props.value === 1 ? (
        <div className={'rating'}>
            <Stars selected={true}/>
            <Stars selected={false}/>
            <Stars selected={false}/>
            <Stars selected={false}/>
            <Stars selected={false}/>
        </div>
    ) : props.value === 2 ? (
        <div className={'rating'}>
            <Stars selected={true}/>
            <Stars selected={true}/>
            <Stars selected={false}/>
            <Stars selected={false}/>
            <Stars selected={false}/>
        </div>
    ) : props.value === 3 ? (
        <div className={'rating'}>
            <Stars selected={true}/>
            <Stars selected={true}/>
            <Stars selected={true}/>
            <Stars selected={false}/>
            <Stars selected={false}/>
        </div>
    ) : props.value === 4 ? (
        <div className={'rating'}>
            <Stars selected={true}/>
            <Stars selected={true}/>
            <Stars selected={true}/>
            <Stars selected={true}/>
            <Stars selected={false}/>
        </div>
    ) : props.value === 5 ? (
        <div className={'rating'}>
            <Stars selected={true}/>
            <Stars selected={true}/>
            <Stars selected={true}/>
            <Stars selected={true}/>
            <Stars selected={true}/>
        </div>
    ) : (
        <div className={'rating'}>
            <Stars selected={false}/>
            <Stars selected={false}/>
            <Stars selected={false}/>
            <Stars selected={false}/>
            <Stars selected={false}/>
        </div>
    )
}

type StarsPropsType = {
    selected: boolean
}

function Stars(props: StarsPropsType) {
    // Replace if props.selected === true....
    return props.selected ? (<span><b>star </b></span>) : (<span>star </span>);
}

