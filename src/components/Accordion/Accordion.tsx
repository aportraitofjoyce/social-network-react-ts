import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    return props.collapsed ? (
        <div className={'accordion'}>
            <AccordionTitle accordionTitle={props.title}/>
        </div>
    ) : (
        <div className={'accordion'}>
            <AccordionTitle accordionTitle={props.title}/>
            <AccordionBody/>
        </div>
    )
}


type AccordionTitlePropsType = {
    accordionTitle: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.accordionTitle}</h3>
}


function AccordionBody() {
    return (
        <div>
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
        </div>
    )
}


export default Accordion;