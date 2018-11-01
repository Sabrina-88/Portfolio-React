//project

import React , { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,  CardActions, Button} from 'react-mdl';

class Project extends Component {
	constructor(props){
		super(props);
		this.state = { activeTab: 0 };
	}
	toggleCategories(){
		if(this.state.activeTab === 0){
			return(
				<section>
				<div className="portfolio">
				<Card shadow={5} className="Card" >
					<CardTitle className="Card_Title" id="portfolio1" >
						FreeLancer
					</CardTitle>
					{/*<CardText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.		
					</CardText*/}
					<CardActions border>
					<Button colored><a href="https://github.com/Sabrina-88/freelancer" target="_blank">Github</a></Button>
					<Button colored><a href="https://sabrina-88.github.io/freelancer/" target="_blank">Link</a></Button>
					</CardActions>	
				</Card>
				
				<Card shadow={5} className="Card" >
					<CardTitle className="Card_Title" id="portfolio2" >
						Data Dashboard
					</CardTitle>
					<CardActions border>
					<Button colored><a href="https://github.com/Sabrina-88/data-dashboard" target="_blank">Github</a></Button>
					<Button colored><a href="https://sabrina-88.github.io/data-dashboard/" target="_blank">Link</a></Button>
					</CardActions>	
				</Card>

				<Card shadow={5} className="Card" >
					<CardTitle className="Card_Title" id="portfolio3" >
						Lab Car
					</CardTitle>
					<CardActions border>
					<Button colored><a href="https://github.com/Sabrina-88/lab-car-boilerplate" target="_blank">Github</a></Button>
					<Button colored><a href="https://sabrina-88.github.io/lab-car-boilerplate/" target="_blank">Link</a></Button>
					</CardActions>	
				</Card>
				</div>
				</section>
			)
		}
		else if(this.state.activeTab === 1){
			return(
				<Card shadow={10} className="Card" >
					<CardTitle className="Card_Title" id="portfoliogame" >
						Emoticon Game
					</CardTitle>
					<CardActions border>
					<Button colored><a href="https://github.com/Sabrina-88/Emoticon_Game" target="_blank">Github</a></Button>
					<Button colored><a href="https://sabrina-88.github.io/Emoticon_Game/" target="_blank">Link</a></Button>
					</CardActions>
					
				</Card>
			)
		}
		else if (this.state.activeTab === 2){
			return(
				<div><h1>this is Jquery</h1></div>
			)
		}
	}

render (){
	return(
		<div className="category-tabs">
			<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
				<Tab>Todos</Tab>
				<Tab>Game</Tab>
				
				
			</Tabs>
			<section>
			<Grid>
			<Cell col={12}>
				
			</Cell>
			</Grid>
				<div className="content">{this.toggleCategories()}</div>

			</section>
		</div>
		)
}
}

export default Project;