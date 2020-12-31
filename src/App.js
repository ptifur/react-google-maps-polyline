import './App.css'
import Main from './components/Main'
import Trails from './components/Trails'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/trails" component={Trails} />
                </Switch>
            </div>
        </Router>
    )
}

export default App