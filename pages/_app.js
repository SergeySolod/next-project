import App from 'next/app'
import React from 'react'
import {Provider} from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import store from '../store/store'

class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props
    }
}