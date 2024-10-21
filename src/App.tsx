import './styles.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'

function App() {
  return (
    <>
    <MainLayout>
        <BrowserRouter>
            <Routes>

            </Routes>
        </BrowserRouter>
    </MainLayout>
</>
  )
}

export default App
