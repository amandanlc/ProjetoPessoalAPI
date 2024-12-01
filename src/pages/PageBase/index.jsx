import Header from '../../components/Header'
import Container from '../../components/Container'
import { Outlet } from 'react-router-dom'

function PageBase() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </main>
    )
}

export default PageBase
