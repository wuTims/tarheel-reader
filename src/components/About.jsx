import React from 'react';
import keydown from 'react-keydown';
import KeyToggleHandler, {KEYDOWN, KEYUP} from 'react-key-handler';

type State = {
  showMenu: boolean,
};

class About extends React.Component {
  state: State = { showMenu: false };

  render() {
    const { showMenu } = this.state;

    return (
      <div>
      	<div>
	        <h2>About</h2>
	        <p>This is a description of the site.</p>
	    </div>

        <KeyToggleHandler keyEventName={KEYDOWN} keyValue="s" onKeyHandle={this.handleMenu} />
        <KeyToggleHandler keyEventName={KEYUP} keyValue="s" onKeyHandle={this.handleMenu} />

        <h2>Component example:</h2>

        <p>Press <code>s</code> to <strong>toggle</strong> the menu.</p>

        {showMenu &&
          <ol>
            <li>hello</li>
            <li>world</li>
          </ol>
        }
      </div>
    );
  }

  handleMenu = (event: KeyboardEvent) => {
  	if(event.type == "keydown" && !this.state.showMenu){
	    event.preventDefault();
	    this.setState({ showMenu: true });
  	}else if(event.type == "keyup" && this.state.showMenu){
  		event.preventDefault();
	  	this.setState({ showMenu: false});
  	}
  }

}

export default About;
