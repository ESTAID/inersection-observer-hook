import React, { Suspense, lazy } from 'react'
import LocationObserver from './components/LocationObserver'
import './App.css'
import Content from './components/Content'
const ContentLazy = lazy(() => import('./components/Content'))
const Null = () => null
const App = () => {
  return (
    <div className="app">
      <Content />
      <LocationObserver
        onIntersection={() => {
          console.log('onIntersection1')
        }}
      >
        <Suspense fallback={<Null />}>
          <ContentLazy />
        </Suspense>
      </LocationObserver>
      <LocationObserver
        onIntersection={() => {
          console.log('onIntersection2')
        }}
      >
        <Suspense fallback={<Null />}>
          <ContentLazy />
        </Suspense>
      </LocationObserver>
    </div>
  )
}
export default App
