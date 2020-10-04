// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorComponent from './ErrorComponent'
import './styles.css'

const app = document.getElementById('app')
if (app) {
  ReactDOM.render(
    <React.StrictMode>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
    app
  )
}
