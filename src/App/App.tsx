import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Home } from '../containers';
import { Footer, Header, Progress } from '../components';

import './App.scss';

class App extends React.Component<any, any> {
  public state = {
    showLoader: false,
  };

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className='App'>
        <Header />
        {this.state.showLoader && <Progress />}
        
        {/* render app */}
        <main className='Main'>
          <Switch>
            {/* all app routes */}
            <Route path='*' component={Home} />
          </Switch>
        </main>

        {/* render footer */}
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
