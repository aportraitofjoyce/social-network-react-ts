import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";


export function App() {
    return (
        <div className={'App'}>
            <Header/>
            <Content/>
        </div>
    )
}


/*
type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}*/


{/*<PageTitle title={'Social Network'}/>
            <Accordion title={'First Accordion Title'} collapsed={false}/>
            <Accordion title={'Second Accordion Title'} collapsed={true}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <PageTitle title={'React JS'}/>*/
}